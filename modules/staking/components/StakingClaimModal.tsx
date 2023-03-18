import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalHeader,
  ModalBody,
  Text,
  Flex,
} from '@chakra-ui/react';
import { RewardPool } from '~/apollo/generated/graphql-codegen-generated';
import { BeetsTransactionStepsSubmit } from '~/components/button/BeetsTransactionStepsSubmit';
import { tokenFormatAmount } from '~/lib/services/token/token-util';
import { useUserTokenBalances } from '~/lib/user/useUserTokenBalances';
import { numberFormatUSDValue } from '~/lib/util/number-formats';
import { useRewardPools } from '../lib/useRewardPoolStaking';
import { useClaimStaking } from '../lib/useStakingClaim';

interface Props {
  isOpen: boolean;
  onOpen(): void;
  onClose(): void;
  pool: RewardPool;
}

export function StakingClaimModal({ isOpen, onOpen, onClose, pool }: Props) {
  const { refetchStakingPools } = useRewardPools();
  const { refetch: refetchTokenBalances } = useUserTokenBalances();
  const { claimStakingReward, ...claimQuery } = useClaimStaking();

  const steps = [
    {
      id: 'claim',
      type: 'other' as const,
      buttonText: `Claim ${pool.rewardToken.symbol}`,
      tooltipText: `Claim ${pool.rewardToken.symbol}`,
    },
  ];

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => {
        claimQuery.reset();
        onClose();
      }}
      size="xl"
    >
      <ModalOverlay />
      <ModalContent backgroundColor="black">
        <ModalCloseButton />
        <ModalHeader className="bg">
          <Text color="gray.200" fontSize="md">
            Claim {pool.rewardToken.symbol}
          </Text>
        </ModalHeader>
        <ModalBody className="bg" pt="4" pb="6">
          <Flex
            justifyContent="space-between"
            border="1px solid lightgray"
            borderRadius="16px"
            p={5}
            mb={5}
          >
            <Text fontSize="md">Claiming</Text>
            <Flex direction="column">
              <Text fontSize="md">
                {tokenFormatAmount(pool.userInfo?.pendingRewards || '0')} {pool.rewardToken.symbol}
              </Text>
              <Text fontSize="0.7rem" textAlign="right">
                {numberFormatUSDValue(pool.userInfo?.pendingRewardValue || '0')}
              </Text>
            </Flex>
          </Flex>
          <BeetsTransactionStepsSubmit
            isLoading={steps === null}
            loadingButtonText="Awaiting confirmation..."
            completeButtonText="Claim complete"
            onCompleteButtonClick={() => {
              onClose();
            }}
            onSubmit={(id) => {
              claimStakingReward(pool.poolId, pool.rewardToken.symbol);
            }}
            onConfirmed={async (id) => {
              refetchStakingPools();
              refetchTokenBalances();
            }}
            steps={steps || []}
            queries={[{ ...claimQuery, id: 'claim' }]}
            isDisabled={false}
          />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
