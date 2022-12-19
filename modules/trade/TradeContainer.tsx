import { Box, Grid, GridItem, Text } from '@chakra-ui/react';
import { TradeInterfaceContainer } from '~/modules/trade/components/TradeInterfaceContainer';
import { TradePageHeader } from '~/modules/trade/components/TradePageHeader';
import { TradeChart } from '~/modules/trade/components/TradeChart';
import { useGetTokens } from '~/lib/global/useToken';
import { useTradeData } from '~/modules/trade/lib/useTradeData';
import { useTrade } from '~/modules/trade/lib/useTrade';
import { BatchSwapSorRoute } from '~/components/batch-swap/BatchSwapSorRoute';
import { BatchSwapList } from '~/components/batch-swap/BatchSwapList';
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';

export function TradeContainer() {
  const { priceFor } = useGetTokens();
  const { tokenInData, tokenOutData, tokenInDynamicData, tokenOutDynamicData, tokenOut, tokenIn } =
    useTradeData();
  const { swapInfo, loadingSwaps, isNativeAssetUnwrap, isNativeAssetWrap } = useTrade();
  const showRouting =
    !isNativeAssetUnwrap && !isNativeAssetWrap && swapInfo && swapInfo.swaps.length > 0;
  const hasNoRoute = !loadingSwaps && (!swapInfo || swapInfo.swaps.length === 0);

  return (
    <Box  >
      <Grid
        templateAreas={{
          base: `"swap"
                       "chart-route"`,
          xl: `"swap chart-route"`,
        }}
        templateColumns={{ base: '1fr', xl: '412px 1fr' }}
        gap="10"
        pb="20"
        //pt="8"
      >
        <GridItem area="swap">
          <TradeInterfaceContainer />
        </GridItem>

        {/* start of the chart and routing info  */}
        <GridItem area="chart-route"  paddingX="2" >
            <Box bgColor="vertek.slate.900" padding="4" borderRadius="12" >
                <TradePageHeader />

                <Box mt="4" padding="2" bgColor="vertek.slatepurple.900" borderRadius="12">
                  <TradeChart />
                </Box>
            </Box>

            
            <Box display={{ base: 'none', md: 'block' }} 
            bgColor="vertek.slate.900" padding="4" 
            borderRadius="12"
            mt="2"
            >
            
            {/*
                    // @ts-ignore */}
            <AnimateSharedLayout>
              <AnimatePresence>
                {showRouting && (
                  <Box>
                  <motion.div layout initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <Text fontSize="xl" fontWeight="bold" lineHeight="1.2rem" mt="8">
                      Smart order routing
                    </Text>
                    <Text mb="4" color="white">
                      The SOR searches all Vertek pools to ensure you receive the best
                      available price.
                    </Text>
                  </motion.div>
                  </Box>
                )}
              </AnimatePresence>
              {showRouting && <BatchSwapSorRoute swapInfo={swapInfo} />}

              <motion.div layout>
                <Text fontSize="xl" fontWeight="bold" lineHeight="1.2rem" mt="8">
                  Latest swaps
                </Text>
                <Text mb="4" color="white">
                  The latest swaps for your selected token pair.
                </Text>
              </motion.div>
              {tokenIn && tokenOut && (
                <BatchSwapList tokenIn={tokenIn.address} tokenOut={tokenOut.address} />
              )}
            </AnimateSharedLayout>
          </Box>

          {/*<Flex mt="12" mb="8">
                        {tokenIn ? (
                            <TradeTokenDataCard
                                token={tokenIn}
                                price={priceFor(tokenIn.address)}
                                data={tokenInData}
                                dynamicData={tokenInDynamicData}
                                flex={1}
                                mr="4"
                            />
                        ) : null}
                        {tokenOut ? (
                            <TradeTokenDataCard
                                token={tokenOut}
                                price={priceFor(tokenOut.address)}
                                data={tokenOutData}
                                dynamicData={tokenOutDynamicData}
                                flex={1}
                            />
                        ) : null}
                    </Flex>
                    <Box height="2xs" />*/}
        </GridItem>
      </Grid>
    </Box>
  );
}
