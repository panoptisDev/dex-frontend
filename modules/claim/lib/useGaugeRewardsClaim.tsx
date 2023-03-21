import { useSubmitTransaction } from '~/lib/util/useSubmitTransaction';

export function useGaugeRewardsClaim(gaugeAddress: string) {
  const contractInterface = ['function claim_rewards() external'];

  const { submit, ...claimTxState } = useSubmitTransaction({
    config: {
      addressOrName: gaugeAddress,
      contractInterface,
      functionName: 'claim_rewards',
    },
    transactionType: 'HARVEST',
  });

  async function doGaugeRewardClaim() {
    await submit({
      toastText: 'Claim gauge rewards',
    });
  }

  return {
    doGaugeRewardClaim,
    claimTxState,
  };
}
