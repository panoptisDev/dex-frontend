import {
  Flex,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  Box,
  Text,
  Divider,
} from '@chakra-ui/react';
import Image from 'next/image';
import bribes from './moneybag.svg';
import TokenAvatarSet from '~/components/token/TokenAvatarSet';
import { numberFormatUSDValue } from '~/lib/util/number-formats';

type Props = {
  bribeInfo: any;
};

export function GaugeRewardsInfo({ bribeInfo }: Props) {
  const currentEpochBribes = bribeInfo.currentEpochBribes || [];
  const nextEpochBribes = bribeInfo.nextEpochBribes || [];
  const hasBribes = currentEpochBribes.length || nextEpochBribes.length;

  let totalValue = 0;
  currentEpochBribes?.forEach((b) => (totalValue += b?.valueUSD || 0));
  nextEpochBribes?.forEach((b) => (totalValue += b?.valueUSD || 0));

  return (
    <>
      {hasBribes ? (
        <Popover trigger="hover">
          <PopoverTrigger>
            <Flex width="50%" justifyContent="space-between">
              <Flex className="cursor-pointer" justifyContent="center" alignContent="center">
                <Image src={bribes} height={25} width={25} />
              </Flex>

              {numberFormatUSDValue(totalValue)}
            </Flex>
          </PopoverTrigger>

          <PopoverContent
            padding="4"
            borderRadius="16px"
            bgColor="vertek.slatepurple.900"
            boxShadow="0 0 12px #000"
          >
            <PopoverHeader bgColor="vertek.slatepurple.900">
              <Text fontSize="1.3rem"> Bribes</Text>
            </PopoverHeader>
            <Box p="1" paddingY="4" fontSize="md" bgColor="vertek.slatepurple.900">
              <Text mt={2} fontWeight={500} textAlign="center" fontSize="1.1rem">
                Current Epoch Bribes
              </Text>
              {currentEpochBribes.length ? (
                <Flex direction="column">
                  {currentEpochBribes?.map((bribe, i) => {
                    return (
                      <Box key={i}>
                        <Flex alignItems="center" gap={2} p={3}>
                          <TokenAvatarSet
                            width={32}
                            tokenData={[{ address: bribe?.token.address || '' }]}
                          />
                          <Text>{bribe?.token.symbol}</Text>
                          <Text>{numberFormatUSDValue(bribe?.valueUSD || 0)}</Text>
                        </Flex>
                      </Box>
                    );
                  })}
                </Flex>
              ) : (
                <Text p={5} textAlign="center">
                  No current bribes
                </Text>
              )}

              <Divider />
              <Text mt={4} fontWeight={500} textAlign="center" fontSize="1.1rem">
                Next Epoch Bribes
              </Text>
              {nextEpochBribes.length ? (
                <Flex direction="column" mt={4}>
                  <Flex direction="column">
                    {nextEpochBribes?.map((bribe, i) => {
                      return (
                        <Box key={i}>
                          <Flex alignItems="center" gap={2} p={3}>
                            <TokenAvatarSet
                              width={32}
                              tokenData={[{ address: bribe?.token.address || '' }]}
                            />
                            <Text>{bribe?.token.symbol}</Text>
                            <Text>{numberFormatUSDValue(bribe?.valueUSD || 0)}</Text>
                          </Flex>
                        </Box>
                      );
                    })}
                  </Flex>
                </Flex>
              ) : (
                <Text p={5} textAlign="center">
                  No bribes for next epoch
                </Text>
              )}
            </Box>
          </PopoverContent>
        </Popover>
      ) : (
        <></>
      )}
    </>
  );
}
