import { parseUnits } from 'ethers/lib/utils';
import { networkConfig } from '~/lib/config/network-config';
import { tokenFormatAmount } from '~/lib/services/token/token-util';
import { useSubmitTransaction } from '~/lib/util/useSubmitTransaction';

export function useRewardPoolWithdraw() {
  const { submitAsync, ...rest } = useSubmitTransaction({
    config: {
      addressOrName: networkConfig.nft.nftStakingContract,
      contractInterface: ['function withdraw(uint _pid, uint _amount) external'],
      functionName: 'withdraw',
    },
    transactionType: 'UNSTAKE',
  });

  async function withdrawFromPool(poolId: number, amount: string) {
    await submitAsync({
      args: [poolId, parseUnits(amount)],
      toastText: `Withdraw from staking pool`,
      walletText: `Withdraw ${tokenFormatAmount(amount)} from staking pool`,
    });
  }

  return {
    withdrawFromPool,
    ...rest,
  };
}
