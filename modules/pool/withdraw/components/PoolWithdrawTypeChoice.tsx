import {
    Alert,
    AlertIcon,
    Box,
    Button,
    Flex,
    Grid,
    GridItem,
    Heading,
    HStack,
    Skeleton,
    Text,
    useDisclosure,
} from '@chakra-ui/react';
import { BeetsBox } from '~/components/box/BeetsBox';
import { numberFormatUSDValue } from '~/lib/util/number-formats';
import { tokenFormatAmount } from '~/lib/services/token/token-util';
import TokenAvatar from '~/components/token/TokenAvatar';
import { usePool } from '~/modules/pool/lib/usePool';
import { useGetTokens } from '~/lib/global/useToken';
import { usePoolUserDepositBalance } from '~/modules/pool/lib/usePoolUserDepositBalance';
import { usePoolUserBptBalance } from '~/modules/pool/lib/usePoolUserBptBalance';
import { PoolUnstakeModal } from '~/modules/pool/stake/PoolUnstakeModal';
import { CardRow } from '~/components/card/CardRow';
import { useWithdraw } from '~/modules/pool/withdraw/lib/useWithdraw';
import { TokenSelectInline } from '~/components/token-select-inline/TokenSelectInline';
import { useWithdrawState } from '~/modules/pool/withdraw/lib/useWithdrawState';

interface Props {
    onShowProportional(): void;
    onShowSingleAsset(): void;
}

export function PoolWithdrawTypeChoice({ onShowProportional, onShowSingleAsset }: Props) {
    const unstakeDisclosure = useDisclosure();
    const { pool } = usePool();
    const { priceForAmount } = useGetTokens();
    const { userPoolBalanceUSD, data, isLoading } = usePoolUserDepositBalance();
    const { userTotalBptBalance, userWalletBptBalance, userStakedBptBalance, hasBptInWallet, hasBptStaked } =
        usePoolUserBptBalance();
    const valueStaked = (parseFloat(userStakedBptBalance) / parseFloat(userTotalBptBalance)) * userPoolBalanceUSD;
    const valueInWallet = (parseFloat(userWalletBptBalance) / parseFloat(userTotalBptBalance)) * userPoolBalanceUSD;
    const { selectedWithdrawTokenAddresses } = useWithdraw();
    const { selectedOptions, setSelectedOption } = useWithdrawState();

    return (
        <Box>
            <Grid mt="4" mb="6" gap="8" templateColumns={{ base: '1fr', md: '1fr', lg: '1fr 1fr' }}>
                <GridItem>
                    <BeetsBox p="2" mb="6">
                        <Flex mb="4">
                            <Text fontSize="lg" fontWeight="semibold" flex="1">
                                My balance
                            </Text>
                            <Skeleton isLoaded={!isLoading}>
                                <Text fontSize="lg" fontWeight="semibold">
                                    {numberFormatUSDValue(userPoolBalanceUSD)}
                                </Text>
                            </Skeleton>
                        </Flex>
                        {pool.staking ? (
                            <>
                                <CardRow>
                                    <Text flex="1">Wallet balance</Text>
                                    <Skeleton isLoaded={!isLoading}>
                                        <Text>{numberFormatUSDValue(valueInWallet)}</Text>
                                    </Skeleton>
                                </CardRow>
                                <CardRow mb="0">
                                    <Text flex="1">Staked balance</Text>
                                    <Skeleton isLoaded={!isLoading}>
                                        <Text>{numberFormatUSDValue(valueStaked)}</Text>
                                    </Skeleton>
                                </CardRow>
                            </>
                        ) : null}
                    </BeetsBox>

                    <BeetsBox p="2">
                        <Text fontSize="lg" fontWeight="semibold" mb="4">
                            Pool tokens breakdown
                        </Text>
                        {pool.withdrawConfig.options.map((option, index) => {
                            const hasOptions = option.tokenOptions.length > 1;
                            const token =
                                option.tokenOptions.find((tokenOption) =>
                                    selectedWithdrawTokenAddresses.includes(tokenOption.address),
                                ) || option.tokenOptions[0];
                            const balance = data?.find((item) => item.address === token.address)?.amount || '0';

                            return (
                                <CardRow
                                    key={token.address}
                                    mb={index === pool.tokens.length - 1 ? '0' : '1'}
                                    alignItems="center"
                                    pl={hasOptions ? '1' : '2'}
                                >
                                    <Box flex="1">
                                        {hasOptions ? (
                                            <TokenSelectInline
                                                tokenOptions={option.tokenOptions}
                                                selectedAddress={
                                                    selectedOptions[`${option.poolTokenIndex}`] ||
                                                    option.tokenOptions[0].address
                                                }
                                                onOptionSelect={(address) =>
                                                    setSelectedOption(option.poolTokenIndex, address)
                                                }
                                            />
                                        ) : (
                                            <HStack spacing="1.5">
                                                <TokenAvatar size="xs" address={token.address} />
                                                <Text fontSize="lg">{token.symbol}</Text>
                                            </HStack>
                                        )}
                                    </Box>

                                    <Box>
                                        <Box textAlign="right" fontSize="lg">
                                            <Skeleton isLoaded={!isLoading}>{tokenFormatAmount(balance)}</Skeleton>
                                        </Box>

                                        <Box textAlign="right" fontSize="sm" color="gray.200">
                                            <Skeleton isLoaded={!isLoading}>
                                                {numberFormatUSDValue(
                                                    priceForAmount({
                                                        address: token.address,
                                                        amount: balance,
                                                    }),
                                                )}
                                            </Skeleton>
                                        </Box>
                                    </Box>
                                </CardRow>
                            );
                        })}
                    </BeetsBox>
                </GridItem>
                <GridItem>
                    <BeetsBox p="4">
                        Withdrawing proportionally from this pool ensures you will NOT be subject to the potential fees
                        and/or impermanent loss caused by price impact.
                        <br />
                        <br />
                        Alternatively, you can withdraw a single asset. However, this action may shift the pool out of
                        balance, impacting your withdrawal with possible fees and impermanent loss caused by price
                        impact.
                        <br />
                        <br />
                        {
                            'When withdrawing from a liquidity pool, your BPT tokens are exchanged for the underlying pool assets.'
                        }
                    </BeetsBox>
                </GridItem>
            </Grid>
            {hasBptStaked && (
                <Alert status="warning" borderRadius="md" mb="4">
                    <AlertIcon />
                    <Box flex="1" mr="4">
                        You have ~{numberFormatUSDValue(valueStaked)} worth of BPT staked. In order to withdraw this
                        amount, you must first unstake your BPT.
                    </Box>
                    <Button variant="outline" onClick={unstakeDisclosure.onOpen}>
                        Unstake
                    </Button>
                </Alert>
            )}
            <Button variant="primary" width="full" mb="2" isDisabled={!hasBptInWallet} onClick={onShowProportional}>
                Withdraw proportionally
            </Button>
            <Button variant="secondary" width="full" isDisabled={!hasBptInWallet} onClick={onShowSingleAsset}>
                Single asset withdraw
            </Button>

            <PoolUnstakeModal {...unstakeDisclosure} />
        </Box>
    );
}
