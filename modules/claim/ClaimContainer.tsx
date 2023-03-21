import { SimpleGrid, Box, GridItem, Text, Skeleton } from '@chakra-ui/react';
import NextImage from 'next/image';
import VertekIcon from '~/assets/svg/vertektransparent.svg';
import { useClaimsData } from './lib/useClaimsData';
import { useEffect, useState } from 'react';
import { ClaimTable } from './components/ClaimTable';
import { Gauge } from '~/lib/services/staking/types';
import { NoRewardsBox } from './components/NoRewardsBox';
import { GaugeRewardsContainer } from './components/GaugeRewardsContainer';
import { ProtocolRewardsList } from './components/ProtocolRewardsList';
import { useProtocolRewardClaim } from './lib/useProtocolRewardsClaim';
import { Loading } from '~/components/loading/Loading';
import { FadeInOutBox } from '~/components/animation/FadeInOutBox';
import { TableHeading } from './components/TableHeading';
import { useUserAccount } from '~/lib/user/useUserAccount';
import { BribeClaim } from './components/BribeClaim';
import { useUserPendingRewards } from './lib/useUserRewards';

export function ClaimContainer() {
  const [gaugesWithRewards, setGaugesWithRewards] = useState<Gauge[]>([]);
  const [hasGaugeRewards, sethasGaugeRewards] = useState<boolean>(false);
  const [hasProtocolRewards, sethasProtocolRewards] = useState<boolean>(false);
  const [claiming, setClaiming] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  const { isConnected, userAddress } = useUserAccount();

  // const {
  //   rewardGauges,
  //   isLoading: isClaimsLoading,
  //   refetchClaimsData,
  //   protocolData,
  //   bribeClaims,
  //   getUserBribeClaims,
  // } = useClaimsData();

  // const { claimProtocolRewards, txState } = useProtocolRewardClaim();

  const {
    userBribeClaims,
    stakingRewards,
    protocolRewards,
    isRewardsLoading,

    refetchAll,
    refetchBribeRewards,
  } = useUserPendingRewards();

  // useEffect(() => {
  //   if (txState.error) {
  //     console.error(txState.error);
  //     setClaiming(false);
  //   }

  //   if (txState.isPending) {
  //     setClaiming(true);
  //   } else {
  //     setClaiming(false);
  //   }

  //   if (txState.isConfirmed) {
  //     //refetchClaimsData();
  //     setClaiming(false);
  //   }
  // }, [txState]);

  return (
    <>
      {isRewardsLoading ? (
        <Loading loading={loading} />
      ) : (
        <SimpleGrid columns={1} paddingX={0} spacing={6} borderRadius="12px">
          <GridItem paddingY={0}>
            <Text fontSize="1.5rem" mb="2">
              BNB Chain Liquidity Incentives
            </Text>
          </GridItem>

          <GridItem display="flex" flexDirection="column" paddingY="0">
            <Box flexDirection="row" display="flex" mb="1">
              <Box marginRight="2" display="flex" justifyContent="">
                <NextImage width="36px" height="36px" src={VertekIcon} />
              </Box>
              <Text fontSize="1.3rem">Vertek (VRTK) Earnings</Text>
            </Box>

            <NoRewardsBox label="No gauge staking rewards to claim" />
          </GridItem>

          <GridItem display="flex" flexDirection="column" paddingY="0">
            <TableHeading
              text="veVRTK and Protocol Earnings"
              tooltipText="Protocol fee distribution is based on your percentage ownership of veVRTK at the start of the previous weeks epoch."
            />

            <Box>
              <NoRewardsBox label="No veVRTK protocol rewards to claim" />
            </Box>
          </GridItem>

          <GridItem display="flex" flexDirection="column">
            <TableHeading text="Bribe Earnings" />

            <Box>
              <NoRewardsBox label="No bribe rewards to claim" />
            </Box>
          </GridItem>

          <GridItem display="flex" flexDirection="column">
            <TableHeading text="Other Gauge Earnings" />

            <Box>
              <NoRewardsBox label="No additional staking rewards to claim" />
            </Box>
          </GridItem>
        </SimpleGrid>
      )}
    </>
  );
}
