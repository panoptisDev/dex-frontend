import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import {
  GqlBaseTokenReward,
  useGetUserBribeClaimsLazyQuery,
  useGetUserGaugeRewardsLazyQuery,
} from '~/apollo/generated/graphql-codegen-generated';
import { useUserAccount } from '~/lib/user/useUserAccount';

function _useUserRewards() {
  const [isRewardsLoading, setIsRewardsLoading] = useState<boolean>(true);
  const { isConnected, userAddress } = useUserAccount();

  const [
    getUserBribeClaims,
    { loading: isLoadingClaims, error: bribeError, data: bribeData, refetch: refetchBribeRewards },
  ] = useGetUserBribeClaimsLazyQuery({
    pollInterval: 15000,
  });

  const [
    getUserGaugeRewards,
    { loading: loadingRewards, data, error: rewardsError, refetch: refetchAllRewards },
  ] = useGetUserGaugeRewardsLazyQuery();

  useEffect(() => {
    if (userAddress && isConnected) {
      getUserGaugeRewards({
        variables: {
          user: userAddress || '',
        },
      });

      getUserBribeClaims({
        variables: {
          user: userAddress || '',
        },
      });
    }
  }, [isConnected, userAddress]);

  useEffect(() => {
    if (isLoadingClaims || loadingRewards) {
      setIsRewardsLoading(true);
    } else {
      setIsRewardsLoading(false);
    }
  }, [loadingRewards, isLoadingClaims]);

  useEffect(() => {
    if (bribeError) {
      console.log(bribeError);
    }

    if (rewardsError) {
      console.log(rewardsError);
    }
  }, [bribeError, rewardsError]);

  const stakingRewards = (data?.userGetUserPendingGaugeRewards.stakingRewards ||
    []) as GqlBaseTokenReward[];
  const protocolRewards = data?.userGetUserPendingGaugeRewards.protocolRewards || [];
  const userBribeClaims = bribeData?.getUserBribeClaims || [];

  console.log(stakingRewards);

  function refetchAll() {
    refetchBribes();
    refetchRewards();
  }

  function refetchBribes() {
    console.log('Refetching bribes...');
    refetchBribeRewards({
      user: userAddress,
    });
  }

  function refetchRewards() {
    console.log('Refetching rewards...');
    refetchAllRewards({
      user: userAddress,
    });
  }

  return {
    userBribeClaims,
    stakingRewards,
    protocolRewards,
    isRewardsLoading,

    refetchRewards,
    refetchBribes,
    refetchAll,
    refetchBribeRewards,
  };
}

export const UserPendingRewardsContext = createContext<ReturnType<typeof _useUserRewards> | null>(
  null,
);

export function UserPendingRewardsProvider(props: { children: ReactNode }) {
  const value = _useUserRewards();

  return (
    <UserPendingRewardsContext.Provider value={value}>
      {props.children}
    </UserPendingRewardsContext.Provider>
  );
}

export function useUserPendingRewards() {
  return useContext(UserPendingRewardsContext) as ReturnType<typeof _useUserRewards>;
}
