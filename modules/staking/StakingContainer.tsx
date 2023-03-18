import { GridItem, SimpleGrid, Text } from '@chakra-ui/react';
import { StakingCard } from './StakingCard';
import { useRewardPools } from './lib/useRewardPoolStaking';
import { useEffect } from 'react';
import { Loading } from '~/components/loading/Loading';

export function StakingContainer() {
  const { stakingPools, loadingPools } = useRewardPools();

  useEffect(() => {
    if (!loadingPools) {
      // console.log(stakingPools);
    }
  }, [loadingPools]);

  return (
    <>
      <Text color="white" fontWeight="bold" mt="-8" mb="4">
        Stake VRTK to earn rewards
      </Text>

      {loadingPools ? (
        <Loading loading={loadingPools} />
      ) : (
        <SimpleGrid
          columns={{ sm: 1, md: 2, xl: 3 }}
          paddingX={{ base: '0', md: '8' }}
          paddingY={4}
          spacing={35}
        >
          {stakingPools.length &&
            stakingPools.map((p) => {
              return (
                <GridItem
                  key={p?.poolId}
                  className="blk"
                  boxShadow="0 0 10px #5BC0F8, 0 0 20px #4A4AF6"
                  borderRadius="18px"
                  maxW="550px"
                  color="white"
                  mb="auto"
                >
                  <StakingCard pool={p} />
                </GridItem>
              );
            })}
        </SimpleGrid>
      )}
    </>
  );
}
