import { createContext, ReactNode, useContext } from 'react';
import { useGetRewardPoolsDataQuery } from '~/apollo/generated/graphql-codegen-generated';
import { useUserAccount } from '~/lib/user/useUserAccount';

export interface RewardPoolContextType {}

function _useRewardPools() {
  const { userAddress } = useUserAccount();

  const {
    data: stakingPools,
    loading: loadingPools,
    refetch: refetchStakingPools,
  } = useGetRewardPoolsDataQuery({
    fetchPolicy: 'cache-first',
    pollInterval: 15000,
  });

  return {
    loadingPools,
    stakingPools: stakingPools?.getRewardPoolsData || [],
    refetchStakingPools,
  };
}

export const RewardPoolContext = createContext<ReturnType<typeof _useRewardPools> | null>(null);

export function RewardPoolProvider(props: { children: ReactNode }) {
  const value = _useRewardPools();

  return <RewardPoolContext.Provider value={value}>{props.children}</RewardPoolContext.Provider>;
}

export function useRewardPools() {
  return useContext(RewardPoolContext) as ReturnType<typeof _useRewardPools>;
}
