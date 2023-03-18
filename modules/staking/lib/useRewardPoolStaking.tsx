import { createContext, ReactNode, useContext } from 'react';
import { useGetRewardPoolsQuery } from '~/apollo/generated/graphql-codegen-generated';
import { useUserAccount } from '~/lib/user/useUserAccount';

export interface RewardPoolContextType {}

function _useRewardPools() {
  const { userAddress } = useUserAccount();

  const {
    data: stakingPools,
    loading: loadingPools,
    refetch: refetchStakingPools,
  } = useGetRewardPoolsQuery({
    fetchPolicy: 'network-only',
    pollInterval: 15000,
    variables: {
      user: userAddress || '',
    },
  });

  return {
    loadingPools,
    stakingPools: stakingPools?.getRewardPools || [],
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
