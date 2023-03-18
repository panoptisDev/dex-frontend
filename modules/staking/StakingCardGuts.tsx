import { Flex, SimpleGrid, Text, Button, useDisclosure, GridItem, Box } from '@chakra-ui/react';
import { RewardPoolDepositModal } from './components/RewardPoolDepositModal';
import { RewardPoolNftDepositModal } from './components/RewardPoolNftDepositModal';
import { RewardPoolWithdrawModal } from './components/RewardPoolWithdrawModal';
import { RewardPoolNftWithdrawModal } from './components/RewardPoolNftWithdrawModal';
import { numberFormatUSDValue } from '~/lib/util/number-formats';
import { tokenFormatAmount } from '~/lib/services/token/token-util';
import { useUserTokenBalances } from '~/lib/user/useUserTokenBalances';
import { networkConfig } from '~/lib/config/network-config';
import { useRewardPools } from './lib/useRewardPoolStaking';
import { useRewardPoolDeposit } from './lib/useRewardPoolDeposit';
import { StakingClaimModal } from './components/StakingClaimModal';

export function StakingCardGuts(props: {
  pool: any;
  // pool: RewardPool;
  // poolInfo: any;
  // apr: any;
  // aprDaily: any;
  // priceOfToken: any;
  // boostedAprDaily: any;
  // priceOfTokenRewards: any;
  // userInfo: any;
  // userTokens: any;
  // userUnclaimedRewards: any;
}) {
  const pool = props.pool;
  // const poolInfo = props.poolInfo;
  // const apr = props.apr;
  // const aprDaily = props.aprDaily;
  // const boostedAprDaily = props.boostedAprDaily;
  // const priceOfToken = props.priceOfToken;
  // const priceOfTokenRewards = props.priceOfTokenRewards;
  // const userInfo = props.userInfo;
  // const userTokens = props.userTokens;
  // const userUnclaimedRewards = props.userUnclaimedRewards;

  // const {
  //   isOpen: isDepositNftOpen,
  //   onOpen: onDepositNftOpen,
  //   onClose: onDepositNftClose,
  // } = useDisclosure();

  // const {
  //   isOpen: isWithdrawNftOpen,
  //   onOpen: onWithdrawNftOpen,
  //   onClose: onWithdrawNftClose,
  // } = useDisclosure();

  const { isOpen: isDepositOpen, onOpen: onDepositOpen, onClose: onDepositClose } = useDisclosure();
  const {
    isOpen: isWithdrawOpen,
    onOpen: onWithdrawOpen,
    onClose: onWithdrawClose,
  } = useDisclosure();
  const { isOpen: isClaimOpen, onOpen: onClaimOpen, onClose: onClaimClose } = useDisclosure();

  const { getUserBalance, refetch: refetchTokenBalances } = useUserTokenBalances();

  const { refetchStakingPools } = useRewardPools();
  const { depositToPool, ...depositQuery } = useRewardPoolDeposit();

  const userVrtkBalance = getUserBalance(networkConfig.beets.address.toLowerCase());

  function handleClose() {
    refetchData();
    onDepositClose();
    onWithdrawClose();
    onClaimClose();
  }

  function refetchData() {
    refetchStakingPools();
    refetchTokenBalances();
  }

  async function handleClaim() {
    await depositToPool(pool.poolId, '0');
    refetchData();
  }

  return (
    <>
      <SimpleGrid
        style={{ minWidth: '100%' }}
        bg=""
        borderTopRadius="20px"
        columns={2}
        gap={10}
        padding="1.5em"
        marginTop="4"
      >
        <Text textAlign="left" fontWeight="bold">
          APR
        </Text>
        <Flex direction="column">
          <Text textAlign="right" fontWeight="bold">
            {pool.aprs.apr}%
          </Text>
          <Text fontSize="0.7rem" textAlign="right">
            {pool.aprs.daily}% Daily
          </Text>
          {/* <Text fontSize=".8rem" textAlign="right" style={{ color: 'red' }}>
            +{boostedAprDaily.toFixed(2)}% Daily with NFT
          </Text> */}
        </Flex>

        <Text textAlign="left" fontWeight="bold">
          Earning
        </Text>
        <Flex direction="column" alignItems="flex-end">
          <Text textAlign="right" fontWeight="bold" width="100%">
            {tokenFormatAmount(pool.userInfo.pendingRewards)}
          </Text>
          <Text textAlign="right" fontWeight="bold" width="100%">
            {pool.rewardToken.symbol}
          </Text>

          <Text fontSize="0.7rem" textAlign="right">
            {numberFormatUSDValue(pool.userInfo.pendingRewardValue)}
          </Text>

          <Button
            variant="verteklight"
            bgColor="vertek.neonpurple.500"
            background="none"
            padding="1em"
            borderRadius="10px"
            mt="2"
            ml="4"
            borderWidth="1px"
            alignItems="center"
            width="full"
            height="2em"
            disabled={!pool.userInfo.hasPendingRewards || depositQuery.isPending}
            onClick={onClaimOpen}
          >
            Claim
          </Button>
        </Flex>

        <Text textAlign="left" fontWeight="bold">
          My Balance
        </Text>
        <Flex direction="column">
          <Text textAlign="right" fontWeight="bold">
            {pool.userInfo.amountDeposited} VRTK
          </Text>

          <Text fontSize="0.7rem" textAlign="right">
            ${pool.userInfo.depositValue}
          </Text>
        </Flex>
        <GridItem
          colSpan={2}
          gap="3"
          marginX=""
          alignItems="center"
          justifyContent="center"
          display="flex"
          width="full"
        >
          <Button
            variant="verteklight"
            width="full"
            onClick={onWithdrawOpen}
            disabled={Number(pool.userInfo.amountDeposited) == 0}
          >
            Unstake
          </Button>
          <Button variant="vertekdark" width="full" onClick={onDepositOpen}>
            Stake
          </Button>
        </GridItem>
        <GridItem
          colSpan={2}
          gap="3"
          marginX=""
          alignItems="center"
          justifyContent="center"
          display="flex"
          width="full"
        >
          <Button variant="verteklight" disabled={true} width="full">
            Unstake NFT
          </Button>
          <Button variant="vertekdark" disabled={true} width="full">
            Stake NFT
          </Button>
        </GridItem>
      </SimpleGrid>

      <RewardPoolDepositModal
        isOpen={isDepositOpen}
        onOpen={onDepositOpen}
        onClose={handleClose}
        pool={pool}
        userVrtkBalance={userVrtkBalance}
      />
      {/* <RewardPoolNftDepositModal
        isOpen={isDepositNftOpen}
        onOpen={onDepositNftOpen}
        onClose={onDepositNftClose}
        pool={pool}
      /> */}

      <RewardPoolWithdrawModal
        isOpen={isWithdrawOpen}
        onOpen={onWithdrawOpen}
        onClose={handleClose}
        pool={pool}
      />
      {/* <RewardPoolNftWithdrawModal
        isOpen={isWithdrawNftOpen}
        onOpen={onWithdrawNftOpen}
        onClose={onWithdrawNftClose}
        pool={pool}
      /> */}

      <StakingClaimModal
        isOpen={isClaimOpen}
        onOpen={onClaimOpen}
        onClose={handleClose}
        pool={pool}
      />
    </>
  );
}
