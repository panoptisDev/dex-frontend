import { Box } from '@chakra-ui/react';
import { GqlUserGaugeRewardInfo } from '~/apollo/generated/graphql-codegen-generated';
import { GaugeRewardsTable } from './GaugeRewardsTable';

type Props = {
  userGaugeRewards: GqlUserGaugeRewardInfo[];
};

export function GaugeRewardsContainer({ userGaugeRewards }: Props) {
  return (
    <>
      {userGaugeRewards.map((reward) => {
        return (
          <Box mb={10} key={reward.pool.address}>
            <GaugeRewardsTable userGaugeReward={reward} />
          </Box>
        );
      })}
    </>
  );
}
