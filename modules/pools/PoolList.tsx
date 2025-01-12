import { Alert, AlertIcon, Box } from '@chakra-ui/react';
import { usePoolList } from './usePoolList';
import { PoolListItem } from '~/modules/pools/components/PoolListItem';
import { PoolListTableHeader } from '~/modules/pools/components/PoolListTableHeader';
import { PoolListTop } from '~/modules/pools/components/PoolListTop';
import { useUserData } from '~/lib/user/useUserData';
import { useEffect } from 'react';
import { orderBy } from 'lodash';
import { PoolListMobileHeader } from '~/modules/pools/components/PoolListMobileHeader';
import { useGetTokens } from '~/lib/global/useToken';
import { networkConfig } from '~/lib/config/network-config';
import { PaginatedTable } from '~/components/table/PaginatedTable';
import { GqlPoolMinimalFragment } from '~/apollo/generated/graphql-codegen-generated';
import { NetworkStatus } from '@apollo/client';

function PoolList() {
  const { getToken } = useGetTokens();

  const {
    pools,
    refetch,
    loading,
    networkStatus,
    state,
    count,
    setPageSize,
    setPoolIds,
    showMyInvestments,
  } = usePoolList();

  const { userPoolIds, usdBalanceForPool, hasBptInWalletForPool } = useUserData();
  const userPoolIdsStr = userPoolIds.join();

  console.log(userPoolIds);

  useEffect(() => {
    if (showMyInvestments) {
      setPoolIds(userPoolIds).catch();
    }
  }, [userPoolIdsStr, showMyInvestments]);

  const pinnedPoolId = networkConfig.balancer.votingEscrow.lockablePoolId;
  const pinnedPool = pools.find((pool) => pool.id === pinnedPoolId);
  const restOfThePools = pools.filter((pool) => pool.id !== pinnedPoolId);

  let poolsToRender = showMyInvestments
    ? orderBy(pools, (pool) => usdBalanceForPool(pool.id), 'desc')
    : [pinnedPool, ...restOfThePools];
  let poolCount = count || 0;

  const hasUnstakedBpt =
    showMyInvestments &&
    pools.filter((pool) => pool.dynamicData.apr.hasRewardApr && hasBptInWalletForPool(pool.id))
      .length > 0;

  poolsToRender = poolsToRender.filter((p) => p !== undefined);
  poolCount = poolsToRender.length;
  // console.log(poolsToRender);

  return (
    <>
      <Box>
        <PoolListMobileHeader />
        <PoolListTop />
        {hasUnstakedBpt && (
          <Alert
            borderRadius="12px"
            bg="vertek.slatepurple.900"
            status="warning"
            color="vertek.neonpurple.500"
            mt="4"
          >
            <AlertIcon color="vertek.neonpurple.500" />
            You have unstaked VPT in your wallet. Incentivized pools offer additional rewards that
            will accumulate over time when your VPT are staked.
          </Alert>
        )}
        <PaginatedTable
          items={poolsToRender}
          currentPage={state.skip / state.first + 1}
          pageSize={state.first}
          count={poolCount}
          onPageChange={(page) => {
            refetch({ ...state, skip: state.first * (page - 1) });
          }}
          loading={loading}
          fetchingMore={networkStatus === NetworkStatus.refetch}
          onPageSizeChange={setPageSize}
          renderTableHeader={() => <PoolListTableHeader />}
          renderTableRow={(item: GqlPoolMinimalFragment, index) => {
            return (
              <PoolListItem
                padding="1"
                key={index}
                pool={item}
                userBalance={`${usdBalanceForPool(item.id)}`}
                showUserBalance={showMyInvestments}
                tokens={item.allTokens
                  .filter((token) => !token.isNested && !token.isPhantomBpt)
                  .map((token) => ({
                    ...token,
                    logoURI: getToken(token.address)?.logoURI || undefined,
                  }))}
                rewardTokens={item.staking?.gauge?.rewards
                  .filter((token) => Number(token.rewardPerSecond) > 0)
                  .map((token) => ({
                    ...token,
                    address: token.tokenAddress,
                    logoURI: getToken(token.tokenAddress)?.logoURI || undefined,
                  }))}
                hasUnstakedBpt={item.dynamicData.apr.hasRewardApr && hasBptInWalletForPool(item.id)}
              />
            );
          }}
        />
        {/* <PoolListFooter /> */}
      </Box>
    </>
  );
}

export default PoolList;
