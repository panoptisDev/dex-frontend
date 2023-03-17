import { Flex, SimpleGrid, Text, Box, HStack } from '@chakra-ui/react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';
import { numberFormatUSDValue } from '~/lib/util/number-formats';

export function StakingAccordion(props: { pool: any }) {
  const pool = props.pool;

  return (
    <Accordion allowToggle padding={4}>
      <AccordionItem>
        <AccordionButton _expanded={{}}>
          <Box flex="1" textAlign="center">
            Details
          </Box>
          <AccordionIcon />
        </AccordionButton>

        <AccordionPanel>
          <Flex justifyContent="space-between">
            <Text textAlign="left" fontWeight="bold">
              Total Staked
            </Text>

            <Flex direction="column">
              <Text textAlign="right" fontWeight="bold">
                {pool.amountStaked}
              </Text>
              <Text textAlign="right" fontSize="0.8rem">
                {numberFormatUSDValue(pool.amountStakedValue)}
              </Text>
            </Flex>
          </Flex>

          <Flex justifyContent="space-between" mt={2}>
            <Text textAlign="left" fontWeight="bold">
              Your total share
            </Text>

            <Text textAlign="right" fontWeight="bold">
              {pool.userInfo.percentageOwned}%
            </Text>
          </Flex>

          <Flex justifyContent="space-between" mt={2}>
            <Text textAlign="left" fontWeight="bold">
              Ends in
            </Text>

            <Text textAlign="right" fontWeight="bold">
              {pool.daysRemaining} days
            </Text>
          </Flex>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}
