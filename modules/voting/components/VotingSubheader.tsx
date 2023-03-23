import { Box, Flex, Grid, GridItem, VStack, Text } from '@chakra-ui/react';
import { useVotingGauges } from '../lib/useVotingGauges';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckToSlot } from '@fortawesome/free-solid-svg-icons';
import { faCoins } from '@fortawesome/free-solid-svg-icons';
import { faBusinessTime } from '@fortawesome/free-solid-svg-icons';
import { faPercent } from '@fortawesome/free-solid-svg-icons';
import { AddBribeButton } from '../bribes/AddBribeButton';
import { numberFormatUSDValue } from '~/lib/util/number-formats';
import { bnum, scale } from '~/lib/util/big-number.utils';
import { fNum2 } from '~/lib/util/useNumber';
import { useUserVeData } from '../lib/useUserVeData';

type Props = {
  unallocatedVotesFormatted: string;
};

export function VotingSubheader(props: Props) {
  const { votingGauges, votingPeriodEnd } = useVotingGauges();
  let totalBribes = 0;
  votingGauges?.forEach((gauge) => (gauge.currentEpochBribes?.forEach((bribe: any) => (totalBribes += bribe?.valueUSD || 0))));

  // Making assumption that total ve- liquidity is about 90% of total liquidity of VRTK-BNB pool.
  const guessedTotalVeLiquidity = bnum(
    useUserVeData().lockablePool?.dynamicData.totalLiquidity || 0,
  ).times(0.9);
  const totalVe = bnum(useUserVeData().currentVeBalance || 1)
    .times(100)
    .div(useUserVeData().percentOwned || 100);
  const totalVeLiquidity = totalVe.times(
    bnum(useUserVeData().lockablePool?.dynamicData.totalLiquidity || 1).div(
      bnum(useUserVeData().lockablePool?.dynamicData.totalShares || 1),
    ),
  );

  let gaugeCounter = 0;
  let totalBribeAPR = bnum(0);
  votingGauges?.forEach((gauge) => {
    if (gauge.currentEpochBribes.length) {
      gaugeCounter++;
      let bribes = 0;
      gauge.currentEpochBribes?.forEach((bribe: any) => (bribes += bribe?.valueUSD || 0))
      let votedValue = (!totalVe.isNaN() ? totalVeLiquidity : guessedTotalVeLiquidity)
        .times(scale(bnum(gauge.votesNextPeriod), -18)).times(100).div(35);
      totalBribeAPR = totalBribeAPR.plus(bnum(bribes * 52).div(votedValue))
    }
  });
  const averageBribeAPR = totalBribeAPR.div(gaugeCounter);

  return (
    <Grid
      mt={16}
      justifyContent="center"
      paddingY="2"
      templateColumns={{
        base: 'repeat(1fr 1fr)',
        lg: '1fr 1fr',
      }}
      alignItems="center"
      gap={{ base: '10', lg: '20' }}
    >
      <GridItem
        marginRight={{ base: '4', lg: '10' }}
        marginLeft={{ base: '8', lg: '20' }}
        paddingY="0"
      >
        <Text variant="topLine">Pools eligible for VRTK emissions</Text>
        <Text variant="topline" fontSize="1.2rem" letterSpacing="-0.01rem">
          Liquidity incentives are directed by the community of veVRTK holders. If you hold veVRTK,
          vote below on any pools across BNB Chain. Your vote will persist until you change it and
          editing a pool can only be done once in 10 days.
        </Text>

        <AddBribeButton />
      </GridItem>

      <GridItem marginRight={{ base: '0', lg: '0' }}>
        <Flex gap="4">
          <VStack spacing={4} w="full" alignItems={{ base: 'center', lg: 'stretch' }}>
            <Box
              className="verteklightpurplebox"
              h="full"
              w={{ base: '100%', lg: 'full' }}
              p="12px"
              borderRadius={{ base: '20px', lg: '12px' }}
              alignItems="center"
              justifyContent="center"
              mx={{ base: 'auto', lg: 0 }}
            >
              <Box display="flex" flexDirection="row" alignItems="center" marginTop="2%">
                <FontAwesomeIcon icon={faCoins} />
                <Text fontWeight="bold" fontSize="1.0rem" ml="0.5rem">
                  Total bribes this epoch
                </Text>
              </Box>
              <Text fontWeight="normal" fontSize="0.9rem" marginTop="2%">
                {numberFormatUSDValue(totalBribes || 0)}
              </Text>
            </Box>
            <Box
              className="verteklightpurplebox"
              h="full"
              w={{ base: '100%', lg: 'full' }}
              p="12px"
              borderRadius={{ base: '20px', lg: '12px' }}
              alignItems="center"
              justifyContent="center"
              mx={{ base: 'auto', lg: 0 }}
            >
              <Box display="flex" flexDirection="row" alignItems="center" marginTop="2%">
                <FontAwesomeIcon icon={faPercent} />
                <Text fontWeight="bold" fontSize="1.0rem" ml="0.5rem">
                  Average bribe APR
                </Text>
              </Box>
              <Text fontWeight="normal" fontSize="0.9rem" marginTop="2%">
                {fNum2(averageBribeAPR.toString(), {
                  style: 'percent', maximumFractionDigits: 0, fixedFormat: true
                })}
              </Text>
            </Box>
          </VStack>
          <VStack spacing={4} w="full" alignItems={{ base: 'center', lg: 'stretch' }}>
            <Box
              className="verteklightpurplebox"
              h="full"
              w={{ base: '100%', lg: 'full' }}
              p="12px"
              borderRadius={{ base: '20px', lg: '12px' }}
              alignItems="center"
              justifyContent="center"
              mx={{ base: 'auto', lg: 0 }}
            >
              <Box display="flex" flexDirection="row" alignItems="center" marginTop="2%">
                <FontAwesomeIcon icon={faCheckToSlot} />
                <Text fontWeight="bold" fontSize="1.0rem" ml="0.5rem">
                  My unallocated votes
                </Text>
              </Box>
              <Text fontWeight="normal" fontSize="0.9rem" marginTop="2%">
                {props.unallocatedVotesFormatted}
              </Text>
            </Box>
            <Box
              className="verteklightpurplebox"
              h="full"
              w={{ base: '100%', lg: 'full' }}
              p="12px"
              borderRadius={{ base: '20px', lg: '12px' }}
              alignItems="center"
              justifyContent="center"
              mx={{ base: 'auto', lg: 0 }}
            >
              <Box display="flex" flexDirection="row" alignItems="center" marginTop="2%">
                <FontAwesomeIcon icon={faBusinessTime} />
                <Text fontWeight="bold" fontSize="1.0rem" ml="0.5rem">
                  Voting period ends
                </Text>
              </Box>
              <Text fontWeight="normal" fontSize="0.9rem" marginTop="2%">
                {votingPeriodEnd?.length && (
                  <Text>
                    {votingPeriodEnd[0]}d : {votingPeriodEnd[1]}h : {votingPeriodEnd[2]}m :{' '}
                    {votingPeriodEnd[3]}s
                  </Text>
                )}
              </Text>
            </Box>
          </VStack>
        </Flex>
      </GridItem>
    </Grid>
  );
}
