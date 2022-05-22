import { GqlPoolWeighted } from '~/apollo/generated/graphql-codegen-generated';
import {
    PoolExitBPTInForExactTokensOut,
    PoolExitData,
    PoolExitExactBPTInForOneTokenOut,
    PoolExitSingleAssetWithdrawForBptInOutput,
    PoolJoinContractCallData,
    PoolJoinData,
    PoolJoinEstimateOutput,
    PoolService,
} from '~/lib/services/pool/pool-types';
import { AmountHumanReadable, TokenAmountHumanReadable } from '~/lib/services/token/token-types';

export class PoolWeightedBoostedService implements PoolService {
    constructor(private pool: GqlPoolWeighted) {}

    public updatePool(pool: GqlPoolWeighted) {
        this.pool = pool;
    }

    public async joinGetContractCallData(data: PoolJoinData): Promise<PoolJoinContractCallData> {
        throw new Error('TODO');
    }

    public async exitPoolEncode(data: PoolExitData): Promise<string> {
        return '';
    }

    public async joinGetEstimate(
        tokenAmountsIn: TokenAmountHumanReadable[],
        slippage: AmountHumanReadable,
    ): Promise<PoolJoinEstimateOutput> {
        return {
            priceImpact: 0,
            minBptReceived: '0',
        };
    }

    public async joinGetProportionalSuggestionForFixedAmount(
        fixedAmount: TokenAmountHumanReadable,
    ): Promise<TokenAmountHumanReadable[]> {
        return [];
    }

    public async exitGetSingleAssetWithdrawEstimate(
        bptIn: AmountHumanReadable,
        tokenOutAddress: string,
    ): Promise<PoolExitSingleAssetWithdrawForBptInOutput> {
        return {
            tokenAmount: '0',
            priceImpact: 0,
        };
    }

    public async exitGetProportionalWithdrawEstimate(bptIn: AmountHumanReadable): Promise<TokenAmountHumanReadable[]> {
        return [];
    }
}
