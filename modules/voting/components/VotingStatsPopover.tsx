import {
  Box,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  Text,
  Icon,
} from '@chakra-ui/react';
import { Info } from 'react-feather';

type Props = {
  votesThisPeriod: string;
  votesNextPeriod: string;
  voteDifference: number;
};

export function VotingStatsPopover({ votesThisPeriod, votesNextPeriod, voteDifference }: Props) {
  return (
    <Popover trigger="hover" placement="top">
      <PopoverTrigger>
        <Box className="cursor-pointer">
          <Icon size={75} as={Info} />
        </Box>
      </PopoverTrigger>
      <PopoverContent
        padding="4"
        borderRadius="16px"
        bgColor="vertek.slatepurple.900"
        boxShadow="0 0 12px #000"
      >
        {/* <PopoverArrow /> */}
        {/* <PopoverCloseButton /> */}
        <PopoverHeader>
          <Text textAlign="center" color="white">
            Voting Breakdown
          </Text>
        </PopoverHeader>
        <PopoverBody textAlign="center">
          <Box>
            <Text display="inline-block" mr={2}>
              This epoch:
            </Text>
            <Text display="inline-block">{votesThisPeriod}</Text>
          </Box>
          <Box>
            <Text display="inline-block" mr={2}>
              Next epoch:
            </Text>
            <Text
              fontWeight={600}
              display="inline-block"
              color={voteDifference > 0 ? 'green' : 'red'}
            >
              {votesNextPeriod}
            </Text>
          </Box>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}
