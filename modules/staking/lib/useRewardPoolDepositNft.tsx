import { RewardPool } from '~/apollo/generated/graphql-codegen-generated';
import { useSubmitTransaction } from '~/lib/util/useSubmitTransaction';
import { useRewardPools } from './useRewardPoolStaking';
import StakingNFTPools from '~/lib/abi/StakingNFTPools.json';
import { networkConfig } from '~/lib/config/network-config';

export function useRewardPoolDepositNft(pool: RewardPool) {
  const { refetchStakingPools } = useRewardPools();

  const { submitAsync, ...rest } = useSubmitTransaction({
    config: {
      addressOrName: networkConfig.nft.nftStakingContract,
      contractInterface: StakingNFTPools,
      functionName: 'deposit(uint256,uint256,uint256[])',
    },
    transactionType: 'STAKE',
  });

  async function depositToPool(poolId: number, amount: number, tokenId: number) {
    await submitAsync({
      args: [poolId, amount, [tokenId]],
      toastText: `Deposit NFT into staking pool`,
      walletText: `Deposit ${tokenId} into staking pool`,
    });

    refetchStakingPools();
  }

  return {
    depositToPool,
    ...rest,
  };
}
