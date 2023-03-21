import { useNetworkConfig } from '~/lib/global/useNetworkConfig';
import { useUserAccount } from '~/lib/user/useUserAccount';
import { useSubmitTransaction } from '~/lib/util/useSubmitTransaction';

export function useProtocolRewardClaim() {
  const { userAddress } = useUserAccount();
  const networkConfig = useNetworkConfig();

  const { submit, ...rest } = useSubmitTransaction({
    config: {
      addressOrName: networkConfig.balancer.feeDistributor || '',
      contractInterface: ['function claimTokens(address, address[]) external'],
      functionName: 'claimTokens',
    },
    transactionType: 'HARVEST',
  });

  function claimProtocolRewards(tokens: string[]) {
    return submit({
      args: [userAddress, tokens],
      toastText: 'Claim pending veVRTK rewards',
    });
  }

  return {
    claimProtocolRewards,
    claimTxState: rest,
  };
}
