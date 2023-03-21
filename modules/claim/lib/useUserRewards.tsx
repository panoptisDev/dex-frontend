import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import {
  GqlBaseTokenReward,
  GqlUserGaugeRewardInfo,
  useGetUserBribeClaimsLazyQuery,
  useGetUserGaugeRewardsLazyQuery,
} from '~/apollo/generated/graphql-codegen-generated';
import { useUserAccount } from '~/lib/user/useUserAccount';

const pollInterval = 15000;

function _useUserRewards() {
  const { isConnected, userAddress } = useUserAccount();

  const [
    getUserBribeClaims,
    {
      loading: isLoadingClaims,
      error: bribeError,
      data: bribeData,
      startPolling: startPollingBribes,
      stopPolling: stopPollingBribes,
      refetch: refetchBribeRewards,
    },
  ] = useGetUserBribeClaimsLazyQuery();

  const [
    getUserGaugeRewards,
    {
      loading: loadingRewards,
      data,
      error: rewardsError,
      startPolling: startPollingRewards,
      stopPolling: stopPollingRewards,
      refetch: refetchAllRewards,
    },
  ] = useGetUserGaugeRewardsLazyQuery();

  useEffect(() => {
    if (userAddress && isConnected) {
      getUserGaugeRewards({
        variables: {
          user: userAddress || '',
        },
      });
      startPollingRewards(pollInterval);

      getUserBribeClaims({
        variables: {
          user: userAddress || '',
        },
      });

      startPollingBribes(pollInterval);
    }

    return () => {
      stopPollingRewards();
      stopPollingBribes();
    };
  }, [isConnected, userAddress]);

  useEffect(() => {
    if (bribeError) {
      console.log(bribeError);
    }

    if (rewardsError) {
      console.log(rewardsError);
    }
  }, [bribeError, rewardsError]);

  const userBribeClaims = bribeData?.getUserBribeClaims || [];

  const stakingRewards = (data?.userGetUserPendingGaugeRewards.stakingRewards ||
    []) as GqlBaseTokenReward[];
  const protocolRewards = (data?.userGetUserPendingGaugeRewards.protocolRewards ||
    []) as GqlBaseTokenReward[];
  const gaugeRewards = (data?.userGetUserPendingGaugeRewards.gaugeRewards ||
    []) as GqlUserGaugeRewardInfo[];

  console.log(gaugeRewards);

  function refetchAll() {
    refetchBribes();
    refetchRewards();
  }

  function refetchBribes() {
    console.log('Refetching bribes...');
    refetchBribeRewards({
      user: userAddress,
    });
  }

  function refetchRewards() {
    console.log('Refetching rewards...');
    refetchAllRewards({
      user: userAddress,
    });
  }

  return {
    userBribeClaims,
    stakingRewards,
    protocolRewards,
    gaugeRewards,
    isRewardsLoading: isLoadingClaims || loadingRewards,

    refetchRewards,
    refetchBribes,
    refetchAll,
    refetchBribeRewards,
  };
}

export const UserPendingRewardsContext = createContext<ReturnType<typeof _useUserRewards> | null>(
  null,
);

export function UserPendingRewardsProvider(props: { children: ReactNode }) {
  const value = _useUserRewards();

  return (
    <UserPendingRewardsContext.Provider value={value}>
      {props.children}
    </UserPendingRewardsContext.Provider>
  );
}

export function useUserPendingRewards() {
  return useContext(UserPendingRewardsContext) as ReturnType<typeof _useUserRewards>;
}
