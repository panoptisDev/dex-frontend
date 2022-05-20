import { useSubmitTransaction, vaultContractConfig } from '~/modules/global/useSubmitTransaction';
import { GqlPoolUnion } from '~/apollo/generated/graphql-codegen-generated';
import { PoolJoinContractCallData } from '~/lib/services/pool/pool-types';
import { useAccount } from 'wagmi';
import { TokenAmountHumanReadable } from '~/lib/services/token/token-types';

export function useJoinPool(pool: GqlPoolUnion) {
    const { data: accountData } = useAccount();
    const { submit, submitAsync, ...rest } = useSubmitTransaction({
        contractConfig: vaultContractConfig,
        functionName: pool.__typename === 'GqlPoolPhantomStable' ? 'batchSwap' : 'joinPool',
        toastType: 'JOIN',
    });

    function joinPool(contractCallData: PoolJoinContractCallData, tokenAmountsIn: TokenAmountHumanReadable[]) {
        if (contractCallData.type === 'JoinPool') {
            submit({
                args: [
                    pool.id,
                    accountData?.address,
                    accountData?.address,
                    {
                        assets: contractCallData.assets,
                        maxAmountsIn: contractCallData.maxAmountsIn,
                        userData: contractCallData.userData,
                        fromInternalBalance: false,
                    },
                ],
                toastText: tokenAmountsIn
                    .map((tokenAmount) => {
                        const token = pool.allTokens.find((token) => token.address === tokenAmount.address);

                        return `${token?.symbol}: ${tokenAmount.amount}`;
                    })
                    .join(', '),
            });
        }
    }

    return {
        joinPool,
        ...rest,
    };
}