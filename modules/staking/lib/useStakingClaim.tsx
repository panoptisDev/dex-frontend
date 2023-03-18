import { parseUnits } from 'ethers/lib/utils';
import { networkConfig } from '~/lib/config/network-config';
import { useSubmitTransaction } from '~/lib/util/useSubmitTransaction';

export function useClaimStaking() {
  const { submitAsync, ...rest } = useSubmitTransaction({
    config: {
      addressOrName: networkConfig.nft.nftStakingContract,
      contractInterface: ['function deposit(uint256, uint256) external'],
      functionName: 'deposit',
    },
    transactionType: 'HARVEST',
  });

  async function claimStakingReward(poolId: number, tokenSymbol: string) {
    await submitAsync({
      args: [poolId, parseUnits('0')],
      toastText: `Claiming ${tokenSymbol} from staking pool`,
      walletText: `Claiming ${tokenSymbol} from staking pool`,
    });
  }

  return {
    claimStakingReward,
    ...rest,
  };
}
