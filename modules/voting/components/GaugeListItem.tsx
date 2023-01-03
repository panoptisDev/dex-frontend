import { GqlPoolMinimalFragment } from '~/apollo/generated/graphql-codegen-generated';
import { Box, Grid, GridItem, GridItemProps, Text } from '@chakra-ui/react';
import { NextLink } from '~/components/link/NextLink';
import { Button } from '@chakra-ui/react';
import numeral from 'numeral';
import AprTooltip from '~/components/apr-tooltip/AprTooltip';
import { BoxProps } from '@chakra-ui/layout';
import { AmountHumanReadable } from '~/lib/services/token/token-types';
import { numberFormatUSDValue } from '~/lib/util/number-formats';
import { TokenAvatarSetInList, TokenAvatarSetInListTokenData } from '~/components/token/TokenAvatarSetInList';
import { memo } from 'react';
import { UserTokenBalancesProvider } from '~/lib/user/useUserTokenBalances';
import { PoolListProvider } from '~/modules/pools/usePoolList';
import { GaugeVoteModal } from './GaugeVoteModal';
import { useState } from 'react';
const MemoizedTokenAvatarSetInList = memo(TokenAvatarSetInList);

export function GaugeListItem(){
    const [isOpen, setIsOpen] = useState(false);
    const onClose = () => setIsOpen(false);
    const onOpen = () => setIsOpen(true);
    return (

<PoolListProvider>
<UserTokenBalancesProvider>
<Grid
    bg="vertek.slatepurple.900"
    borderBottomColor="vertek.slatepurple.600"
    borderBottomWidth="1px"
    paddingY="1.5rem"
    paddingX="1rem"
    borderRadius={{ base:"12px", lg:"none"}}
    templateColumns={{ base: 'repeat(1fr 1fr)', lg: '150px 1fr 200px 200px 200px' }}
    gap="2"
    mb={{ base:'4', lg:'none'}}
    templateAreas={{ 
    base: `
        "icons pills"
        "nextvote myvote"
        "votebutton votebutton" `,
    lg: `
        "icons pills nextvote myvote votebutton" ` }}
    >
        <GridItem  
        area="icons"
        display="flex"
        alignItems="center" 
        justifyContent="left" 
        textAlign="left">
            Icon Set 
        </GridItem>

        <GridItem  
        area="pills"
        display="flex" 
        alignItems="center" 
        justifyContent={{base:'flex-end', lg:'flex-start'}} >
            Token Pills 
        </GridItem>

        <GridItem  
        area="nextvote"
        display="flex" 
        alignItems={{ base: 'left', lg:'center' }}
        justifyContent={{ base: 'left', lg:'center' }} 
        >
            0% 
        </GridItem>

        <GridItem  
        area="myvote"
        display="flex" 
        alignItems="center"
        justifyContent={{base:'flex-end', lg:'flex-start'}}
        >
            69%
        </GridItem>
        
        <GridItem  
        area="votebutton"
        display="flex" 
        alignItems="center" 
        justifyContent="center" 
        textAlign="center">
                <GaugeVoteModal isOpen={isOpen} onClose={onClose} />
        </GridItem>
        
    </Grid>
</UserTokenBalancesProvider>
</PoolListProvider>
);
    }
