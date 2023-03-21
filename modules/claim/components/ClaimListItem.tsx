import { Box, Grid, GridItem, Text } from '@chakra-ui/react';
import { TokenAvatarSetInList } from '~/components/token/TokenAvatarSetInList';
import { memo } from 'react';
import { MobileLabelLeft, StatGridItemRight, MobileLabelRight } from './ClaimTableUtils';
import { GqlBaseTokenReward } from '~/apollo/generated/graphql-codegen-generated';
import { tokenFormatAmount } from '~/lib/services/token/token-util';
import { numberFormatUSDValue } from '~/lib/util/number-formats';

const MemoizedTokenAvatarSetInList = memo(TokenAvatarSetInList);

type Props = {
  reward: GqlBaseTokenReward;
};

export function ClaimListItem({ reward }: Props) {
  return (
    <Box
      borderTopColor="#4A4AF6"
      boxShadow={{ base: '0 0 5px #5BC0F8, 0 0 10px #4A4AF6', lg: 'none' }}
      borderTopWidth="1px"
      mt={{ base: '6', lg: '0' }}
      mb={{ base: '4', lg: '0' }}
      paddingY={{ base: '4', lg: '0' }}
      paddingX={{ base: '2', lg: '0' }}
      borderRadius={{ base: '16px', lg: '0' }}
    >
      <Grid
        pl="4"
        pr="4"
        py="2"
        templateColumns={{
          base: 'repeat(1fr 1fr)',
          lg: '1fr 3fr 1fr 1fr 1fr',
        }}
        gap="0"
        alignItems="center"
        templateAreas={{
          base: `
          "name name"
          "icons icons"
          "shares value"
          "claim claim" `,
          lg: `"icons name shares value claim"`,
        }}
      >
        <GridItem area="icons" mb={{ base: '6', lg: '0' }}>
          <Box display="flex" justifyContent={{ base: 'center', lg: 'flex-start' }}>
            <MemoizedTokenAvatarSetInList imageSize={32} width={98} tokens={reward.tokenList} />
          </Box>
        </GridItem>
        <GridItem
          area="name"
          textAlign={{ base: 'center', lg: 'left' }}
          mb={{ base: '1', lg: '0' }}
        >
          <Text color="white" fontSize={{ base: 'xl', lg: 'md' }}>
            {reward.pool.name}
          </Text>
        </GridItem>
        <GridItem area="shares" textAlign="left">
          <MobileLabelLeft text="My balance" />
          <Text
            fontSize={{ base: '1rem', lg: 'md' }}
            fontWeight={{ base: 'bold', lg: 'normal' }}
            textAlign="left"
          >
            {tokenFormatAmount(reward.amount)}
          </Text>
        </GridItem>

        <StatGridItemRight area="value">
          <MobileLabelRight text="Value" />
          <Text fontSize={{ base: '1rem', lg: 'md' }} fontWeight={{ base: 'bold', lg: 'normal' }}>
            {numberFormatUSDValue(reward.valueUSD)}
          </Text>
        </StatGridItemRight>
      </Grid>
    </Box>
  );
}
