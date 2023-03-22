import { Box, Flex, Grid, GridItem, VStack, Text } from '@chakra-ui/react';
import { useVotingGauges } from '../lib/useVotingGauges';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckToSlot } from '@fortawesome/free-solid-svg-icons';
import { faCoins } from '@fortawesome/free-solid-svg-icons';
import { faBusinessTime } from '@fortawesome/free-solid-svg-icons';
import { faPercent } from '@fortawesome/free-solid-svg-icons';
import { AddBribeButton } from '../bribes/AddBribeButton';
import { numberFormatUSDValue } from '~/lib/util/number-formats';
import { fNum2 } from '~/lib/util/useNumber';

type Props = {
  unallocatedVotesFormatted: string;
};

export function VotingSubheader(props: Props) {
  const { votingGauges, votingPeriodEnd } = useVotingGauges();
  let totalBribes = 0;
  votingGauges?.forEach((gauge) => (gauge.currentEpochBribes?.forEach((bribe: any) => (totalBribes += bribe?.valueUSD || 0))));
  const averageVotingAPR = (0.35 / (votingGauges?.length || 0));
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
                  Average voting APR
                </Text>
              </Box>
              <Text fontWeight="normal" fontSize="0.9rem" marginTop="2%">
                {fNum2(averageVotingAPR.toString(), {
                  style: 'percent', maximumFractionDigits: 2, fixedFormat: true
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
