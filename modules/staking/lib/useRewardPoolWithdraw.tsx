import { parseUnits } from 'ethers/lib/utils';
import { networkConfig } from '~/lib/config/network-config';
import { tokenFormatAmount } from '~/lib/services/token/token-util';
import { useSubmitTransaction } from '~/lib/util/useSubmitTransaction';
import { useRewardPools } from './useRewardPoolStaking';

export function useRewardPoolWithdraw() {
  const { refetchStakingPools } = useRewardPools();

  const { submitAsync, ...rest } = useSubmitTransaction({
    config: {
      addressOrName: networkConfig.nft.nftStakingContract,
      contractInterface: ['function withdraw(uint _pid, uint _amount) external nonReentrant'],
      functionName: 'withdraw(uint256,uint256)',
    },
    transactionType: 'UNSTAKE',
  });

  async function withdrawFromPool(poolId: number, amount: string) {
    await submitAsync({
      args: [poolId, parseUnits(amount, 18)],
      toastText: `Withdraw from staking pool`,
      walletText: `Withdraw ${tokenFormatAmount(amount)} from staking pool`,
    });

    refetchStakingPools();
  }

  return {
    withdrawFromPool,
    ...rest,
  };
}
