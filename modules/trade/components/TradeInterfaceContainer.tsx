import { useEffect } from 'react';
import { useTrade } from '~/modules/trade/lib/useTrade';
import { AnimatePresence, useAnimation } from 'framer-motion';
import { AnimatedBox } from '~/components/animation/chakra';
import { TradeCard } from '~/modules/trade/components/TradeCard';
import { Box, VStack } from '@chakra-ui/react';

export function TradeInterfaceContainer() {
    const { tradeContext, setPreviewVisible } = useTrade();
    const beetsHeadControls = useAnimation();
    const tradePreviewControls = useAnimation();

    useEffect(() => {
        if (tradeContext.isPreviewVisible) {
            setTimeout(() => {
                beetsHeadControls.start({
                    opacity: 1,
                    scale: 1.75,
                    transition: { type: 'spring', stiffness: 250, damping: 15 },
                });
            }, 250);
            setTimeout(() => {
                beetsHeadControls.start({
                    opacity: 0,
                    scale: 0,
                });
            }, 500);
            setTimeout(() => {
                tradePreviewControls.start({
                    opacity: 1,
                    scale: 1,
                });
            }, 700);
        }
    }, [tradeContext.isPreviewVisible]);

    return (
        <Box display="flex" justifyContent={{ md: 'center', xl: 'initial' }}>
            <Box w={{ base: 'full', md: '600px', xl: 'full' }} position="relative">
                <AnimatePresence>
                    <AnimatedBox
                        w="full"
                        animate={{ scale: 1, transition: { type: 'spring', stiffness: 250, damping: 15 } }}
                        transformOrigin="center"
                        initial={{
                            position: 'relative',
                            scale: 0.8,
                        }}
                        exit={{
                            opacity: 0,
                            scale: 0.7,
                            position: 'absolute',
                            top: 0,
                            width: 'fit-content',
                            transition: { type: 'spring', stiffness: 250, damping: 15 },
                        }}
                    >
                        <TradeCard />
                    </AnimatedBox>
                </AnimatePresence>
            </Box>
        </Box>
    );
}
