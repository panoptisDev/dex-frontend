import { useTrade } from '~/modules/trade/lib/useTrade';
import { useBoolean } from '@chakra-ui/hooks';
import { useEffect } from 'react';
import { makeVar, NetworkStatus, useReactiveVar } from '@apollo/client';
import { GqlSorSwapType } from '~/apollo/generated/graphql-codegen-generated';
import { oldBnumToFixed } from '~/lib/services/pool/lib/old-big-number';
import { useDebouncedCallback } from 'use-debounce';
import { AmountHumanReadable } from '~/lib/services/token/token-types';

const buyAmountVar = makeVar<AmountHumanReadable>('');
const sellAmountVar = makeVar<AmountHumanReadable>('');
const tokenSelectedVar = makeVar<'tokenIn' | 'tokenOut'>('tokenIn');

export function useTradeCard() {
    const {
        reactiveTradeState,
        loadSwaps: _loadSwaps,
        loadingSwaps,
        setPreviewVisible,
        clearSwaps,
        setTradeConfig,
        getLatestState,
        setTokens,
        networkStatus,
    } = useTrade();

    // refetching the swaps may not always trigger the query loading state,
    // so we use a fallback flag to make sure that we always have some loading
    // even if the query is retrieving the 'same' value from the cache.
    const [isFetching, setIsFetching] = useBoolean();

    function setBuyAmount(amount: AmountHumanReadable) {
        buyAmountVar(amount);
    }

    function setSellAmount(amount: AmountHumanReadable) {
        sellAmountVar(amount);
    }

    function setTokenSelectKey(selected: 'tokenIn' | 'tokenOut') {
        tokenSelectedVar(selected);
    }

    const isLoadingOrFetching = loadingSwaps || isFetching || networkStatus === NetworkStatus.refetch;

    useEffect(() => {
        //TODO: load token in/out from url if passed in
    }, []);

    const fetchTrade = async (type: GqlSorSwapType, amount: string) => {
        setTradeConfig(type, amount);
        setPreviewVisible(false);

        const trade = await _loadSwaps(type, amount);
        const resultAmount = trade?.returnAmount || '0';
        const resultAmountFixed = resultAmount ? oldBnumToFixed(resultAmount, 6) : '';

        if (type === 'EXACT_IN') {
            setBuyAmount(resultAmountFixed);
        } else {
            setSellAmount(resultAmountFixed);
        }
        setIsFetching.off();
    };

    const dFetchTrade = useDebouncedCallback((type: 'EXACT_IN' | 'EXACT_OUT', amount: string) => {
        fetchTrade(type, amount);
    }, 300);

    const handleSellAmountChanged = async (event: { currentTarget: { value: string } }) => {
        const amount = event.currentTarget.value;

        if (amount === '' || parseFloat(amount) === 0) {
            dFetchTrade.cancel();
            setSellAmount(amount);
            setBuyAmount('');
            setIsFetching.off();
            clearSwaps();
        } else {
            setIsFetching.on();
            dFetchTrade('EXACT_IN', amount);
            setSellAmount(amount);
        }
    };

    const handleBuyAmountChanged = async (event: { currentTarget: { value: string } }) => {
        const amount = event.currentTarget.value;

        if (amount === '' || parseFloat(amount) === 0) {
            dFetchTrade.cancel();
            setBuyAmount(amount);
            setSellAmount('');
            setIsFetching.off();
            clearSwaps();
        } else {
            setIsFetching.on();
            dFetchTrade('EXACT_OUT', amount);
            setBuyAmount(amount);
        }
    };

    const handleTokenSelected = (address: string) => {
        const tokenSelectKey = tokenSelectedVar();
        const sellAmount = sellAmountVar();

        setTokens({ [tokenSelectKey]: address });

        if (parseFloat(sellAmount || '0') > 0) {
            setIsFetching.on();
            dFetchTrade('EXACT_IN', sellAmount);
        }
    };

    const handleTokensSwitched = () => {
        const state = getLatestState();
        const sellAmount = sellAmountVar();
        const buyAmount = buyAmountVar();

        setTokens({ tokenIn: state.tokenOut, tokenOut: state.tokenIn });
        setBuyAmount(sellAmount);
        setSellAmount(buyAmount);
    };

    const handleReviewClicked = () => {
        setPreviewVisible(true);
    };

    function refetchTrade() {
        const state = getLatestState();

        if (state.swapAmount) {
            setIsFetching.on();
            fetchTrade(state.swapType, state.swapAmount);
        }
    }

    return {
        tokenIn: reactiveTradeState.tokenIn,
        tokenOut: reactiveTradeState.tokenOut,
        sorResponse: reactiveTradeState.sorResponse,
        tokenSelectKey: useReactiveVar(tokenSelectedVar),
        sellAmount: useReactiveVar(sellAmountVar),
        buyAmount: useReactiveVar(buyAmountVar),
        isLoadingOrFetching,
        setTokenSelectKey,
        handleTokenSelected,
        handleSellAmountChanged,
        handleBuyAmountChanged,
        handleTokensSwitched,
        handleReviewClicked,
        refetchTrade,
    };
}
