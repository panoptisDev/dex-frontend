import { useEffect, useState } from 'react';
import {
  GetUserBribeClaimsLazyQueryHookResult,
  useGetUserBribeClaimsLazyQuery,
} from '~/apollo/generated/graphql-codegen-generated';
import { useUserAccount } from '~/lib/user/useUserAccount';

export function useUserBribeClaims() {
  const [userBribeClaims, setUserBribeClaims] = useState<GetUserBribeClaimsLazyQueryHookResult>();

  const { isConnected, userAddress } = useUserAccount();

  const [
    getUserBribeClaims,
    { loading: isLoadingClaims, error: bribeError, data, refetch: refetchBribeRewards },
  ] = useGetUserBribeClaimsLazyQuery({
    pollInterval: 15000,
  });

  useEffect(() => {
    const setUserData = async () => {
      const idk = getUserBribeClaims({
        variables: {
          user: userAddress || '',
        },
      });
    };

    if (isConnected && userAddress) {
    }
  }, [isConnected, userAddress]);

  useEffect(() => {
    if (bribeError) {
      console.log(bribeError);
    }
  }, [bribeError]);

  useEffect(() => {
    if (data?.getUserBribeClaims) {
      // setUserBribeClaims(data.getUserBribeClaims)
    }
  }, [data]);

  return {
    userBribeClaims,
    isLoadingClaims,

    refetchBribeRewards,
  };
}
