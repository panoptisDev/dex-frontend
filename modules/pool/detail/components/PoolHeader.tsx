import {
  Box,
  Button,
  Flex,
  HStack,
  Popover,
  PopoverContent,
  PopoverTrigger as OrigPopoverTrigger,
  Spacer,
  Text,
  VStack,
  Wrap,
  WrapItem,
  useDisclosure,
} from '@chakra-ui/react';
import numeral from 'numeral';
import { PoolTokenPill } from '~/components/token/PoolTokenPill';
import PoolOwnerImage from '~/assets/images/pool-owner.png';
import Image from 'next/image';
import { HelpCircle } from 'react-feather';
import { useNetworkConfig } from '~/lib/global/useNetworkConfig';
import { AddressZero } from '@ethersproject/constants';
import { usePool } from '~/modules/pool/lib/usePool';
import { PoolAboutThisProjectModal } from './PoolAboutThisProjectModal';

function PoolHeader() {
  const networkConfig = useNetworkConfig();
  const { pool } = usePool();

  // temp fix: https://github.com/chakra-ui/chakra-ui/issues/5896#issuecomment-1104085557
  const PopoverTrigger: React.FC<{ children: React.ReactNode }> = OrigPopoverTrigger;

  const hasBeetsOwner = pool.owner === networkConfig.beetsPoolOwnerAddress;
  const hasZeroOwner = pool.owner === AddressZero;
  const swapFeeType = hasZeroOwner ? 'Fixed' : 'Dynamic';
  const tooltipText1 = `Liquidity providers earn ${swapFeeType.toLowerCase()} swap fees on every trade utilizing the liquidity in this pool.`;
  const tooltipText2 = `Dynamic swap fees are controlled by the ${
    hasBeetsOwner ? 'Vertek Liquidity Committee Multisig' : 'pool owner'
  }.`;

  const { isOpen, onOpen, onClose } = useDisclosure();
  const poolDescriptions = [
    { id: '0xdd64e2ec144571b4320f7bfb14a56b2b2cbf37ad000200000000000000000000', description: () => {
      return <Box>
        <Text>The Next Evolution of DEXs on BNB Chain</Text>
      </Box>
    } },
    { id: '0x64bf08fac067b25c77967affafce73760d8d0bdf000200000000000000000011', description: () => {
      return <Box>
        <Text>$UP is a perpetually appreciating 100% backed by BUSD asset that makes up the backbone of the UP Finance ecosystem.</Text>
        <Text>The value of UP will never decrease and will always be redeemable for the price on the contract. In fact any contract mint and redeem only further increase the price due to the contract design mechanics. Imagine having a token as a DeFi currency to transact in, backed by one of the best stable coins within DeFi, worth more tomorrow than today and can never crash in price.</Text>
        <Text>Join in on the $UP movement and take part in the new model primed to replace holding static stable coins. There is only one way to go and that is Always and Only $UP.</Text>
      </Box>
    } },
  ];
  return (
    <VStack width="full" alignItems="flex-start" mb="12">
      <Text textStyle="h3" as="h3" fontWeight="bold" mr="0" display={{ base: 'block', lg: 'none' }}>
        {pool.name}
      </Text>
      <Wrap>
        <WrapItem display={{ base: 'none', lg: 'flex' }}>
          <Text textStyle="h3" as="h3" fontWeight="bold" mr="4">
            {pool.name}
          </Text>
        </WrapItem>
        {pool.tokens.map((token, index) => (
          <WrapItem key={index} >
            <PoolTokenPill token={token} />
          </WrapItem>
        ))}
      </Wrap>
      <Flex minWidth="100%" align="center">
        <Popover trigger="hover" placement="auto">
          <PopoverTrigger>
            <HStack
              paddingX="4"
              paddingY="1"
              spacing="4"
              fontSize="md"
              rounded="full"
              color="beets.base.50"
              justifyContent="center"
              fontWeight="semibold"
            >
              {!hasZeroOwner && (
                <Flex alignItems="center">
                  {hasBeetsOwner ? (
                    <Image src={PoolOwnerImage} width="24" height="24" alt="Pool Owner Image" />
                  ) : (
                    <HelpCircle size="24" />
                  )}
                </Flex>
              )}
              <HStack spacing="1">
                <Text>{numeral(pool.dynamicData.swapFee).format('0.0[00]%')}</Text>
                <Text>{swapFeeType} Fee</Text>
              </HStack>
            </HStack>
          </PopoverTrigger>
          <PopoverContent w="250px" borderRadius="12px" padding="1" bgColor="black" >
            <Box className="verteklightpurplebox" padding="4" borderRadius="12px"
                fontSize="md" >
              {tooltipText1} {!hasZeroOwner && tooltipText2}
            </Box>
          </PopoverContent>
        </Popover>
        <Spacer />
        <Box>
          {poolDescriptions.find(e => e.id == pool.id) && <Button variant="primary" onClick={() => { onOpen(); }}>
            About this project
          </Button>}
          <PoolAboutThisProjectModal isOpen={isOpen} onClose={onClose} pool={pool} description={poolDescriptions.find(e => e.id == pool.id)?.description} />
        </Box>
      </Flex>
    </VStack>
  );
}

export default PoolHeader;
