import { intervalToDuration } from 'date-fns';
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import {
  LiquidityGauge,
  useGetCurrentEpochQuery,
  useGetLiquidityGaugesLazyQuery,
  useGetLiquidityGaugesQuery,
} from '~/apollo/generated/graphql-codegen-generated';
import { gaugeControllerDecorator } from '~/lib/services/staking/gauge-controller.decorator';
import { VotingGauge } from '~/lib/services/staking/types';
import { useUserAccount } from '~/lib/user/useUserAccount';
import { getVotePeriodEndTime } from '~/lib/util/epoch-utils';

const GAUGE_POLLING_INTERVAL = 15000;

/**
 * Gets the list of current gauges and provides a countdown timer for epoch end
 */
export function _useGauges() {
  const [votingPeriodEnd, setVotingPeriodEnd] = useState<number[]>();
  const [votingPeriodLastHour, setVotingPeriodLastHour] = useState<boolean>();
  const [votingGauges, setVotingGauges] = useState<any[]>();
  const [unallocatedVotes, setUnallocatedVotes] = useState<number>();

  const { userAddress, isConnected } = useUserAccount();

  const { loading: isLoadingEpoch, data: epochData } = useGetCurrentEpochQuery({
    pollInterval: GAUGE_POLLING_INTERVAL,
  });

  console.log(votingGauges);

  const [
    fetchGauges,
    {
      loading: isLoadingGauges,
      error: gaugeFetchError,
      startPolling: startGaugesPolling,
      stopPolling: stopGaugesPolling,
      data: gaugesData,
      refetch: refetchGauges,
    },
  ] = useGetLiquidityGaugesLazyQuery();

  useEffect(() => {
    if (gaugeFetchError) {
      console.log(gaugeFetchError);
    }
  }, [gaugeFetchError]);

  useEffect(() => {
    console.log(epochData);
    if (!isLoadingEpoch && epochData?.getCurrentGaugesEpoch) {
      fetchGauges({
        variables: {
          epoch: epochData.getCurrentGaugesEpoch.epoch,
        },
      });

      startGaugesPolling(GAUGE_POLLING_INTERVAL);
    }

    return () => stopGaugesPolling();
  }, [isLoadingEpoch, epochData]);

  useEffect(() => {
    if (gaugesData?.getLiquidityGauges) {
      console.log(gaugesData?.getLiquidityGauges);
    }
  }, [gaugesData]);

  function setUserVotes(gauges: any[]) {
    const totalVotes = 1e4; // 10,000
    // Set the users remaining votes
    const votesRemaining = gauges.reduce((remainingVotes: number, gauge) => {
      return remainingVotes - parseFloat(gauge.userVotes);
    }, totalVotes);

    setUnallocatedVotes(votesRemaining);

    // filter out temp old gauge after user votes tally is complete
    // return gauges.filter(
    //   (g) => g.pool.id !== '0x5deb10ed6a66a1e6188b7925a723b6bdfd97476500020000000000000000000a',
    // );

    return gauges;
  }

  // Update voting period timer
  useEffect(() => {
    const nowInterval = setInterval(() => {
      const periodEnd = getVotePeriodEndTime();
      const interval: Interval = { start: Date.now(), end: periodEnd };
      const timeUntilEnd: Duration = intervalToDuration(interval);
      const formattedTime = [
        (timeUntilEnd.days || 0) % 7,
        timeUntilEnd.hours || 0,
        timeUntilEnd.minutes || 0,
        timeUntilEnd.seconds || 0,
      ];

      const isLastHour = (timeUntilEnd.days || 0) < 1 && (timeUntilEnd.hours || 0) < 1;

      setVotingPeriodEnd(formattedTime);
      setVotingPeriodLastHour(isLastHour);
    }, 1000);

    return () => clearInterval(nowInterval);
  }, []);

  // Set gauge voting info for the list of current gauges
  // TODO: Attach on backend
  // Gauge "epoch info" current/next. (bribes, votes/weights)
  useEffect(() => {
    const setGauges = async () => {
      // TODO: Can pull user votes from backend with gauges now
      const decoratedGauges = await gaugeControllerDecorator.decorateWithVotes(
        (gaugesData?.getLiquidityGauges || []) as unknown as VotingGauge[],
        userAddress,
      );

      const filteredGauges = setUserVotes(decoratedGauges);
      setVotingGauges(filteredGauges);
    };

    if (userAddress && isConnected && !isLoadingGauges && gaugesData?.getLiquidityGauges) {
      setGauges();
    }
  }, [isLoadingGauges, gaugesData, userAddress, isConnected]);

  return {
    isLoading: !votingGauges && isLoadingGauges,
    votingGauges,
    votingPeriodEnd,
    votingPeriodLastHour,
    unallocatedVotes,
    refetchGauges,
  };
}

export const VotingGaugeListContext = createContext<ReturnType<typeof _useGauges> | null>(null);

export function GaugeListProvider(props: { children: ReactNode }) {
  const value = _useGauges();

  return (
    <VotingGaugeListContext.Provider value={value}>
      {props.children}
    </VotingGaugeListContext.Provider>
  );
}

export function useVotingGauges() {
  return useContext(VotingGaugeListContext) as ReturnType<typeof _useGauges>;
}
