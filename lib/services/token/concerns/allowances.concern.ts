import { BigNumber, BigNumberish } from '@ethersproject/bignumber';
import { getAddress } from '@ethersproject/address';
import { formatUnits } from '@ethersproject/units';
import { JsonRpcProvider } from '@ethersproject/providers';
import { GqlToken } from '~/apollo/generated/graphql-codegen-generated';
import { multicall } from '~/lib/services/balancer/contract';
import ERC20Abi from '../../../abi/ERC20.json';

// TYPES
export type AllowanceMap = { [address: string]: string };
export type ContractAllowancesMap = { [address: string]: AllowanceMap };

export class AllowancesConcern {
    constructor(private readonly jsonProvider: JsonRpcProvider, private readonly chainId: string) {}

    public async getAllowancesForAccount(
        account: string,
        contractAddresses: string[],
        tokens: GqlToken[],
    ): Promise<ContractAllowancesMap> {
        try {
            const allContractAllowances = await Promise.all(
                contractAddresses.map((contractAddress) => this.getForContract(account, contractAddress, tokens)),
            );

            const result = Object.fromEntries(
                contractAddresses.map((contract, i) => [getAddress(contract), allContractAllowances[i]]),
            );
            return result;
        } catch (error) {
            console.error('Failed to fetch allowances for:', account, error);
            return {};
        }
    }

    public async getForContract(account: string, contractAddress: string, tokens: GqlToken[]): Promise<AllowanceMap> {
        const allowances: BigNumber[] = (
            await multicall<BigNumberish>(
                this.chainId,
                this.jsonProvider,
                ERC20Abi,
                tokens.map((token) => [token.address, 'allowance', [account, contractAddress]]),
            )
        ).map((balance) => BigNumber.from(balance ?? '0')); // If we fail to read a token's allowance, treat it as zero;

        return Object.fromEntries(
            tokens.map((token, i) => [getAddress(token.address), formatUnits(allowances[i], token.decimals)]),
        );
    }
}
