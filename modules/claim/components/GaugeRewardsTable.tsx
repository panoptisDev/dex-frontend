import { Box, Button, Flex, Grid, GridItem, Text } from '@chakra-ui/react';
import { memo, useEffect } from 'react';
import { GqlUserGaugeRewardInfo } from '~/apollo/generated/graphql-codegen-generated';
import { TokenAvatarSetInList } from '~/components/token/TokenAvatarSetInList';
import { useGaugeRewardsClaim } from '../lib/useGaugeRewardsClaim';
import { useUserPendingRewards } from '../lib/useUserRewards';
import { GaugeRewardRow } from './GaugeRewardRow';

const MemoizedTokenAvatarSetInList = memo(TokenAvatarSetInList);

type Props = {
  userGaugeReward: GqlUserGaugeRewardInfo;
  // onClaimSuccess: () => void;
};

export function GaugeRewardsTable({ userGaugeReward }: Props) {
  const gauge = userGaugeReward.pool.staking?.gauge;

  const { doGaugeRewardClaim, claimTxState } = useGaugeRewardsClaim(gauge?.gaugeAddress || '');
  const { refetchRewards } = useUserPendingRewards();

  useEffect(() => {
    if (claimTxState.isConfirmed) {
      claimTxState.reset();
      refetchRewards();
    }
  }, [claimTxState]);

  return (
    <Box borderRadius="16px" mt={5}>
      <Box
        borderTopRadius="16px"
        borderBottomRadius={{ base: '16px', lg: 'none' }}
        overflow="hidden"
        boxShadow="0 0px 5px #5BC0F8, 0 0px 10px #4A4AF6"
      >
        <Grid
          display={{ base: 'none', lg: 'grid' }}
          paddingX="6"
          paddingY="4"
          templateColumns={{
            base: 'repeat(1fr 1fr)',
            lg: '1fr 3fr 1fr 1fr 1fr',
          }}
          bg="vertek.slatepurple.900"
        >
          <GridItem>
            <Flex justifyContent="space-between">
              <Text ml="1" fontWeight="bold">
                {userGaugeReward.pool.name}
              </Text>
            </Flex>
          </GridItem>

          <GridItem></GridItem>
          <GridItem>
            <Text fontWeight="bold" textAlign="left">
              Amount
            </Text>
          </GridItem>
          <GridItem justifyContent="center" display="flex">
            <Text fontWeight="bold">Value</Text>
          </GridItem>
        </Grid>
        <Grid
          display={{ base: 'grid', lg: 'none' }}
          paddingX="1"
          paddingY="4"
          borderTopRadius="16px"
          templateColumns={{
            base: 'repeat(1fr 1fr)',
            lg: '1fr 3fr 1fr 1fr 1fr',
          }}
          bg="vertek.slatepurple.900"
        >
          <GridItem>
            <Flex justifyContent="center" alignItems="center">
              <Text ml="1" fontWeight="bold">
                {userGaugeReward.pool.name}
              </Text>
            </Flex>
          </GridItem>
        </Grid>
      </Box>

      {userGaugeReward.rewards.map((reward) => (
        <GaugeRewardRow key={reward.token.address} reward={reward} />
      ))}

      <Box mb={{ base: 'none', lg: '10' }}>
        <Flex
          display={{ base: 'grid', lg: 'grid' }}
          p="3"
          mt={{ base: '-1rem', lg: '0rem' }}
          borderLeftWidth={{ base: '0px', lg: '1px' }}
          borderRightWidth={{ base: '0px', lg: '1px' }}
          borderBottomWidth={{ base: '0px', lg: '1px' }}
          borderColor="#4A4AF6"
          borderBottomRadius="16px"
          bg={{ base: 'none', lg: 'vertek.slatepurple.900' }}
          justifyContent={{ base: 'center', lg: 'flex-end' }}
          width={{ base: 'none', lg: '125px' }}
        >
          <Button
            display={{ base: 'flex', lg: 'none' }}
            variant="verteklight"
            padding="1em"
            borderRadius="10px"
            mt="1"
            ml="4"
            borderWidth="1px"
            alignItems="center"
            height="2em"
            disabled={!userGaugeReward.rewards.length || claimTxState.isPending}
            width={{ base: '200px', lg: 'none' }}
            onClick={doGaugeRewardClaim}
          >
            Claim
          </Button>
        </Flex>
      </Box>
    </Box>
  );
}
