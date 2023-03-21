import { Button, Flex, Grid, GridItem, Text } from '@chakra-ui/react';
import BigNumber from 'bignumber.js';
import { TokenAvatarSetInList } from '~/components/token/TokenAvatarSetInList';
import { VotingGaugeWithVotes } from '~/lib/services/staking/types';
import { bnum, scale } from '~/lib/util/big-number.utils';
import { fNum2 } from '~/lib/util/useNumber';

import { memo } from 'react';
import { GaugeRewardsInfo } from './GaugeRewardsInfo';
import { formatVotesAsPercent } from '../lib/utils';
import { useUserVeData } from '../lib/useUserVeData';
import { VotingStatsPopover } from './VotingStatsPopover';

const MemoizedTokenAvatarSetInList = memo(TokenAvatarSetInList);

type Props = {
  onVoteClick: (gauge: VotingGaugeWithVotes) => void;
  gauge: VotingGaugeWithVotes;
};

export function GaugeListItem(props: Props) {
  const normalizedVotes = scale(new BigNumber(props.gauge.userVotes), -4);
  const userVotes = fNum2(normalizedVotes.toString(), {
    style: 'percent',
    maximumFractionDigits: 2,
  });

  // Making assumption that total ve- liquidity is about 90% of total liquidity of VRTK-BNB pool.
  const guessedTotalVeLiquidity = bnum(useUserVeData().lockablePool?.dynamicData.totalLiquidity || 0).times(0.9);
  const totalVe = bnum(useUserVeData().currentVeBalance || 1).times(100).div(useUserVeData().percentOwned || 100)
  const totalVeLiquidity = totalVe.times(bnum(useUserVeData().lockablePool?.dynamicData.totalLiquidity || 1).div(bnum(useUserVeData().lockablePool?.dynamicData.totalShares || 1)))
  let bribeValue = 0;
  props.gauge.currentEpochBribes?.forEach((b) => (bribeValue += b?.valueUSD || 0));
  const gaugeVotes = scale(bnum(props.gauge.votesNextPeriod), -18);
  const votedValue = (!totalVe.isNaN() ? totalVeLiquidity : guessedTotalVeLiquidity).times(gaugeVotes).times(100).div(35);
  const bribeAPR = fNum2(bnum(bribeValue * 52).div(votedValue).toString(), {
    style: 'percent',
    // maximumFractionDigits: 2,
  });

  // function redirectToPool(gauge: VotingGaugeWithVotes) {
  //   window.location.href = poolURLFor(gauge.pool.id, gauge.network, gauge.pool.poolType);
  // }

  return (
    <Grid
      className="moistmobilecard"
      boxShadow={{ lg: 'none' }}
      borderRadius={{ base: '12px', lg: '' }}
      templateColumns={{
        base: 'repeat(1fr 1fr)',
        lg: '150px 1fr 150px 200px 200px 200px 200px',
      }}
      gap={{ base: '4', lg: '0' }}
      mb={{ base: '4', lg: '0' }}
      templateAreas={{
        base: `
        "name name"
        "icons icons"
        "bribeapr bribeapr"
        "nextvote myvote"
        "bribes bribes"
        "votebutton votebutton" `,
        lg: `"icons name bribeapr nextvote myvote bribes votebutton"`,
      }}
    >
      <GridItem
        area="icons"
        display="flex"
        alignItems="center"
        justifyContent={{ base: 'center', lg: 'flex-start' }}
      >
        <MemoizedTokenAvatarSetInList imageSize={28} width={92} tokens={props.gauge.pool.tokens} />
      </GridItem>

      <GridItem
        area="name"
        display="flex"
        alignItems="center"
        fontWeight={{ base: 'bold', lg: 'normal' }}
        justifyContent={{ base: 'center', lg: 'flex-start' }}
        fontSize="1.2rem"
      >
        {props.gauge.pool.name}
      </GridItem>

      <GridItem
        area="bribeapr"
        display={{ base: 'block', lg: 'flex' }}
        alignItems="center"
        justifyContent={{ base: 'center', lg: 'center' }}
        textAlign={{ base: 'center', lg: 'right' }}
      >
        <MobileLabel text="Bribe APR" />
        {bribeValue > 0 ? bribeAPR : ''}
      </GridItem>

      <GridItem
        area="nextvote"
        display={{ base: 'block', lg: 'flex' }}
        alignItems="center"
        justifyContent={{ base: 'center', lg: 'center' }}
        textAlign={{ base: 'left', lg: 'right' }}
        ml={{ base: '8', lg: '0' }}
      >
        <MobileLabel text="Next Period Votes" />
        <Flex justifyContent="space-between" width="35%">
          <Text>{formatVotesAsPercent(props.gauge.votesNextPeriod)}</Text>

          <VotingStatsPopover gauge={props.gauge} />
        </Flex>
      </GridItem>

      <GridItem
        area="myvote"
        display={{ base: 'block', lg: 'flex' }}
        alignItems="center"
        justifyContent={{ base: 'center', lg: 'center' }}
        textAlign={{ base: 'right', lg: 'right' }}
        mr={{ base: '8', lg: '2' }}
      >
        <MobileLabel text="My Votes" />
        {userVotes}
      </GridItem>

      <GridItem
        area="bribes"
        display={{ base: 'block', lg: 'flex' }}
        alignItems="center"
        justifyContent={{ base: 'center', lg: 'center' }}
        // textAlign="center"
      >
        <GaugeRewardsInfo gauge={props.gauge} />
      </GridItem>

      <GridItem
        area="votebutton"
        display="flex"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
      >
        <Button
          variant="stayblack"
          width={{ base: '90%', lg: '130px' }}
          onClick={() => props.onVoteClick(props.gauge)}
        >
          Vote
        </Button>
      </GridItem>
    </Grid>
  );
}

function MobileLabel({ text }: { text: string }) {
  return (
    <Text fontSize="sm" color="gray.200" display={{ base: 'block', lg: 'none' }}>
      {text}
    </Text>
  );
}
