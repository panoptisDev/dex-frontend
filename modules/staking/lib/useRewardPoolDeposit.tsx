import { parseUnits } from 'ethers/lib/utils';
import { networkConfig } from '~/lib/config/network-config';
import { tokenFormatAmount } from '~/lib/services/token/token-util';
import { useSubmitTransaction } from '~/lib/util/useSubmitTransaction';

export function useRewardPoolDeposit() {
  const { submitAsync, ...rest } = useSubmitTransaction({
    config: {
      addressOrName: networkConfig.nft.nftStakingContract,
      contractInterface: ['function deposit(uint256, uint256) external'],
      functionName: 'deposit',
    },
    transactionType: 'STAKE',
  });

  async function depositToPool(poolId: number, amount: string) {
    await submitAsync({
      args: [poolId, parseUnits(amount)],
      toastText: `Deposit VRTK into staking pool`,
      walletText: `Deposit ${tokenFormatAmount(amount)} VRTK into staking pool`,
    });
  }

  return {
    depositToPool,
    ...rest,
  };
}
