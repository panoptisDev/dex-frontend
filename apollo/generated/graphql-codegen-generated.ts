/* tslint:disable */
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    AmountHumanReadable: string;
    BigDecimal: string;
    BigInt: string;
    Bytes: string;
    /** Date custom scalar type */
    Date: any;
    GqlBigNumber: any;
    /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
    JSON: any;
}

export interface FbeetsApr {
    __typename: 'FbeetsApr';
    apr: Scalars['Float'];
}

export interface GqlBalancePoolAprItem {
    __typename: 'GqlBalancePoolAprItem';
    apr: Scalars['BigDecimal'];
    subItems?: Maybe<Array<GqlBalancePoolAprSubItem>>;
    title: Scalars['String'];
}

export interface GqlBalancePoolAprSubItem {
    __typename: 'GqlBalancePoolAprSubItem';
    apr: Scalars['BigDecimal'];
    title: Scalars['String'];
}

export interface GqlBeetsConfig {
    __typename: 'GqlBeetsConfig';
    blacklistedPools: Array<Scalars['String']>;
    blacklistedTokens: Array<Scalars['String']>;
    boostedPools: Array<Scalars['String']>;
    excludedPools: Array<Scalars['String']>;
    featuredPools: Array<Scalars['String']>;
    homeEducationItems: Array<GqlBeetsConfigNewsItem>;
    homeFeaturedPools: Array<GqlBeetsConfigFeaturedPool>;
    homeNewsItems: Array<GqlBeetsConfigNewsItem>;
    incentivizedPools: Array<Scalars['String']>;
    pausedPools: Array<Scalars['String']>;
    poolFilters: Array<GqlBeetsConfigPoolFilterItem>;
}

export interface GqlBeetsConfigFeaturedPool {
    __typename: 'GqlBeetsConfigFeaturedPool';
    description?: Maybe<Scalars['String']>;
    image: Scalars['String'];
    poolId: Scalars['String'];
}

export interface GqlBeetsConfigNewsItem {
    __typename: 'GqlBeetsConfigNewsItem';
    description: Scalars['String'];
    image: Scalars['String'];
    publishDate: Scalars['String'];
    title: Scalars['String'];
    url: Scalars['String'];
}

export interface GqlBeetsConfigPoolFilterItem {
    __typename: 'GqlBeetsConfigPoolFilterItem';
    id: Scalars['ID'];
    pools: Array<Scalars['String']>;
    title: Scalars['String'];
}

export interface GqlBeetsProtocolData {
    __typename: 'GqlBeetsProtocolData';
    beetsPrice: Scalars['BigDecimal'];
    circulatingSupply: Scalars['BigDecimal'];
    fbeetsPrice: Scalars['BigDecimal'];
    marketCap: Scalars['BigDecimal'];
    poolCount: Scalars['BigInt'];
    swapFee24h: Scalars['BigDecimal'];
    swapVolume24h: Scalars['BigDecimal'];
    totalLiquidity: Scalars['BigDecimal'];
    totalSwapFee: Scalars['BigDecimal'];
    totalSwapVolume: Scalars['BigDecimal'];
}

export interface GqlConfigNewsItem {
    __typename: 'GqlConfigNewsItem';
    id: Scalars['ID'];
    image?: Maybe<Scalars['String']>;
    source: GqlConfigNewsItemSource;
    text: Scalars['String'];
    timestamp: Scalars['String'];
    url: Scalars['String'];
}

export type GqlConfigNewsItemSource = 'discord' | 'medium' | 'twitter';

export interface GqlFeaturePoolGroupItemExternalLink {
    __typename: 'GqlFeaturePoolGroupItemExternalLink';
    buttonText: Scalars['String'];
    buttonUrl: Scalars['String'];
    id: Scalars['ID'];
    image: Scalars['String'];
}

export interface GqlHistoricalTokenPrice {
    __typename: 'GqlHistoricalTokenPrice';
    address: Scalars['String'];
    prices: Array<GqlHistoricalTokenPriceEntry>;
}

export interface GqlHistoricalTokenPriceEntry {
    __typename: 'GqlHistoricalTokenPriceEntry';
    price: Scalars['Float'];
    timestamp: Scalars['String'];
}

export interface GqlLge {
    __typename: 'GqlLge';
    address: Scalars['String'];
    adminAddress: Scalars['String'];
    adminIsMultisig: Scalars['Boolean'];
    bannerImageUrl: Scalars['String'];
    collateralAmount: Scalars['String'];
    collateralEndWeight: Scalars['Int'];
    collateralStartWeight: Scalars['Int'];
    collateralTokenAddress: Scalars['String'];
    description: Scalars['String'];
    discordUrl: Scalars['String'];
    endDate: Scalars['String'];
    id: Scalars['ID'];
    mediumUrl: Scalars['String'];
    name: Scalars['String'];
    startDate: Scalars['String'];
    swapFeePercentage: Scalars['String'];
    telegramUrl: Scalars['String'];
    tokenAmount: Scalars['String'];
    tokenContractAddress: Scalars['String'];
    tokenEndWeight: Scalars['Int'];
    tokenIconUrl: Scalars['String'];
    tokenStartWeight: Scalars['Int'];
    twitterUrl: Scalars['String'];
    websiteUrl: Scalars['String'];
}

export interface GqlLgeCreateInput {
    address: Scalars['String'];
    bannerImageUrl: Scalars['String'];
    collateralAmount: Scalars['String'];
    collateralEndWeight: Scalars['Int'];
    collateralStartWeight: Scalars['Int'];
    collateralTokenAddress: Scalars['String'];
    description: Scalars['String'];
    discordUrl: Scalars['String'];
    endDate: Scalars['String'];
    id: Scalars['ID'];
    mediumUrl: Scalars['String'];
    name: Scalars['String'];
    startDate: Scalars['String'];
    swapFeePercentage: Scalars['String'];
    telegramUrl: Scalars['String'];
    tokenAmount: Scalars['String'];
    tokenContractAddress: Scalars['String'];
    tokenEndWeight: Scalars['Int'];
    tokenIconUrl: Scalars['String'];
    tokenStartWeight: Scalars['Int'];
    twitterUrl: Scalars['String'];
    websiteUrl: Scalars['String'];
}

export interface GqlLgeUpdateInput {
    description: Scalars['String'];
    discordUrl: Scalars['String'];
    id: Scalars['ID'];
    mediumUrl: Scalars['String'];
    name: Scalars['String'];
    telegramUrl: Scalars['String'];
    tokenIconUrl: Scalars['String'];
    twitterUrl: Scalars['String'];
    websiteUrl: Scalars['String'];
}

export interface GqlPoolApr {
    __typename: 'GqlPoolApr';
    hasRewardApr: Scalars['Boolean'];
    items: Array<GqlBalancePoolAprItem>;
    nativeRewardApr: Scalars['BigDecimal'];
    swapApr: Scalars['BigDecimal'];
    thirdPartyApr: Scalars['BigDecimal'];
    total: Scalars['BigDecimal'];
}

export interface GqlPoolAprItem {
    __typename: 'GqlPoolAprItem';
    apr: Scalars['BigDecimal'];
    subItems?: Maybe<Array<GqlBalancePoolAprSubItem>>;
    title: Scalars['String'];
}

export interface GqlPoolAprSubItem {
    __typename: 'GqlPoolAprSubItem';
    apr: Scalars['BigDecimal'];
    title: Scalars['String'];
}

export interface GqlPoolBase {
    address: Scalars['Bytes'];
    allTokens: Array<GqlPoolTokenExpanded>;
    createTime: Scalars['Int'];
    decimals: Scalars['Int'];
    dynamicData: GqlPoolDynamicData;
    factory?: Maybe<Scalars['Bytes']>;
    id: Scalars['ID'];
    investConfig: GqlPoolInvestConfig;
    name: Scalars['String'];
    owner?: Maybe<Scalars['Bytes']>;
    staking?: Maybe<GqlPoolStaking>;
    symbol: Scalars['String'];
    withdrawConfig: GqlPoolWithdrawConfig;
}

export interface GqlPoolBatchSwap {
    __typename: 'GqlPoolBatchSwap';
    id: Scalars['ID'];
    swaps: Array<GqlPoolBatchSwapSwap>;
    timestamp: Scalars['Int'];
    tokenAmountIn: Scalars['String'];
    tokenAmountOut: Scalars['String'];
    tokenIn: Scalars['String'];
    tokenInPrice: Scalars['Float'];
    tokenOut: Scalars['String'];
    tokenOutPrice: Scalars['Float'];
    tx: Scalars['String'];
    userAddress: Scalars['String'];
    valueUSD: Scalars['Float'];
}

export interface GqlPoolBatchSwapPool {
    __typename: 'GqlPoolBatchSwapPool';
    id: Scalars['ID'];
    tokens: Array<Scalars['String']>;
}

export interface GqlPoolBatchSwapSwap {
    __typename: 'GqlPoolBatchSwapSwap';
    id: Scalars['ID'];
    poolId: Scalars['String'];
    poolTokens: Array<Scalars['String']>;
    timestamp: Scalars['Int'];
    tokenAmountIn: Scalars['String'];
    tokenAmountOut: Scalars['String'];
    tokenIn: Scalars['String'];
    tokenOut: Scalars['String'];
    tx: Scalars['String'];
    userAddress: Scalars['String'];
    valueUSD: Scalars['Float'];
}

export interface GqlPoolDynamicData {
    __typename: 'GqlPoolDynamicData';
    apr: GqlPoolApr;
    fees24h: Scalars['BigDecimal'];
    fees48h: Scalars['BigDecimal'];
    poolId: Scalars['ID'];
    swapEnabled: Scalars['Boolean'];
    swapFee: Scalars['BigDecimal'];
    totalLiquidity: Scalars['BigDecimal'];
    totalLiquidity24hAgo: Scalars['BigDecimal'];
    totalShares: Scalars['BigDecimal'];
    totalShares24hAgo: Scalars['BigDecimal'];
    volume24h: Scalars['BigDecimal'];
    volume48h: Scalars['BigDecimal'];
}

export interface GqlPoolElement extends GqlPoolBase {
    __typename: 'GqlPoolElement';
    address: Scalars['Bytes'];
    allTokens: Array<GqlPoolTokenExpanded>;
    baseToken: Scalars['Bytes'];
    createTime: Scalars['Int'];
    decimals: Scalars['Int'];
    dynamicData: GqlPoolDynamicData;
    factory?: Maybe<Scalars['Bytes']>;
    id: Scalars['ID'];
    investConfig: GqlPoolInvestConfig;
    name: Scalars['String'];
    owner: Scalars['Bytes'];
    principalToken: Scalars['Bytes'];
    staking?: Maybe<GqlPoolStaking>;
    symbol: Scalars['String'];
    tokens: Array<GqlPoolToken>;
    unitSeconds: Scalars['BigInt'];
    withdrawConfig: GqlPoolWithdrawConfig;
}

export interface GqlPoolFeaturedPoolGroup {
    __typename: 'GqlPoolFeaturedPoolGroup';
    icon: Scalars['String'];
    id: Scalars['ID'];
    items: Array<GqlPoolFeaturedPoolGroupItem>;
    title: Scalars['String'];
}

export type GqlPoolFeaturedPoolGroupItem = GqlFeaturePoolGroupItemExternalLink | GqlPoolMinimal;

export interface GqlPoolFilter {
    categoryIn?: InputMaybe<Array<GqlPoolFilterCategory>>;
    categoryNotIn?: InputMaybe<Array<GqlPoolFilterCategory>>;
    filterIn?: InputMaybe<Array<Scalars['String']>>;
    filterNotIn?: InputMaybe<Array<Scalars['String']>>;
    idIn?: InputMaybe<Array<Scalars['String']>>;
    idNotIn?: InputMaybe<Array<Scalars['String']>>;
    poolTypeIn?: InputMaybe<Array<GqlPoolFilterType>>;
    poolTypeNotIn?: InputMaybe<Array<GqlPoolFilterType>>;
    tokensIn?: InputMaybe<Array<Scalars['String']>>;
    tokensNotIn?: InputMaybe<Array<Scalars['String']>>;
}

export type GqlPoolFilterCategory = 'INCENTIVIZED';

export interface GqlPoolFilterDefinition {
    __typename: 'GqlPoolFilterDefinition';
    id: Scalars['ID'];
    title: Scalars['String'];
}

export type GqlPoolFilterType =
    | 'ELEMENT'
    | 'INVESTMENT'
    | 'LINEAR'
    | 'LIQUIDITY_BOOTSTRAPPING'
    | 'META_STABLE'
    | 'PHANTOM_STABLE'
    | 'STABLE'
    | 'UNKNOWN'
    | 'WEIGHTED';

export interface GqlPoolInvestConfig {
    __typename: 'GqlPoolInvestConfig';
    options: Array<GqlPoolInvestOption>;
    proportionalEnabled: Scalars['Boolean'];
    singleAssetEnabled: Scalars['Boolean'];
}

export interface GqlPoolInvestOption {
    __typename: 'GqlPoolInvestOption';
    poolTokenAddress: Scalars['String'];
    poolTokenIndex: Scalars['Int'];
    tokenOptions: Array<GqlPoolToken>;
}

export interface GqlPoolJoinExit {
    __typename: 'GqlPoolJoinExit';
    amounts: Array<GqlPoolJoinExitAmount>;
    id: Scalars['ID'];
    poolId: Scalars['String'];
    sender: Scalars['String'];
    timestamp: Scalars['Int'];
    tx: Scalars['String'];
    type: GqlPoolJoinExitType;
    valueUSD: Scalars['String'];
}

export interface GqlPoolJoinExitAmount {
    __typename: 'GqlPoolJoinExitAmount';
    address: Scalars['String'];
    amount: Scalars['String'];
}

export interface GqlPoolJoinExitFilter {
    poolIdIn?: InputMaybe<Array<Scalars['String']>>;
}

export type GqlPoolJoinExitType = 'Exit' | 'Join';

export interface GqlPoolLinear extends GqlPoolBase {
    __typename: 'GqlPoolLinear';
    address: Scalars['Bytes'];
    allTokens: Array<GqlPoolTokenExpanded>;
    createTime: Scalars['Int'];
    decimals: Scalars['Int'];
    dynamicData: GqlPoolDynamicData;
    factory?: Maybe<Scalars['Bytes']>;
    id: Scalars['ID'];
    investConfig: GqlPoolInvestConfig;
    lowerTarget: Scalars['BigInt'];
    mainIndex: Scalars['Int'];
    name: Scalars['String'];
    owner: Scalars['Bytes'];
    staking?: Maybe<GqlPoolStaking>;
    symbol: Scalars['String'];
    tokens: Array<GqlPoolToken>;
    upperTarget: Scalars['BigInt'];
    withdrawConfig: GqlPoolWithdrawConfig;
    wrappedIndex: Scalars['Int'];
}

export interface GqlPoolLinearNested {
    __typename: 'GqlPoolLinearNested';
    address: Scalars['Bytes'];
    createTime: Scalars['Int'];
    factory?: Maybe<Scalars['Bytes']>;
    id: Scalars['ID'];
    lowerTarget: Scalars['BigInt'];
    mainIndex: Scalars['Int'];
    name: Scalars['String'];
    owner: Scalars['Bytes'];
    symbol: Scalars['String'];
    tokens: Array<GqlPoolToken>;
    totalLiquidity: Scalars['BigDecimal'];
    totalShares: Scalars['BigDecimal'];
    upperTarget: Scalars['BigInt'];
    wrappedIndex: Scalars['Int'];
}

export interface GqlPoolLinearPoolData {
    __typename: 'GqlPoolLinearPoolData';
    address: Scalars['String'];
    balance: Scalars['String'];
    id: Scalars['ID'];
    mainToken: GqlPoolLinearPoolMainToken;
    mainTokenTotalBalance: Scalars['String'];
    poolToken: Scalars['String'];
    priceRate: Scalars['String'];
    symbol: Scalars['String'];
    totalSupply: Scalars['String'];
    unwrappedTokenAddress: Scalars['String'];
    wrappedToken: GqlPoolLinearPoolWrappedToken;
}

export interface GqlPoolLinearPoolMainToken {
    __typename: 'GqlPoolLinearPoolMainToken';
    address: Scalars['String'];
    balance: Scalars['String'];
    decimals: Scalars['Int'];
    index: Scalars['Int'];
    name: Scalars['String'];
    symbol: Scalars['String'];
    totalSupply: Scalars['String'];
}

export interface GqlPoolLinearPoolWrappedToken {
    __typename: 'GqlPoolLinearPoolWrappedToken';
    address: Scalars['String'];
    balance: Scalars['String'];
    decimals: Scalars['Int'];
    index: Scalars['Int'];
    name: Scalars['String'];
    priceRate: Scalars['String'];
    symbol: Scalars['String'];
    totalSupply: Scalars['String'];
}

export interface GqlPoolLiquidityBootstrapping extends GqlPoolBase {
    __typename: 'GqlPoolLiquidityBootstrapping';
    address: Scalars['Bytes'];
    allTokens: Array<GqlPoolTokenExpanded>;
    createTime: Scalars['Int'];
    decimals: Scalars['Int'];
    dynamicData: GqlPoolDynamicData;
    factory?: Maybe<Scalars['Bytes']>;
    id: Scalars['ID'];
    investConfig: GqlPoolInvestConfig;
    name: Scalars['String'];
    nestingType: GqlPoolNestingType;
    owner: Scalars['Bytes'];
    staking?: Maybe<GqlPoolStaking>;
    symbol: Scalars['String'];
    tokens: Array<GqlPoolTokenUnion>;
    withdrawConfig: GqlPoolWithdrawConfig;
}

export interface GqlPoolMinimal {
    __typename: 'GqlPoolMinimal';
    address: Scalars['Bytes'];
    allTokens: Array<GqlPoolTokenExpanded>;
    createTime: Scalars['Int'];
    decimals: Scalars['Int'];
    dynamicData: GqlPoolDynamicData;
    factory?: Maybe<Scalars['Bytes']>;
    id: Scalars['ID'];
    name: Scalars['String'];
    owner?: Maybe<Scalars['Bytes']>;
    staking?: Maybe<GqlPoolStaking>;
    symbol: Scalars['String'];
}

export type GqlPoolNestedUnion = GqlPoolLinearNested | GqlPoolPhantomStableNested;

export type GqlPoolNestingType = 'HAS_ONLY_PHANTOM_BPT' | 'HAS_SOME_PHANTOM_BPT' | 'NO_NESTING';

export type GqlPoolOrderBy = 'apr' | 'fees24h' | 'totalLiquidity' | 'totalShares' | 'volume24h';

export type GqlPoolOrderDirection = 'asc' | 'desc';

export interface GqlPoolPhantomStable extends GqlPoolBase {
    __typename: 'GqlPoolPhantomStable';
    address: Scalars['Bytes'];
    allTokens: Array<GqlPoolTokenExpanded>;
    amp: Scalars['BigInt'];
    createTime: Scalars['Int'];
    decimals: Scalars['Int'];
    dynamicData: GqlPoolDynamicData;
    factory?: Maybe<Scalars['Bytes']>;
    id: Scalars['ID'];
    investConfig: GqlPoolInvestConfig;
    name: Scalars['String'];
    nestingType: GqlPoolNestingType;
    owner: Scalars['Bytes'];
    staking?: Maybe<GqlPoolStaking>;
    symbol: Scalars['String'];
    tokens: Array<GqlPoolTokenUnion>;
    withdrawConfig: GqlPoolWithdrawConfig;
}

export interface GqlPoolPhantomStableNested {
    __typename: 'GqlPoolPhantomStableNested';
    address: Scalars['Bytes'];
    createTime: Scalars['Int'];
    factory?: Maybe<Scalars['Bytes']>;
    id: Scalars['ID'];
    name: Scalars['String'];
    nestingType: GqlPoolNestingType;
    owner: Scalars['Bytes'];
    symbol: Scalars['String'];
    tokens: Array<GqlPoolTokenPhantomStableNestedUnion>;
    totalLiquidity: Scalars['BigDecimal'];
    totalShares: Scalars['BigDecimal'];
}

export interface GqlPoolStable extends GqlPoolBase {
    __typename: 'GqlPoolStable';
    address: Scalars['Bytes'];
    allTokens: Array<GqlPoolTokenExpanded>;
    amp: Scalars['BigInt'];
    createTime: Scalars['Int'];
    decimals: Scalars['Int'];
    dynamicData: GqlPoolDynamicData;
    factory?: Maybe<Scalars['Bytes']>;
    id: Scalars['ID'];
    investConfig: GqlPoolInvestConfig;
    name: Scalars['String'];
    owner: Scalars['Bytes'];
    staking?: Maybe<GqlPoolStaking>;
    symbol: Scalars['String'];
    tokens: Array<GqlPoolToken>;
    withdrawConfig: GqlPoolWithdrawConfig;
}

export interface GqlPoolStablePhantomPoolData {
    __typename: 'GqlPoolStablePhantomPoolData';
    address: Scalars['String'];
    balance: Scalars['String'];
    id: Scalars['ID'];
    symbol: Scalars['String'];
    tokens: Array<GqlPoolToken>;
    totalSupply: Scalars['String'];
}

export interface GqlPoolStaking {
    __typename: 'GqlPoolStaking';
    address: Scalars['String'];
    farm?: Maybe<GqlPoolStakingMasterChefFarm>;
    id: Scalars['ID'];
    type: GqlPoolStakingType;
}

export interface GqlPoolStakingMasterChefFarm {
    __typename: 'GqlPoolStakingMasterChefFarm';
    beetsPerBlock: Scalars['String'];
    id: Scalars['ID'];
    rewarders?: Maybe<Array<GqlPoolStakingMasterChefFarmRewarder>>;
}

export interface GqlPoolStakingMasterChefFarmRewarder {
    __typename: 'GqlPoolStakingMasterChefFarmRewarder';
    address: Scalars['String'];
    id: Scalars['ID'];
    rewardPerSecond: Scalars['String'];
    tokenAddress: Scalars['String'];
}

export type GqlPoolStakingType = 'FRESH_BEETS' | 'GAUGE' | 'MASTER_CHEF';

export interface GqlPoolSwap {
    __typename: 'GqlPoolSwap';
    id: Scalars['ID'];
    poolId: Scalars['String'];
    timestamp: Scalars['Int'];
    tokenAmountIn: Scalars['String'];
    tokenAmountOut: Scalars['String'];
    tokenIn: Scalars['String'];
    tokenOut: Scalars['String'];
    tx: Scalars['String'];
    userAddress: Scalars['String'];
    valueUSD: Scalars['Float'];
}

export interface GqlPoolSwapFilter {
    poolIdIn?: InputMaybe<Array<Scalars['String']>>;
    tokenInIn?: InputMaybe<Array<Scalars['String']>>;
    tokenOutIn?: InputMaybe<Array<Scalars['String']>>;
}

export interface GqlPoolToken extends GqlPoolTokenBase {
    __typename: 'GqlPoolToken';
    address: Scalars['String'];
    balance: Scalars['BigDecimal'];
    decimals: Scalars['Int'];
    id: Scalars['ID'];
    index: Scalars['Int'];
    name: Scalars['String'];
    priceRate: Scalars['BigDecimal'];
    symbol: Scalars['String'];
    weight?: Maybe<Scalars['BigDecimal']>;
}

export interface GqlPoolTokenBase {
    address: Scalars['String'];
    balance: Scalars['BigDecimal'];
    decimals: Scalars['Int'];
    id: Scalars['ID'];
    index: Scalars['Int'];
    name: Scalars['String'];
    priceRate: Scalars['BigDecimal'];
    symbol: Scalars['String'];
    weight?: Maybe<Scalars['BigDecimal']>;
}

export interface GqlPoolTokenExpanded {
    __typename: 'GqlPoolTokenExpanded';
    address: Scalars['String'];
    decimals: Scalars['Int'];
    id: Scalars['ID'];
    isNested: Scalars['Boolean'];
    isPhantomBpt: Scalars['Boolean'];
    name: Scalars['String'];
    symbol: Scalars['String'];
    weight?: Maybe<Scalars['String']>;
}

export interface GqlPoolTokenLinear extends GqlPoolTokenBase {
    __typename: 'GqlPoolTokenLinear';
    address: Scalars['String'];
    balance: Scalars['BigDecimal'];
    decimals: Scalars['Int'];
    id: Scalars['ID'];
    index: Scalars['Int'];
    mainTokenBalance: Scalars['BigDecimal'];
    name: Scalars['String'];
    pool: GqlPoolLinearNested;
    priceRate: Scalars['BigDecimal'];
    symbol: Scalars['String'];
    totalMainTokenBalance: Scalars['BigDecimal'];
    weight?: Maybe<Scalars['BigDecimal']>;
    wrappedTokenBalance: Scalars['BigDecimal'];
}

export interface GqlPoolTokenPhantomStable extends GqlPoolTokenBase {
    __typename: 'GqlPoolTokenPhantomStable';
    address: Scalars['String'];
    balance: Scalars['BigDecimal'];
    decimals: Scalars['Int'];
    id: Scalars['ID'];
    index: Scalars['Int'];
    name: Scalars['String'];
    pool: GqlPoolPhantomStableNested;
    priceRate: Scalars['BigDecimal'];
    symbol: Scalars['String'];
    weight?: Maybe<Scalars['BigDecimal']>;
}

export type GqlPoolTokenPhantomStableNestedUnion = GqlPoolToken | GqlPoolTokenLinear;

export type GqlPoolTokenUnion = GqlPoolToken | GqlPoolTokenLinear | GqlPoolTokenPhantomStable;

export type GqlPoolUnion =
    | GqlPoolElement
    | GqlPoolLinear
    | GqlPoolLiquidityBootstrapping
    | GqlPoolPhantomStable
    | GqlPoolStable
    | GqlPoolWeighted;

export interface GqlPoolUserSwapVolume {
    __typename: 'GqlPoolUserSwapVolume';
    swapVolumeUSD: Scalars['BigDecimal'];
    userAddress: Scalars['String'];
}

export interface GqlPoolWeighted extends GqlPoolBase {
    __typename: 'GqlPoolWeighted';
    address: Scalars['Bytes'];
    allTokens: Array<GqlPoolTokenExpanded>;
    createTime: Scalars['Int'];
    decimals: Scalars['Int'];
    dynamicData: GqlPoolDynamicData;
    factory?: Maybe<Scalars['Bytes']>;
    id: Scalars['ID'];
    investConfig: GqlPoolInvestConfig;
    name: Scalars['String'];
    nestingType: GqlPoolNestingType;
    owner: Scalars['Bytes'];
    staking?: Maybe<GqlPoolStaking>;
    symbol: Scalars['String'];
    tokens: Array<GqlPoolTokenUnion>;
    withdrawConfig: GqlPoolWithdrawConfig;
}

export interface GqlPoolWithdrawConfig {
    __typename: 'GqlPoolWithdrawConfig';
    options: Array<GqlPoolWithdrawOption>;
    proportionalEnabled: Scalars['Boolean'];
    singleAssetEnabled: Scalars['Boolean'];
}

export interface GqlPoolWithdrawOption {
    __typename: 'GqlPoolWithdrawOption';
    poolTokenAddress: Scalars['String'];
    poolTokenIndex: Scalars['Int'];
    tokenOptions: Array<GqlPoolToken>;
}

export interface GqlSorGetSwapsResponse {
    __typename: 'GqlSorGetSwapsResponse';
    effectivePrice: Scalars['AmountHumanReadable'];
    effectivePriceReversed: Scalars['AmountHumanReadable'];
    marketSp: Scalars['String'];
    priceImpact: Scalars['AmountHumanReadable'];
    returnAmount: Scalars['AmountHumanReadable'];
    returnAmountConsideringFees: Scalars['BigDecimal'];
    returnAmountFromSwaps?: Maybe<Scalars['BigDecimal']>;
    returnAmountScaled: Scalars['BigDecimal'];
    routes: Array<GqlSorSwapRoute>;
    swapAmount: Scalars['AmountHumanReadable'];
    swapAmountForSwaps?: Maybe<Scalars['BigDecimal']>;
    swapAmountScaled: Scalars['BigDecimal'];
    swapType: GqlSorSwapType;
    swaps: Array<GqlSorSwap>;
    tokenAddresses: Array<Scalars['String']>;
    tokenIn: Scalars['String'];
    tokenInAmount: Scalars['AmountHumanReadable'];
    tokenOut: Scalars['String'];
    tokenOutAmount: Scalars['AmountHumanReadable'];
}

export interface GqlSorSwap {
    __typename: 'GqlSorSwap';
    amount: Scalars['String'];
    assetInIndex: Scalars['Int'];
    assetOutIndex: Scalars['Int'];
    poolId: Scalars['String'];
    userData: Scalars['String'];
}

export interface GqlSorSwapOptionsInput {
    forceRefresh?: InputMaybe<Scalars['Boolean']>;
    maxPools?: InputMaybe<Scalars['Int']>;
    timestamp?: InputMaybe<Scalars['Int']>;
}

export interface GqlSorSwapRoute {
    __typename: 'GqlSorSwapRoute';
    hops: Array<GqlSorSwapRouteHop>;
    share: Scalars['Float'];
    tokenIn: Scalars['String'];
    tokenInAmount: Scalars['BigDecimal'];
    tokenOut: Scalars['String'];
    tokenOutAmount: Scalars['BigDecimal'];
}

export interface GqlSorSwapRouteHop {
    __typename: 'GqlSorSwapRouteHop';
    pool: GqlPoolMinimal;
    poolId: Scalars['String'];
    tokenIn: Scalars['String'];
    tokenInAmount: Scalars['BigDecimal'];
    tokenOut: Scalars['String'];
    tokenOutAmount: Scalars['BigDecimal'];
}

export type GqlSorSwapType = 'EXACT_IN' | 'EXACT_OUT';

export interface GqlToken {
    __typename: 'GqlToken';
    address: Scalars['String'];
    chainId: Scalars['Int'];
    decimals: Scalars['Int'];
    logoURI?: Maybe<Scalars['String']>;
    name: Scalars['String'];
    priority: Scalars['Int'];
    symbol: Scalars['String'];
    tradable: Scalars['Boolean'];
}

export interface GqlTokenCandlestickChartDataItem {
    __typename: 'GqlTokenCandlestickChartDataItem';
    close: Scalars['AmountHumanReadable'];
    high: Scalars['AmountHumanReadable'];
    id: Scalars['ID'];
    low: Scalars['AmountHumanReadable'];
    open: Scalars['AmountHumanReadable'];
    timestamp: Scalars['Int'];
}

export type GqlTokenChartDataRange = 'SEVEN_DAY' | 'THIRTY_DAY';

export interface GqlTokenData {
    __typename: 'GqlTokenData';
    description?: Maybe<Scalars['String']>;
    discordUrl?: Maybe<Scalars['String']>;
    id: Scalars['ID'];
    telegramUrl?: Maybe<Scalars['String']>;
    tokenAddress: Scalars['String'];
    twitterUsername?: Maybe<Scalars['String']>;
    websiteUrl?: Maybe<Scalars['String']>;
}

export interface GqlTokenDynamicData {
    __typename: 'GqlTokenDynamicData';
    ath: Scalars['Float'];
    atl: Scalars['Float'];
    fdv?: Maybe<Scalars['String']>;
    high24h: Scalars['Float'];
    id: Scalars['String'];
    low24h: Scalars['Float'];
    marketCap?: Maybe<Scalars['String']>;
    price: Scalars['Float'];
    priceChange24h: Scalars['Float'];
    priceChangePercent7d?: Maybe<Scalars['Float']>;
    priceChangePercent14d?: Maybe<Scalars['Float']>;
    priceChangePercent24h: Scalars['Float'];
    priceChangePercent30d?: Maybe<Scalars['Float']>;
    tokenAddress: Scalars['String'];
    updatedAt: Scalars['String'];
}

export interface GqlTokenPrice {
    __typename: 'GqlTokenPrice';
    address: Scalars['String'];
    price: Scalars['Float'];
}

export interface GqlTokenPriceChartDataItem {
    __typename: 'GqlTokenPriceChartDataItem';
    id: Scalars['ID'];
    price: Scalars['AmountHumanReadable'];
    timestamp: Scalars['Int'];
}

export interface GqlUserFbeetsBalance {
    __typename: 'GqlUserFbeetsBalance';
    id: Scalars['String'];
    stakedBalance: Scalars['AmountHumanReadable'];
    totalBalance: Scalars['AmountHumanReadable'];
    walletBalance: Scalars['AmountHumanReadable'];
}

export interface GqlUserPoolBalance {
    __typename: 'GqlUserPoolBalance';
    poolId: Scalars['String'];
    stakedBalance: Scalars['AmountHumanReadable'];
    tokenAddress: Scalars['String'];
    tokenPrice: Scalars['Float'];
    totalBalance: Scalars['AmountHumanReadable'];
    walletBalance: Scalars['AmountHumanReadable'];
}

export interface GqlUserPoolData {
    __typename: 'GqlUserPoolData';
    id: Scalars['String'];
    myFees: Scalars['GqlBigNumber'];
    name: Scalars['String'];
    percentOfPortfolio: Scalars['Float'];
    percentShare: Scalars['Float'];
    poolAddress: Scalars['String'];
    poolId: Scalars['String'];
    priceChange: Scalars['GqlBigNumber'];
    priceChangePercent: Scalars['Float'];
    pricePerShare: Scalars['GqlBigNumber'];
    shares: Scalars['GqlBigNumber'];
    swapFees: Scalars['GqlBigNumber'];
    swapVolume: Scalars['GqlBigNumber'];
    tokens: Array<GqlUserTokenData>;
    totalValue: Scalars['GqlBigNumber'];
}

export interface GqlUserPortfolioData {
    __typename: 'GqlUserPortfolioData';
    myFees: Scalars['GqlBigNumber'];
    pools: Array<GqlUserPoolData>;
    timestamp: Scalars['Int'];
    tokens: Array<GqlUserTokenData>;
    totalSwapFees: Scalars['GqlBigNumber'];
    totalSwapVolume: Scalars['GqlBigNumber'];
    totalValue: Scalars['GqlBigNumber'];
}

export interface GqlUserSwapVolumeFilter {
    poolIdIn?: InputMaybe<Array<Scalars['String']>>;
    tokenInIn?: InputMaybe<Array<Scalars['String']>>;
    tokenOutIn?: InputMaybe<Array<Scalars['String']>>;
}

export interface GqlUserTokenData {
    __typename: 'GqlUserTokenData';
    address: Scalars['String'];
    balance: Scalars['GqlBigNumber'];
    id: Scalars['String'];
    name: Scalars['String'];
    percentOfPortfolio: Scalars['Float'];
    pricePerToken: Scalars['GqlBigNumber'];
    symbol: Scalars['String'];
    totalValue: Scalars['GqlBigNumber'];
}

export interface Mutation {
    __typename: 'Mutation';
    beetsSyncFbeetsRatio: Scalars['String'];
    beetsSyncProtocolData: Scalars['String'];
    cachePortfolioHistoryForDate: Scalars['Boolean'];
    clearCacheAtBlock: Scalars['Boolean'];
    clearCachedPools: Scalars['Boolean'];
    clearCachedPortfolioHistories: Scalars['Boolean'];
    lgeCreate: GqlLge;
    poolLoadOnChainDataForAllPools: Scalars['String'];
    poolLoadOnChainDataForPoolsWithActiveUpdates: Scalars['String'];
    poolReloadAllPoolAprs: Scalars['String'];
    poolReloadStakingForAllPools: Scalars['String'];
    poolSyncAllPoolsFromSubgraph: Array<Scalars['String']>;
    poolSyncNewPoolsFromSubgraph: Array<Scalars['String']>;
    poolSyncPoolAllTokensRelationship: Scalars['String'];
    poolSyncSanityPoolData: Scalars['String'];
    poolSyncStakingForPools: Scalars['String'];
    poolSyncSwapsForLast48Hours: Scalars['String'];
    poolSyncTotalShares: Scalars['String'];
    poolUpdateAprs: Scalars['String'];
    poolUpdateLiquidity24hAgoForAllPools: Scalars['String'];
    poolUpdateLiquidityValuesForAllPools: Scalars['String'];
    poolUpdateVolumeAndFeeValuesForAllPools: Scalars['String'];
    refreshLatestBlockCachedKey: Scalars['Boolean'];
    tokenInitChartData: Scalars['String'];
    tokenReloadTokenPrices?: Maybe<Scalars['Boolean']>;
    tokenSyncTokenDefinitions: Scalars['String'];
    tokenSyncTokenDynamicData: Scalars['String'];
    userInitStakedBalances: Scalars['String'];
    userInitWalletBalancesForAllPools: Scalars['String'];
    userInitWalletBalancesForPool: Scalars['String'];
    userSyncStakedBalances: Scalars['String'];
    userSyncWalletBalancesForAllPools: Scalars['String'];
}

export interface MutationCachePortfolioHistoryForDateArgs {
    date: Scalars['String'];
}

export interface MutationClearCacheAtBlockArgs {
    block: Scalars['Int'];
}

export interface MutationLgeCreateArgs {
    lge: GqlLgeCreateInput;
    signature: Scalars['String'];
}

export interface MutationTokenInitChartDataArgs {
    tokenAddress: Scalars['String'];
}

export interface MutationUserInitWalletBalancesForPoolArgs {
    poolId: Scalars['String'];
}

export interface Query {
    __typename: 'Query';
    beetsGetConfig: GqlBeetsConfig;
    beetsGetFbeetsRatio: Scalars['String'];
    beetsGetProtocolData: GqlBeetsProtocolData;
    blocksGetAverageBlockTime: Scalars['Float'];
    configGetNewsItems: Array<GqlConfigNewsItem>;
    fbeetsGetApr: FbeetsApr;
    gnosisIsUserMultisigWallet?: Maybe<Scalars['Boolean']>;
    lge: GqlLge;
    lges: Array<GqlLge>;
    poolGetBatchSwaps: Array<GqlPoolBatchSwap>;
    poolGetFeaturedPoolGroups: Array<GqlPoolFeaturedPoolGroup>;
    poolGetJoinExits: Array<GqlPoolJoinExit>;
    poolGetPool: GqlPoolBase;
    poolGetPoolFilters: Array<GqlPoolFilterDefinition>;
    poolGetPools: Array<GqlPoolMinimal>;
    poolGetPoolsCount: Scalars['Int'];
    poolGetSwaps: Array<GqlPoolSwap>;
    poolGetUserSwapVolume: Array<GqlPoolUserSwapVolume>;
    portfolioGetUserPortfolio: GqlUserPortfolioData;
    portfolioGetUserPortfolioHistory: Array<GqlUserPortfolioData>;
    portfolioGetUserPortfolioHistoryAdmin: Array<GqlUserPortfolioData>;
    sorGetSwaps: GqlSorGetSwapsResponse;
    tokenGetCandlestickChartData: Array<GqlTokenCandlestickChartDataItem>;
    tokenGetCurrentPrices: Array<GqlTokenPrice>;
    tokenGetHistoricalPrices: Array<GqlHistoricalTokenPrice>;
    tokenGetPriceChartData: Array<GqlTokenPriceChartDataItem>;
    tokenGetRelativePriceChartData: Array<GqlTokenPriceChartDataItem>;
    tokenGetTokenData?: Maybe<GqlTokenData>;
    tokenGetTokenDynamicData?: Maybe<GqlTokenDynamicData>;
    tokenGetTokens: Array<GqlToken>;
    tokenGetTokensDynamicData: Array<GqlTokenDynamicData>;
    userGetFbeetsBalance: GqlUserFbeetsBalance;
    userGetPoolBalances: Array<GqlUserPoolBalance>;
    userGetPoolJoinExits: Array<GqlPoolJoinExit>;
    userGetStaking: Array<GqlPoolStaking>;
}

export interface QueryLgeArgs {
    id: Scalars['ID'];
}

export interface QueryPoolGetBatchSwapsArgs {
    first?: InputMaybe<Scalars['Int']>;
    skip?: InputMaybe<Scalars['Int']>;
    where?: InputMaybe<GqlPoolSwapFilter>;
}

export interface QueryPoolGetJoinExitsArgs {
    first?: InputMaybe<Scalars['Int']>;
    skip?: InputMaybe<Scalars['Int']>;
    where?: InputMaybe<GqlPoolJoinExitFilter>;
}

export interface QueryPoolGetPoolArgs {
    id: Scalars['String'];
}

export interface QueryPoolGetPoolsArgs {
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<GqlPoolOrderBy>;
    orderDirection?: InputMaybe<GqlPoolOrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    textSearch?: InputMaybe<Scalars['String']>;
    where?: InputMaybe<GqlPoolFilter>;
}

export interface QueryPoolGetPoolsCountArgs {
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<GqlPoolOrderBy>;
    orderDirection?: InputMaybe<GqlPoolOrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    textSearch?: InputMaybe<Scalars['String']>;
    where?: InputMaybe<GqlPoolFilter>;
}

export interface QueryPoolGetSwapsArgs {
    first?: InputMaybe<Scalars['Int']>;
    skip?: InputMaybe<Scalars['Int']>;
    where?: InputMaybe<GqlPoolSwapFilter>;
}

export interface QueryPoolGetUserSwapVolumeArgs {
    first?: InputMaybe<Scalars['Int']>;
    skip?: InputMaybe<Scalars['Int']>;
    where?: InputMaybe<GqlUserSwapVolumeFilter>;
}

export interface QuerySorGetSwapsArgs {
    swapAmount: Scalars['BigDecimal'];
    swapOptions: GqlSorSwapOptionsInput;
    swapType: GqlSorSwapType;
    tokenIn: Scalars['String'];
    tokenOut: Scalars['String'];
}

export interface QueryTokenGetCandlestickChartDataArgs {
    address: Scalars['String'];
    range: GqlTokenChartDataRange;
}

export interface QueryTokenGetHistoricalPricesArgs {
    addresses: Array<Scalars['String']>;
}

export interface QueryTokenGetPriceChartDataArgs {
    address: Scalars['String'];
    range: GqlTokenChartDataRange;
}

export interface QueryTokenGetRelativePriceChartDataArgs {
    range: GqlTokenChartDataRange;
    tokenIn: Scalars['String'];
    tokenOut: Scalars['String'];
}

export interface QueryTokenGetTokenDataArgs {
    address: Scalars['String'];
}

export interface QueryTokenGetTokenDynamicDataArgs {
    address: Scalars['String'];
}

export interface QueryTokenGetTokensDynamicDataArgs {
    addresses: Array<Scalars['String']>;
}

export interface QueryUserGetPoolJoinExitsArgs {
    first?: InputMaybe<Scalars['Int']>;
    poolId: Scalars['String'];
    skip?: InputMaybe<Scalars['Int']>;
}

export type GetPoolBatchSwapsQueryVariables = Exact<{
    first?: InputMaybe<Scalars['Int']>;
    skip?: InputMaybe<Scalars['Int']>;
    where?: InputMaybe<GqlPoolSwapFilter>;
}>;

export type GetPoolBatchSwapsQuery = {
    __typename: 'Query';
    batchSwaps: Array<{
        __typename: 'GqlPoolBatchSwap';
        id: string;
        timestamp: number;
        tokenAmountIn: string;
        tokenAmountOut: string;
        tokenIn: string;
        tokenOut: string;
        tokenInPrice: number;
        tokenOutPrice: number;
        tx: string;
        userAddress: string;
        valueUSD: number;
        swaps: Array<{
            __typename: 'GqlPoolBatchSwapSwap';
            id: string;
            timestamp: number;
            tokenAmountIn: string;
            tokenAmountOut: string;
            tokenIn: string;
            tokenOut: string;
            valueUSD: number;
            poolTokens: Array<string>;
            poolId: string;
        }>;
    }>;
};

export type GetAppGlobalDataQueryVariables = Exact<{ [key: string]: never }>;

export type GetAppGlobalDataQuery = {
    __typename: 'Query';
    beetsGetFbeetsRatio: string;
    tokenGetTokens: Array<{
        __typename: 'GqlToken';
        address: string;
        name: string;
        symbol: string;
        decimals: number;
        chainId: number;
        logoURI?: string | null;
        priority: number;
        tradable: boolean;
    }>;
    tokenGetCurrentPrices: Array<{ __typename: 'GqlTokenPrice'; price: number; address: string }>;
    beetsGetProtocolData: {
        __typename: 'GqlBeetsProtocolData';
        totalLiquidity: string;
        swapFee24h: string;
        swapVolume24h: string;
        marketCap: string;
        circulatingSupply: string;
        poolCount: string;
        beetsPrice: string;
        fbeetsPrice: string;
    };
};

export type GetTokensQueryVariables = Exact<{ [key: string]: never }>;

export type GetTokensQuery = {
    __typename: 'Query';
    tokens: Array<{
        __typename: 'GqlToken';
        address: string;
        name: string;
        symbol: string;
        decimals: number;
        chainId: number;
        logoURI?: string | null;
        priority: number;
        tradable: boolean;
    }>;
};

export type GetTokenPricesQueryVariables = Exact<{ [key: string]: never }>;

export type GetTokenPricesQuery = {
    __typename: 'Query';
    tokenPrices: Array<{ __typename: 'GqlTokenPrice'; price: number; address: string }>;
};

export type GetTokensDynamicDataQueryVariables = Exact<{
    addresses: Array<Scalars['String']> | Scalars['String'];
}>;

export type GetTokensDynamicDataQuery = {
    __typename: 'Query';
    dynamicData: Array<{
        __typename: 'GqlTokenDynamicData';
        ath: number;
        atl: number;
        fdv?: string | null;
        high24h: number;
        id: string;
        low24h: number;
        marketCap?: string | null;
        price: number;
        priceChange24h: number;
        priceChangePercent7d?: number | null;
        priceChangePercent14d?: number | null;
        priceChangePercent24h: number;
        priceChangePercent30d?: number | null;
        tokenAddress: string;
        updatedAt: string;
    }>;
};

export type GetFbeetsRatioQueryVariables = Exact<{ [key: string]: never }>;

export type GetFbeetsRatioQuery = { __typename: 'Query'; ratio: string };

export type GetProtocolDataQueryVariables = Exact<{ [key: string]: never }>;

export type GetProtocolDataQuery = {
    __typename: 'Query';
    protocolData: {
        __typename: 'GqlBeetsProtocolData';
        totalLiquidity: string;
        swapFee24h: string;
        swapVolume24h: string;
        marketCap: string;
        circulatingSupply: string;
        poolCount: string;
        beetsPrice: string;
        fbeetsPrice: string;
    };
};

export type GetUserDataQueryVariables = Exact<{ [key: string]: never }>;

export type GetUserDataQuery = {
    __typename: 'Query';
    balances: Array<{
        __typename: 'GqlUserPoolBalance';
        poolId: string;
        tokenAddress: string;
        tokenPrice: number;
        totalBalance: string;
        stakedBalance: string;
        walletBalance: string;
    }>;
    fbeetsBalance: {
        __typename: 'GqlUserFbeetsBalance';
        totalBalance: string;
        stakedBalance: string;
        walletBalance: string;
    };
    staking: Array<{
        __typename: 'GqlPoolStaking';
        id: string;
        type: GqlPoolStakingType;
        address: string;
        farm?: {
            __typename: 'GqlPoolStakingMasterChefFarm';
            id: string;
            beetsPerBlock: string;
            rewarders?: Array<{
                __typename: 'GqlPoolStakingMasterChefFarmRewarder';
                id: string;
                address: string;
                tokenAddress: string;
                rewardPerSecond: string;
            }> | null;
        } | null;
    }>;
};

export type GetHomeDataQueryVariables = Exact<{ [key: string]: never }>;

export type GetHomeDataQuery = {
    __typename: 'Query';
    poolGetFeaturedPoolGroups: Array<{
        __typename: 'GqlPoolFeaturedPoolGroup';
        id: string;
        icon: string;
        title: string;
        items: Array<
            | {
                  __typename: 'GqlFeaturePoolGroupItemExternalLink';
                  id: string;
                  image: string;
                  buttonText: string;
                  buttonUrl: string;
              }
            | {
                  __typename: 'GqlPoolMinimal';
                  id: string;
                  address: string;
                  name: string;
                  dynamicData: {
                      __typename: 'GqlPoolDynamicData';
                      totalLiquidity: string;
                      totalShares: string;
                      apr: {
                          __typename: 'GqlPoolApr';
                          hasRewardApr: boolean;
                          thirdPartyApr: string;
                          nativeRewardApr: string;
                          swapApr: string;
                          total: string;
                          items: Array<{
                              __typename: 'GqlBalancePoolAprItem';
                              title: string;
                              apr: string;
                              subItems?: Array<{
                                  __typename: 'GqlBalancePoolAprSubItem';
                                  title: string;
                                  apr: string;
                              }> | null;
                          }>;
                      };
                  };
                  allTokens: Array<{
                      __typename: 'GqlPoolTokenExpanded';
                      id: string;
                      address: string;
                      isNested: boolean;
                      isPhantomBpt: boolean;
                      weight?: string | null;
                  }>;
              }
        >;
    }>;
    configGetNewsItems: Array<{
        __typename: 'GqlConfigNewsItem';
        id: string;
        text: string;
        image?: string | null;
        url: string;
        source: GqlConfigNewsItemSource;
        timestamp: string;
    }>;
};

export type GetHomeFeaturedPoolsQueryVariables = Exact<{ [key: string]: never }>;

export type GetHomeFeaturedPoolsQuery = {
    __typename: 'Query';
    featuredPoolGroups: Array<{
        __typename: 'GqlPoolFeaturedPoolGroup';
        id: string;
        icon: string;
        title: string;
        items: Array<
            | {
                  __typename: 'GqlFeaturePoolGroupItemExternalLink';
                  id: string;
                  image: string;
                  buttonText: string;
                  buttonUrl: string;
              }
            | {
                  __typename: 'GqlPoolMinimal';
                  id: string;
                  address: string;
                  name: string;
                  dynamicData: {
                      __typename: 'GqlPoolDynamicData';
                      totalLiquidity: string;
                      totalShares: string;
                      apr: {
                          __typename: 'GqlPoolApr';
                          hasRewardApr: boolean;
                          thirdPartyApr: string;
                          nativeRewardApr: string;
                          swapApr: string;
                          total: string;
                          items: Array<{
                              __typename: 'GqlBalancePoolAprItem';
                              title: string;
                              apr: string;
                              subItems?: Array<{
                                  __typename: 'GqlBalancePoolAprSubItem';
                                  title: string;
                                  apr: string;
                              }> | null;
                          }>;
                      };
                  };
                  allTokens: Array<{
                      __typename: 'GqlPoolTokenExpanded';
                      id: string;
                      address: string;
                      isNested: boolean;
                      isPhantomBpt: boolean;
                      weight?: string | null;
                  }>;
              }
        >;
    }>;
};

export type GetHomeNewsItemsQueryVariables = Exact<{ [key: string]: never }>;

export type GetHomeNewsItemsQuery = {
    __typename: 'Query';
    newsItems: Array<{
        __typename: 'GqlConfigNewsItem';
        id: string;
        text: string;
        image?: string | null;
        url: string;
        source: GqlConfigNewsItemSource;
        timestamp: string;
    }>;
};

export type GqlPoolFeaturedPoolGroupFragment = {
    __typename: 'GqlPoolFeaturedPoolGroup';
    id: string;
    icon: string;
    title: string;
    items: Array<
        | {
              __typename: 'GqlFeaturePoolGroupItemExternalLink';
              id: string;
              image: string;
              buttonText: string;
              buttonUrl: string;
          }
        | {
              __typename: 'GqlPoolMinimal';
              id: string;
              address: string;
              name: string;
              dynamicData: {
                  __typename: 'GqlPoolDynamicData';
                  totalLiquidity: string;
                  totalShares: string;
                  apr: {
                      __typename: 'GqlPoolApr';
                      hasRewardApr: boolean;
                      thirdPartyApr: string;
                      nativeRewardApr: string;
                      swapApr: string;
                      total: string;
                      items: Array<{
                          __typename: 'GqlBalancePoolAprItem';
                          title: string;
                          apr: string;
                          subItems?: Array<{
                              __typename: 'GqlBalancePoolAprSubItem';
                              title: string;
                              apr: string;
                          }> | null;
                      }>;
                  };
              };
              allTokens: Array<{
                  __typename: 'GqlPoolTokenExpanded';
                  id: string;
                  address: string;
                  isNested: boolean;
                  isPhantomBpt: boolean;
                  weight?: string | null;
              }>;
          }
    >;
};

export type GqlPoolCardDataFragment = {
    __typename: 'GqlPoolMinimal';
    id: string;
    address: string;
    name: string;
    dynamicData: {
        __typename: 'GqlPoolDynamicData';
        totalLiquidity: string;
        totalShares: string;
        apr: {
            __typename: 'GqlPoolApr';
            hasRewardApr: boolean;
            thirdPartyApr: string;
            nativeRewardApr: string;
            swapApr: string;
            total: string;
            items: Array<{
                __typename: 'GqlBalancePoolAprItem';
                title: string;
                apr: string;
                subItems?: Array<{ __typename: 'GqlBalancePoolAprSubItem'; title: string; apr: string }> | null;
            }>;
        };
    };
    allTokens: Array<{
        __typename: 'GqlPoolTokenExpanded';
        id: string;
        address: string;
        isNested: boolean;
        isPhantomBpt: boolean;
        weight?: string | null;
    }>;
};

export type GetPoolQueryVariables = Exact<{
    id: Scalars['String'];
}>;

export type GetPoolQuery = {
    __typename: 'Query';
    pool:
        | {
              __typename: 'GqlPoolElement';
              unitSeconds: string;
              principalToken: string;
              baseToken: string;
              id: string;
              address: string;
              name: string;
              owner: string;
              decimals: number;
              factory?: string | null;
              symbol: string;
              createTime: number;
              tokens: Array<{
                  __typename: 'GqlPoolToken';
                  id: string;
                  index: number;
                  name: string;
                  symbol: string;
                  balance: string;
                  address: string;
                  priceRate: string;
                  decimals: number;
                  weight?: string | null;
              }>;
              dynamicData: {
                  __typename: 'GqlPoolDynamicData';
                  poolId: string;
                  swapEnabled: boolean;
                  totalLiquidity: string;
                  totalLiquidity24hAgo: string;
                  totalShares: string;
                  totalShares24hAgo: string;
                  fees24h: string;
                  swapFee: string;
                  volume24h: string;
                  fees48h: string;
                  volume48h: string;
                  apr: {
                      __typename: 'GqlPoolApr';
                      hasRewardApr: boolean;
                      thirdPartyApr: string;
                      nativeRewardApr: string;
                      swapApr: string;
                      total: string;
                      items: Array<{
                          __typename: 'GqlBalancePoolAprItem';
                          title: string;
                          apr: string;
                          subItems?: Array<{
                              __typename: 'GqlBalancePoolAprSubItem';
                              title: string;
                              apr: string;
                          }> | null;
                      }>;
                  };
              };
              allTokens: Array<{
                  __typename: 'GqlPoolTokenExpanded';
                  id: string;
                  address: string;
                  name: string;
                  symbol: string;
                  decimals: number;
                  isNested: boolean;
                  isPhantomBpt: boolean;
              }>;
              staking?: {
                  __typename: 'GqlPoolStaking';
                  id: string;
                  type: GqlPoolStakingType;
                  address: string;
                  farm?: {
                      __typename: 'GqlPoolStakingMasterChefFarm';
                      id: string;
                      beetsPerBlock: string;
                      rewarders?: Array<{
                          __typename: 'GqlPoolStakingMasterChefFarmRewarder';
                          id: string;
                          address: string;
                          tokenAddress: string;
                          rewardPerSecond: string;
                      }> | null;
                  } | null;
              } | null;
              investConfig: {
                  __typename: 'GqlPoolInvestConfig';
                  singleAssetEnabled: boolean;
                  proportionalEnabled: boolean;
                  options: Array<{
                      __typename: 'GqlPoolInvestOption';
                      poolTokenIndex: number;
                      poolTokenAddress: string;
                      tokenOptions: Array<{
                          __typename: 'GqlPoolToken';
                          id: string;
                          index: number;
                          name: string;
                          symbol: string;
                          balance: string;
                          address: string;
                          priceRate: string;
                          decimals: number;
                          weight?: string | null;
                      }>;
                  }>;
              };
              withdrawConfig: {
                  __typename: 'GqlPoolWithdrawConfig';
                  singleAssetEnabled: boolean;
                  proportionalEnabled: boolean;
                  options: Array<{
                      __typename: 'GqlPoolWithdrawOption';
                      poolTokenIndex: number;
                      poolTokenAddress: string;
                      tokenOptions: Array<{
                          __typename: 'GqlPoolToken';
                          id: string;
                          index: number;
                          name: string;
                          symbol: string;
                          balance: string;
                          address: string;
                          priceRate: string;
                          decimals: number;
                          weight?: string | null;
                      }>;
                  }>;
              };
          }
        | {
              __typename: 'GqlPoolLinear';
              mainIndex: number;
              wrappedIndex: number;
              lowerTarget: string;
              upperTarget: string;
              id: string;
              address: string;
              name: string;
              owner: string;
              decimals: number;
              factory?: string | null;
              symbol: string;
              createTime: number;
              tokens: Array<{
                  __typename: 'GqlPoolToken';
                  id: string;
                  index: number;
                  name: string;
                  symbol: string;
                  balance: string;
                  address: string;
                  priceRate: string;
                  decimals: number;
                  weight?: string | null;
              }>;
              dynamicData: {
                  __typename: 'GqlPoolDynamicData';
                  poolId: string;
                  swapEnabled: boolean;
                  totalLiquidity: string;
                  totalLiquidity24hAgo: string;
                  totalShares: string;
                  totalShares24hAgo: string;
                  fees24h: string;
                  swapFee: string;
                  volume24h: string;
                  fees48h: string;
                  volume48h: string;
                  apr: {
                      __typename: 'GqlPoolApr';
                      hasRewardApr: boolean;
                      thirdPartyApr: string;
                      nativeRewardApr: string;
                      swapApr: string;
                      total: string;
                      items: Array<{
                          __typename: 'GqlBalancePoolAprItem';
                          title: string;
                          apr: string;
                          subItems?: Array<{
                              __typename: 'GqlBalancePoolAprSubItem';
                              title: string;
                              apr: string;
                          }> | null;
                      }>;
                  };
              };
              allTokens: Array<{
                  __typename: 'GqlPoolTokenExpanded';
                  id: string;
                  address: string;
                  name: string;
                  symbol: string;
                  decimals: number;
                  isNested: boolean;
                  isPhantomBpt: boolean;
              }>;
              staking?: {
                  __typename: 'GqlPoolStaking';
                  id: string;
                  type: GqlPoolStakingType;
                  address: string;
                  farm?: {
                      __typename: 'GqlPoolStakingMasterChefFarm';
                      id: string;
                      beetsPerBlock: string;
                      rewarders?: Array<{
                          __typename: 'GqlPoolStakingMasterChefFarmRewarder';
                          id: string;
                          address: string;
                          tokenAddress: string;
                          rewardPerSecond: string;
                      }> | null;
                  } | null;
              } | null;
              investConfig: {
                  __typename: 'GqlPoolInvestConfig';
                  singleAssetEnabled: boolean;
                  proportionalEnabled: boolean;
                  options: Array<{
                      __typename: 'GqlPoolInvestOption';
                      poolTokenIndex: number;
                      poolTokenAddress: string;
                      tokenOptions: Array<{
                          __typename: 'GqlPoolToken';
                          id: string;
                          index: number;
                          name: string;
                          symbol: string;
                          balance: string;
                          address: string;
                          priceRate: string;
                          decimals: number;
                          weight?: string | null;
                      }>;
                  }>;
              };
              withdrawConfig: {
                  __typename: 'GqlPoolWithdrawConfig';
                  singleAssetEnabled: boolean;
                  proportionalEnabled: boolean;
                  options: Array<{
                      __typename: 'GqlPoolWithdrawOption';
                      poolTokenIndex: number;
                      poolTokenAddress: string;
                      tokenOptions: Array<{
                          __typename: 'GqlPoolToken';
                          id: string;
                          index: number;
                          name: string;
                          symbol: string;
                          balance: string;
                          address: string;
                          priceRate: string;
                          decimals: number;
                          weight?: string | null;
                      }>;
                  }>;
              };
          }
        | {
              __typename: 'GqlPoolLiquidityBootstrapping';
              name: string;
              nestingType: GqlPoolNestingType;
              id: string;
              address: string;
              owner: string;
              decimals: number;
              factory?: string | null;
              symbol: string;
              createTime: number;
              tokens: Array<
                  | {
                        __typename: 'GqlPoolToken';
                        id: string;
                        index: number;
                        name: string;
                        symbol: string;
                        balance: string;
                        address: string;
                        priceRate: string;
                        decimals: number;
                        weight?: string | null;
                    }
                  | {
                        __typename: 'GqlPoolTokenLinear';
                        id: string;
                        index: number;
                        name: string;
                        symbol: string;
                        balance: string;
                        address: string;
                        priceRate: string;
                        decimals: number;
                        weight?: string | null;
                        mainTokenBalance: string;
                        wrappedTokenBalance: string;
                        totalMainTokenBalance: string;
                        pool: {
                            __typename: 'GqlPoolLinearNested';
                            id: string;
                            name: string;
                            symbol: string;
                            address: string;
                            owner: string;
                            factory?: string | null;
                            createTime: number;
                            wrappedIndex: number;
                            mainIndex: number;
                            upperTarget: string;
                            lowerTarget: string;
                            totalShares: string;
                            totalLiquidity: string;
                            tokens: Array<{
                                __typename: 'GqlPoolToken';
                                id: string;
                                index: number;
                                name: string;
                                symbol: string;
                                balance: string;
                                address: string;
                                priceRate: string;
                                decimals: number;
                                weight?: string | null;
                            }>;
                        };
                    }
                  | {
                        __typename: 'GqlPoolTokenPhantomStable';
                        id: string;
                        index: number;
                        name: string;
                        symbol: string;
                        balance: string;
                        address: string;
                        weight?: string | null;
                        priceRate: string;
                        decimals: number;
                        pool: {
                            __typename: 'GqlPoolPhantomStableNested';
                            id: string;
                            name: string;
                            symbol: string;
                            address: string;
                            owner: string;
                            factory?: string | null;
                            createTime: number;
                            totalShares: string;
                            totalLiquidity: string;
                            nestingType: GqlPoolNestingType;
                            tokens: Array<
                                | {
                                      __typename: 'GqlPoolToken';
                                      id: string;
                                      index: number;
                                      name: string;
                                      symbol: string;
                                      balance: string;
                                      address: string;
                                      priceRate: string;
                                      decimals: number;
                                      weight?: string | null;
                                  }
                                | {
                                      __typename: 'GqlPoolTokenLinear';
                                      id: string;
                                      index: number;
                                      name: string;
                                      symbol: string;
                                      balance: string;
                                      address: string;
                                      priceRate: string;
                                      decimals: number;
                                      weight?: string | null;
                                      mainTokenBalance: string;
                                      wrappedTokenBalance: string;
                                      totalMainTokenBalance: string;
                                      pool: {
                                          __typename: 'GqlPoolLinearNested';
                                          id: string;
                                          name: string;
                                          symbol: string;
                                          address: string;
                                          owner: string;
                                          factory?: string | null;
                                          createTime: number;
                                          wrappedIndex: number;
                                          mainIndex: number;
                                          upperTarget: string;
                                          lowerTarget: string;
                                          totalShares: string;
                                          totalLiquidity: string;
                                          tokens: Array<{
                                              __typename: 'GqlPoolToken';
                                              id: string;
                                              index: number;
                                              name: string;
                                              symbol: string;
                                              balance: string;
                                              address: string;
                                              priceRate: string;
                                              decimals: number;
                                              weight?: string | null;
                                          }>;
                                      };
                                  }
                            >;
                        };
                    }
              >;
              dynamicData: {
                  __typename: 'GqlPoolDynamicData';
                  poolId: string;
                  swapEnabled: boolean;
                  totalLiquidity: string;
                  totalLiquidity24hAgo: string;
                  totalShares: string;
                  totalShares24hAgo: string;
                  fees24h: string;
                  swapFee: string;
                  volume24h: string;
                  fees48h: string;
                  volume48h: string;
                  apr: {
                      __typename: 'GqlPoolApr';
                      hasRewardApr: boolean;
                      thirdPartyApr: string;
                      nativeRewardApr: string;
                      swapApr: string;
                      total: string;
                      items: Array<{
                          __typename: 'GqlBalancePoolAprItem';
                          title: string;
                          apr: string;
                          subItems?: Array<{
                              __typename: 'GqlBalancePoolAprSubItem';
                              title: string;
                              apr: string;
                          }> | null;
                      }>;
                  };
              };
              allTokens: Array<{
                  __typename: 'GqlPoolTokenExpanded';
                  id: string;
                  address: string;
                  name: string;
                  symbol: string;
                  decimals: number;
                  isNested: boolean;
                  isPhantomBpt: boolean;
              }>;
              staking?: {
                  __typename: 'GqlPoolStaking';
                  id: string;
                  type: GqlPoolStakingType;
                  address: string;
                  farm?: {
                      __typename: 'GqlPoolStakingMasterChefFarm';
                      id: string;
                      beetsPerBlock: string;
                      rewarders?: Array<{
                          __typename: 'GqlPoolStakingMasterChefFarmRewarder';
                          id: string;
                          address: string;
                          tokenAddress: string;
                          rewardPerSecond: string;
                      }> | null;
                  } | null;
              } | null;
              investConfig: {
                  __typename: 'GqlPoolInvestConfig';
                  singleAssetEnabled: boolean;
                  proportionalEnabled: boolean;
                  options: Array<{
                      __typename: 'GqlPoolInvestOption';
                      poolTokenIndex: number;
                      poolTokenAddress: string;
                      tokenOptions: Array<{
                          __typename: 'GqlPoolToken';
                          id: string;
                          index: number;
                          name: string;
                          symbol: string;
                          balance: string;
                          address: string;
                          priceRate: string;
                          decimals: number;
                          weight?: string | null;
                      }>;
                  }>;
              };
              withdrawConfig: {
                  __typename: 'GqlPoolWithdrawConfig';
                  singleAssetEnabled: boolean;
                  proportionalEnabled: boolean;
                  options: Array<{
                      __typename: 'GqlPoolWithdrawOption';
                      poolTokenIndex: number;
                      poolTokenAddress: string;
                      tokenOptions: Array<{
                          __typename: 'GqlPoolToken';
                          id: string;
                          index: number;
                          name: string;
                          symbol: string;
                          balance: string;
                          address: string;
                          priceRate: string;
                          decimals: number;
                          weight?: string | null;
                      }>;
                  }>;
              };
          }
        | {
              __typename: 'GqlPoolPhantomStable';
              amp: string;
              nestingType: GqlPoolNestingType;
              id: string;
              address: string;
              name: string;
              owner: string;
              decimals: number;
              factory?: string | null;
              symbol: string;
              createTime: number;
              tokens: Array<
                  | {
                        __typename: 'GqlPoolToken';
                        id: string;
                        index: number;
                        name: string;
                        symbol: string;
                        balance: string;
                        address: string;
                        priceRate: string;
                        decimals: number;
                        weight?: string | null;
                    }
                  | {
                        __typename: 'GqlPoolTokenLinear';
                        id: string;
                        index: number;
                        name: string;
                        symbol: string;
                        balance: string;
                        address: string;
                        priceRate: string;
                        decimals: number;
                        weight?: string | null;
                        mainTokenBalance: string;
                        wrappedTokenBalance: string;
                        totalMainTokenBalance: string;
                        pool: {
                            __typename: 'GqlPoolLinearNested';
                            id: string;
                            name: string;
                            symbol: string;
                            address: string;
                            owner: string;
                            factory?: string | null;
                            createTime: number;
                            wrappedIndex: number;
                            mainIndex: number;
                            upperTarget: string;
                            lowerTarget: string;
                            totalShares: string;
                            totalLiquidity: string;
                            tokens: Array<{
                                __typename: 'GqlPoolToken';
                                id: string;
                                index: number;
                                name: string;
                                symbol: string;
                                balance: string;
                                address: string;
                                priceRate: string;
                                decimals: number;
                                weight?: string | null;
                            }>;
                        };
                    }
                  | {
                        __typename: 'GqlPoolTokenPhantomStable';
                        id: string;
                        index: number;
                        name: string;
                        symbol: string;
                        balance: string;
                        address: string;
                        weight?: string | null;
                        priceRate: string;
                        decimals: number;
                        pool: {
                            __typename: 'GqlPoolPhantomStableNested';
                            id: string;
                            name: string;
                            symbol: string;
                            address: string;
                            owner: string;
                            factory?: string | null;
                            createTime: number;
                            totalShares: string;
                            totalLiquidity: string;
                            nestingType: GqlPoolNestingType;
                            tokens: Array<
                                | {
                                      __typename: 'GqlPoolToken';
                                      id: string;
                                      index: number;
                                      name: string;
                                      symbol: string;
                                      balance: string;
                                      address: string;
                                      priceRate: string;
                                      decimals: number;
                                      weight?: string | null;
                                  }
                                | {
                                      __typename: 'GqlPoolTokenLinear';
                                      id: string;
                                      index: number;
                                      name: string;
                                      symbol: string;
                                      balance: string;
                                      address: string;
                                      priceRate: string;
                                      decimals: number;
                                      weight?: string | null;
                                      mainTokenBalance: string;
                                      wrappedTokenBalance: string;
                                      totalMainTokenBalance: string;
                                      pool: {
                                          __typename: 'GqlPoolLinearNested';
                                          id: string;
                                          name: string;
                                          symbol: string;
                                          address: string;
                                          owner: string;
                                          factory?: string | null;
                                          createTime: number;
                                          wrappedIndex: number;
                                          mainIndex: number;
                                          upperTarget: string;
                                          lowerTarget: string;
                                          totalShares: string;
                                          totalLiquidity: string;
                                          tokens: Array<{
                                              __typename: 'GqlPoolToken';
                                              id: string;
                                              index: number;
                                              name: string;
                                              symbol: string;
                                              balance: string;
                                              address: string;
                                              priceRate: string;
                                              decimals: number;
                                              weight?: string | null;
                                          }>;
                                      };
                                  }
                            >;
                        };
                    }
              >;
              dynamicData: {
                  __typename: 'GqlPoolDynamicData';
                  poolId: string;
                  swapEnabled: boolean;
                  totalLiquidity: string;
                  totalLiquidity24hAgo: string;
                  totalShares: string;
                  totalShares24hAgo: string;
                  fees24h: string;
                  swapFee: string;
                  volume24h: string;
                  fees48h: string;
                  volume48h: string;
                  apr: {
                      __typename: 'GqlPoolApr';
                      hasRewardApr: boolean;
                      thirdPartyApr: string;
                      nativeRewardApr: string;
                      swapApr: string;
                      total: string;
                      items: Array<{
                          __typename: 'GqlBalancePoolAprItem';
                          title: string;
                          apr: string;
                          subItems?: Array<{
                              __typename: 'GqlBalancePoolAprSubItem';
                              title: string;
                              apr: string;
                          }> | null;
                      }>;
                  };
              };
              allTokens: Array<{
                  __typename: 'GqlPoolTokenExpanded';
                  id: string;
                  address: string;
                  name: string;
                  symbol: string;
                  decimals: number;
                  isNested: boolean;
                  isPhantomBpt: boolean;
              }>;
              staking?: {
                  __typename: 'GqlPoolStaking';
                  id: string;
                  type: GqlPoolStakingType;
                  address: string;
                  farm?: {
                      __typename: 'GqlPoolStakingMasterChefFarm';
                      id: string;
                      beetsPerBlock: string;
                      rewarders?: Array<{
                          __typename: 'GqlPoolStakingMasterChefFarmRewarder';
                          id: string;
                          address: string;
                          tokenAddress: string;
                          rewardPerSecond: string;
                      }> | null;
                  } | null;
              } | null;
              investConfig: {
                  __typename: 'GqlPoolInvestConfig';
                  singleAssetEnabled: boolean;
                  proportionalEnabled: boolean;
                  options: Array<{
                      __typename: 'GqlPoolInvestOption';
                      poolTokenIndex: number;
                      poolTokenAddress: string;
                      tokenOptions: Array<{
                          __typename: 'GqlPoolToken';
                          id: string;
                          index: number;
                          name: string;
                          symbol: string;
                          balance: string;
                          address: string;
                          priceRate: string;
                          decimals: number;
                          weight?: string | null;
                      }>;
                  }>;
              };
              withdrawConfig: {
                  __typename: 'GqlPoolWithdrawConfig';
                  singleAssetEnabled: boolean;
                  proportionalEnabled: boolean;
                  options: Array<{
                      __typename: 'GqlPoolWithdrawOption';
                      poolTokenIndex: number;
                      poolTokenAddress: string;
                      tokenOptions: Array<{
                          __typename: 'GqlPoolToken';
                          id: string;
                          index: number;
                          name: string;
                          symbol: string;
                          balance: string;
                          address: string;
                          priceRate: string;
                          decimals: number;
                          weight?: string | null;
                      }>;
                  }>;
              };
          }
        | {
              __typename: 'GqlPoolStable';
              amp: string;
              id: string;
              address: string;
              name: string;
              owner: string;
              decimals: number;
              factory?: string | null;
              symbol: string;
              createTime: number;
              tokens: Array<{
                  __typename: 'GqlPoolToken';
                  id: string;
                  index: number;
                  name: string;
                  symbol: string;
                  balance: string;
                  address: string;
                  priceRate: string;
                  decimals: number;
                  weight?: string | null;
              }>;
              dynamicData: {
                  __typename: 'GqlPoolDynamicData';
                  poolId: string;
                  swapEnabled: boolean;
                  totalLiquidity: string;
                  totalLiquidity24hAgo: string;
                  totalShares: string;
                  totalShares24hAgo: string;
                  fees24h: string;
                  swapFee: string;
                  volume24h: string;
                  fees48h: string;
                  volume48h: string;
                  apr: {
                      __typename: 'GqlPoolApr';
                      hasRewardApr: boolean;
                      thirdPartyApr: string;
                      nativeRewardApr: string;
                      swapApr: string;
                      total: string;
                      items: Array<{
                          __typename: 'GqlBalancePoolAprItem';
                          title: string;
                          apr: string;
                          subItems?: Array<{
                              __typename: 'GqlBalancePoolAprSubItem';
                              title: string;
                              apr: string;
                          }> | null;
                      }>;
                  };
              };
              allTokens: Array<{
                  __typename: 'GqlPoolTokenExpanded';
                  id: string;
                  address: string;
                  name: string;
                  symbol: string;
                  decimals: number;
                  isNested: boolean;
                  isPhantomBpt: boolean;
              }>;
              staking?: {
                  __typename: 'GqlPoolStaking';
                  id: string;
                  type: GqlPoolStakingType;
                  address: string;
                  farm?: {
                      __typename: 'GqlPoolStakingMasterChefFarm';
                      id: string;
                      beetsPerBlock: string;
                      rewarders?: Array<{
                          __typename: 'GqlPoolStakingMasterChefFarmRewarder';
                          id: string;
                          address: string;
                          tokenAddress: string;
                          rewardPerSecond: string;
                      }> | null;
                  } | null;
              } | null;
              investConfig: {
                  __typename: 'GqlPoolInvestConfig';
                  singleAssetEnabled: boolean;
                  proportionalEnabled: boolean;
                  options: Array<{
                      __typename: 'GqlPoolInvestOption';
                      poolTokenIndex: number;
                      poolTokenAddress: string;
                      tokenOptions: Array<{
                          __typename: 'GqlPoolToken';
                          id: string;
                          index: number;
                          name: string;
                          symbol: string;
                          balance: string;
                          address: string;
                          priceRate: string;
                          decimals: number;
                          weight?: string | null;
                      }>;
                  }>;
              };
              withdrawConfig: {
                  __typename: 'GqlPoolWithdrawConfig';
                  singleAssetEnabled: boolean;
                  proportionalEnabled: boolean;
                  options: Array<{
                      __typename: 'GqlPoolWithdrawOption';
                      poolTokenIndex: number;
                      poolTokenAddress: string;
                      tokenOptions: Array<{
                          __typename: 'GqlPoolToken';
                          id: string;
                          index: number;
                          name: string;
                          symbol: string;
                          balance: string;
                          address: string;
                          priceRate: string;
                          decimals: number;
                          weight?: string | null;
                      }>;
                  }>;
              };
          }
        | {
              __typename: 'GqlPoolWeighted';
              nestingType: GqlPoolNestingType;
              id: string;
              address: string;
              name: string;
              owner: string;
              decimals: number;
              factory?: string | null;
              symbol: string;
              createTime: number;
              tokens: Array<
                  | {
                        __typename: 'GqlPoolToken';
                        id: string;
                        index: number;
                        name: string;
                        symbol: string;
                        balance: string;
                        address: string;
                        priceRate: string;
                        decimals: number;
                        weight?: string | null;
                    }
                  | {
                        __typename: 'GqlPoolTokenLinear';
                        id: string;
                        index: number;
                        name: string;
                        symbol: string;
                        balance: string;
                        address: string;
                        priceRate: string;
                        decimals: number;
                        weight?: string | null;
                        mainTokenBalance: string;
                        wrappedTokenBalance: string;
                        totalMainTokenBalance: string;
                        pool: {
                            __typename: 'GqlPoolLinearNested';
                            id: string;
                            name: string;
                            symbol: string;
                            address: string;
                            owner: string;
                            factory?: string | null;
                            createTime: number;
                            wrappedIndex: number;
                            mainIndex: number;
                            upperTarget: string;
                            lowerTarget: string;
                            totalShares: string;
                            totalLiquidity: string;
                            tokens: Array<{
                                __typename: 'GqlPoolToken';
                                id: string;
                                index: number;
                                name: string;
                                symbol: string;
                                balance: string;
                                address: string;
                                priceRate: string;
                                decimals: number;
                                weight?: string | null;
                            }>;
                        };
                    }
                  | {
                        __typename: 'GqlPoolTokenPhantomStable';
                        id: string;
                        index: number;
                        name: string;
                        symbol: string;
                        balance: string;
                        address: string;
                        weight?: string | null;
                        priceRate: string;
                        decimals: number;
                        pool: {
                            __typename: 'GqlPoolPhantomStableNested';
                            id: string;
                            name: string;
                            symbol: string;
                            address: string;
                            owner: string;
                            factory?: string | null;
                            createTime: number;
                            totalShares: string;
                            totalLiquidity: string;
                            nestingType: GqlPoolNestingType;
                            tokens: Array<
                                | {
                                      __typename: 'GqlPoolToken';
                                      id: string;
                                      index: number;
                                      name: string;
                                      symbol: string;
                                      balance: string;
                                      address: string;
                                      priceRate: string;
                                      decimals: number;
                                      weight?: string | null;
                                  }
                                | {
                                      __typename: 'GqlPoolTokenLinear';
                                      id: string;
                                      index: number;
                                      name: string;
                                      symbol: string;
                                      balance: string;
                                      address: string;
                                      priceRate: string;
                                      decimals: number;
                                      weight?: string | null;
                                      mainTokenBalance: string;
                                      wrappedTokenBalance: string;
                                      totalMainTokenBalance: string;
                                      pool: {
                                          __typename: 'GqlPoolLinearNested';
                                          id: string;
                                          name: string;
                                          symbol: string;
                                          address: string;
                                          owner: string;
                                          factory?: string | null;
                                          createTime: number;
                                          wrappedIndex: number;
                                          mainIndex: number;
                                          upperTarget: string;
                                          lowerTarget: string;
                                          totalShares: string;
                                          totalLiquidity: string;
                                          tokens: Array<{
                                              __typename: 'GqlPoolToken';
                                              id: string;
                                              index: number;
                                              name: string;
                                              symbol: string;
                                              balance: string;
                                              address: string;
                                              priceRate: string;
                                              decimals: number;
                                              weight?: string | null;
                                          }>;
                                      };
                                  }
                            >;
                        };
                    }
              >;
              dynamicData: {
                  __typename: 'GqlPoolDynamicData';
                  poolId: string;
                  swapEnabled: boolean;
                  totalLiquidity: string;
                  totalLiquidity24hAgo: string;
                  totalShares: string;
                  totalShares24hAgo: string;
                  fees24h: string;
                  swapFee: string;
                  volume24h: string;
                  fees48h: string;
                  volume48h: string;
                  apr: {
                      __typename: 'GqlPoolApr';
                      hasRewardApr: boolean;
                      thirdPartyApr: string;
                      nativeRewardApr: string;
                      swapApr: string;
                      total: string;
                      items: Array<{
                          __typename: 'GqlBalancePoolAprItem';
                          title: string;
                          apr: string;
                          subItems?: Array<{
                              __typename: 'GqlBalancePoolAprSubItem';
                              title: string;
                              apr: string;
                          }> | null;
                      }>;
                  };
              };
              allTokens: Array<{
                  __typename: 'GqlPoolTokenExpanded';
                  id: string;
                  address: string;
                  name: string;
                  symbol: string;
                  decimals: number;
                  isNested: boolean;
                  isPhantomBpt: boolean;
              }>;
              staking?: {
                  __typename: 'GqlPoolStaking';
                  id: string;
                  type: GqlPoolStakingType;
                  address: string;
                  farm?: {
                      __typename: 'GqlPoolStakingMasterChefFarm';
                      id: string;
                      beetsPerBlock: string;
                      rewarders?: Array<{
                          __typename: 'GqlPoolStakingMasterChefFarmRewarder';
                          id: string;
                          address: string;
                          tokenAddress: string;
                          rewardPerSecond: string;
                      }> | null;
                  } | null;
              } | null;
              investConfig: {
                  __typename: 'GqlPoolInvestConfig';
                  singleAssetEnabled: boolean;
                  proportionalEnabled: boolean;
                  options: Array<{
                      __typename: 'GqlPoolInvestOption';
                      poolTokenIndex: number;
                      poolTokenAddress: string;
                      tokenOptions: Array<{
                          __typename: 'GqlPoolToken';
                          id: string;
                          index: number;
                          name: string;
                          symbol: string;
                          balance: string;
                          address: string;
                          priceRate: string;
                          decimals: number;
                          weight?: string | null;
                      }>;
                  }>;
              };
              withdrawConfig: {
                  __typename: 'GqlPoolWithdrawConfig';
                  singleAssetEnabled: boolean;
                  proportionalEnabled: boolean;
                  options: Array<{
                      __typename: 'GqlPoolWithdrawOption';
                      poolTokenIndex: number;
                      poolTokenAddress: string;
                      tokenOptions: Array<{
                          __typename: 'GqlPoolToken';
                          id: string;
                          index: number;
                          name: string;
                          symbol: string;
                          balance: string;
                          address: string;
                          priceRate: string;
                          decimals: number;
                          weight?: string | null;
                      }>;
                  }>;
              };
          };
};

export type GqlPoolTokenFragment = {
    __typename: 'GqlPoolToken';
    id: string;
    index: number;
    name: string;
    symbol: string;
    balance: string;
    address: string;
    priceRate: string;
    decimals: number;
    weight?: string | null;
};

export type GqlPoolTokenLinearFragment = {
    __typename: 'GqlPoolTokenLinear';
    id: string;
    index: number;
    name: string;
    symbol: string;
    balance: string;
    address: string;
    priceRate: string;
    decimals: number;
    weight?: string | null;
    mainTokenBalance: string;
    wrappedTokenBalance: string;
    totalMainTokenBalance: string;
    pool: {
        __typename: 'GqlPoolLinearNested';
        id: string;
        name: string;
        symbol: string;
        address: string;
        owner: string;
        factory?: string | null;
        createTime: number;
        wrappedIndex: number;
        mainIndex: number;
        upperTarget: string;
        lowerTarget: string;
        totalShares: string;
        totalLiquidity: string;
        tokens: Array<{
            __typename: 'GqlPoolToken';
            id: string;
            index: number;
            name: string;
            symbol: string;
            balance: string;
            address: string;
            priceRate: string;
            decimals: number;
            weight?: string | null;
        }>;
    };
};

export type GqlPoolTokenPhantomStableFragment = {
    __typename: 'GqlPoolTokenPhantomStable';
    id: string;
    index: number;
    name: string;
    symbol: string;
    balance: string;
    address: string;
    weight?: string | null;
    priceRate: string;
    decimals: number;
    pool: {
        __typename: 'GqlPoolPhantomStableNested';
        id: string;
        name: string;
        symbol: string;
        address: string;
        owner: string;
        factory?: string | null;
        createTime: number;
        totalShares: string;
        totalLiquidity: string;
        nestingType: GqlPoolNestingType;
        tokens: Array<
            | {
                  __typename: 'GqlPoolToken';
                  id: string;
                  index: number;
                  name: string;
                  symbol: string;
                  balance: string;
                  address: string;
                  priceRate: string;
                  decimals: number;
                  weight?: string | null;
              }
            | {
                  __typename: 'GqlPoolTokenLinear';
                  id: string;
                  index: number;
                  name: string;
                  symbol: string;
                  balance: string;
                  address: string;
                  priceRate: string;
                  decimals: number;
                  weight?: string | null;
                  mainTokenBalance: string;
                  wrappedTokenBalance: string;
                  totalMainTokenBalance: string;
                  pool: {
                      __typename: 'GqlPoolLinearNested';
                      id: string;
                      name: string;
                      symbol: string;
                      address: string;
                      owner: string;
                      factory?: string | null;
                      createTime: number;
                      wrappedIndex: number;
                      mainIndex: number;
                      upperTarget: string;
                      lowerTarget: string;
                      totalShares: string;
                      totalLiquidity: string;
                      tokens: Array<{
                          __typename: 'GqlPoolToken';
                          id: string;
                          index: number;
                          name: string;
                          symbol: string;
                          balance: string;
                          address: string;
                          priceRate: string;
                          decimals: number;
                          weight?: string | null;
                      }>;
                  };
              }
        >;
    };
};

export type GetPoolSwapsQueryVariables = Exact<{
    first?: InputMaybe<Scalars['Int']>;
    skip?: InputMaybe<Scalars['Int']>;
    where?: InputMaybe<GqlPoolSwapFilter>;
}>;

export type GetPoolSwapsQuery = {
    __typename: 'Query';
    swaps: Array<{
        __typename: 'GqlPoolSwap';
        id: string;
        poolId: string;
        timestamp: number;
        tokenAmountIn: string;
        tokenAmountOut: string;
        tokenIn: string;
        tokenOut: string;
        tx: string;
        userAddress: string;
        valueUSD: number;
    }>;
};

export type GetPoolJoinExitsQueryVariables = Exact<{
    first?: InputMaybe<Scalars['Int']>;
    skip?: InputMaybe<Scalars['Int']>;
    poolId: Scalars['String'];
}>;

export type GetPoolJoinExitsQuery = {
    __typename: 'Query';
    joinExits: Array<{
        __typename: 'GqlPoolJoinExit';
        id: string;
        timestamp: number;
        tx: string;
        type: GqlPoolJoinExitType;
        poolId: string;
        valueUSD: string;
        amounts: Array<{ __typename: 'GqlPoolJoinExitAmount'; address: string; amount: string }>;
    }>;
};

export type GetPoolBptPriceChartDataQueryVariables = Exact<{
    address: Scalars['String'];
    range: GqlTokenChartDataRange;
}>;

export type GetPoolBptPriceChartDataQuery = {
    __typename: 'Query';
    prices: Array<{ __typename: 'GqlTokenPriceChartDataItem'; id: string; price: string; timestamp: number }>;
};

export type GetPoolUserJoinExitsQueryVariables = Exact<{
    first?: InputMaybe<Scalars['Int']>;
    skip?: InputMaybe<Scalars['Int']>;
    poolId: Scalars['String'];
}>;

export type GetPoolUserJoinExitsQuery = {
    __typename: 'Query';
    joinExits: Array<{
        __typename: 'GqlPoolJoinExit';
        id: string;
        timestamp: number;
        tx: string;
        type: GqlPoolJoinExitType;
        poolId: string;
        valueUSD: string;
        amounts: Array<{ __typename: 'GqlPoolJoinExitAmount'; address: string; amount: string }>;
    }>;
};

export type GetPoolsQueryVariables = Exact<{
    first?: InputMaybe<Scalars['Int']>;
    skip?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<GqlPoolOrderBy>;
    orderDirection?: InputMaybe<GqlPoolOrderDirection>;
    where?: InputMaybe<GqlPoolFilter>;
    textSearch?: InputMaybe<Scalars['String']>;
}>;

export type GetPoolsQuery = {
    __typename: 'Query';
    count: number;
    poolGetPools: Array<{
        __typename: 'GqlPoolMinimal';
        id: string;
        address: string;
        name: string;
        symbol: string;
        createTime: number;
        dynamicData: {
            __typename: 'GqlPoolDynamicData';
            totalLiquidity: string;
            totalShares: string;
            fees24h: string;
            swapFee: string;
            volume24h: string;
            apr: {
                __typename: 'GqlPoolApr';
                hasRewardApr: boolean;
                thirdPartyApr: string;
                nativeRewardApr: string;
                swapApr: string;
                total: string;
                items: Array<{
                    __typename: 'GqlBalancePoolAprItem';
                    title: string;
                    apr: string;
                    subItems?: Array<{ __typename: 'GqlBalancePoolAprSubItem'; title: string; apr: string }> | null;
                }>;
            };
        };
        allTokens: Array<{
            __typename: 'GqlPoolTokenExpanded';
            id: string;
            address: string;
            isNested: boolean;
            isPhantomBpt: boolean;
            weight?: string | null;
        }>;
        staking?: {
            __typename: 'GqlPoolStaking';
            id: string;
            type: GqlPoolStakingType;
            address: string;
            farm?: {
                __typename: 'GqlPoolStakingMasterChefFarm';
                id: string;
                beetsPerBlock: string;
                rewarders?: Array<{
                    __typename: 'GqlPoolStakingMasterChefFarmRewarder';
                    id: string;
                    address: string;
                    tokenAddress: string;
                    rewardPerSecond: string;
                }> | null;
            } | null;
        } | null;
    }>;
};

export type GetPoolFiltersQueryVariables = Exact<{ [key: string]: never }>;

export type GetPoolFiltersQuery = {
    __typename: 'Query';
    filters: Array<{ __typename: 'GqlPoolFilterDefinition'; id: string; title: string }>;
};

export type GqlPoolMinimalFragment = {
    __typename: 'GqlPoolMinimal';
    id: string;
    address: string;
    name: string;
    symbol: string;
    createTime: number;
    dynamicData: {
        __typename: 'GqlPoolDynamicData';
        totalLiquidity: string;
        totalShares: string;
        fees24h: string;
        swapFee: string;
        volume24h: string;
        apr: {
            __typename: 'GqlPoolApr';
            hasRewardApr: boolean;
            thirdPartyApr: string;
            nativeRewardApr: string;
            swapApr: string;
            total: string;
            items: Array<{
                __typename: 'GqlBalancePoolAprItem';
                title: string;
                apr: string;
                subItems?: Array<{ __typename: 'GqlBalancePoolAprSubItem'; title: string; apr: string }> | null;
            }>;
        };
    };
    allTokens: Array<{
        __typename: 'GqlPoolTokenExpanded';
        id: string;
        address: string;
        isNested: boolean;
        isPhantomBpt: boolean;
        weight?: string | null;
    }>;
    staking?: {
        __typename: 'GqlPoolStaking';
        id: string;
        type: GqlPoolStakingType;
        address: string;
        farm?: {
            __typename: 'GqlPoolStakingMasterChefFarm';
            id: string;
            beetsPerBlock: string;
            rewarders?: Array<{
                __typename: 'GqlPoolStakingMasterChefFarmRewarder';
                id: string;
                address: string;
                tokenAddress: string;
                rewardPerSecond: string;
            }> | null;
        } | null;
    } | null;
};

export type GetTokenRelativePriceChartDataQueryVariables = Exact<{
    tokenIn: Scalars['String'];
    tokenOut: Scalars['String'];
    range: GqlTokenChartDataRange;
}>;

export type GetTokenRelativePriceChartDataQuery = {
    __typename: 'Query';
    prices: Array<{ __typename: 'GqlTokenPriceChartDataItem'; id: string; price: string; timestamp: number }>;
};

export type GetSorSwapsQueryVariables = Exact<{
    tokenIn: Scalars['String'];
    tokenOut: Scalars['String'];
    swapType: GqlSorSwapType;
    swapAmount: Scalars['BigDecimal'];
    swapOptions: GqlSorSwapOptionsInput;
}>;

export type GetSorSwapsQuery = {
    __typename: 'Query';
    swaps: {
        __typename: 'GqlSorGetSwapsResponse';
        tokenIn: string;
        tokenOut: string;
        swapAmount: string;
        tokenAddresses: Array<string>;
        swapType: GqlSorSwapType;
        marketSp: string;
        returnAmount: string;
        returnAmountScaled: string;
        returnAmountFromSwaps?: string | null;
        returnAmountConsideringFees: string;
        swapAmountScaled: string;
        swapAmountForSwaps?: string | null;
        tokenInAmount: string;
        tokenOutAmount: string;
        effectivePrice: string;
        effectivePriceReversed: string;
        priceImpact: string;
        swaps: Array<{
            __typename: 'GqlSorSwap';
            poolId: string;
            amount: string;
            userData: string;
            assetInIndex: number;
            assetOutIndex: number;
        }>;
        routes: Array<{
            __typename: 'GqlSorSwapRoute';
            tokenIn: string;
            tokenOut: string;
            tokenInAmount: string;
            tokenOutAmount: string;
            share: number;
            hops: Array<{
                __typename: 'GqlSorSwapRouteHop';
                poolId: string;
                tokenIn: string;
                tokenOut: string;
                tokenInAmount: string;
                tokenOutAmount: string;
                pool: {
                    __typename: 'GqlPoolMinimal';
                    id: string;
                    name: string;
                    symbol: string;
                    dynamicData: { __typename: 'GqlPoolDynamicData'; totalLiquidity: string };
                    allTokens: Array<{
                        __typename: 'GqlPoolTokenExpanded';
                        address: string;
                        isNested: boolean;
                        isPhantomBpt: boolean;
                    }>;
                };
            }>;
        }>;
    };
};

export type GqlSorGetSwapsResponseFragment = {
    __typename: 'GqlSorGetSwapsResponse';
    tokenIn: string;
    tokenOut: string;
    swapAmount: string;
    tokenAddresses: Array<string>;
    swapType: GqlSorSwapType;
    marketSp: string;
    returnAmount: string;
    returnAmountScaled: string;
    returnAmountFromSwaps?: string | null;
    returnAmountConsideringFees: string;
    swapAmountScaled: string;
    swapAmountForSwaps?: string | null;
    tokenInAmount: string;
    tokenOutAmount: string;
    effectivePrice: string;
    effectivePriceReversed: string;
    priceImpact: string;
    swaps: Array<{
        __typename: 'GqlSorSwap';
        poolId: string;
        amount: string;
        userData: string;
        assetInIndex: number;
        assetOutIndex: number;
    }>;
    routes: Array<{
        __typename: 'GqlSorSwapRoute';
        tokenIn: string;
        tokenOut: string;
        tokenInAmount: string;
        tokenOutAmount: string;
        share: number;
        hops: Array<{
            __typename: 'GqlSorSwapRouteHop';
            poolId: string;
            tokenIn: string;
            tokenOut: string;
            tokenInAmount: string;
            tokenOutAmount: string;
            pool: {
                __typename: 'GqlPoolMinimal';
                id: string;
                name: string;
                symbol: string;
                dynamicData: { __typename: 'GqlPoolDynamicData'; totalLiquidity: string };
                allTokens: Array<{
                    __typename: 'GqlPoolTokenExpanded';
                    address: string;
                    isNested: boolean;
                    isPhantomBpt: boolean;
                }>;
            };
        }>;
    }>;
};

export type GqlSorSwapRouteFragment = {
    __typename: 'GqlSorSwapRoute';
    tokenIn: string;
    tokenOut: string;
    tokenInAmount: string;
    tokenOutAmount: string;
    share: number;
    hops: Array<{
        __typename: 'GqlSorSwapRouteHop';
        poolId: string;
        tokenIn: string;
        tokenOut: string;
        tokenInAmount: string;
        tokenOutAmount: string;
        pool: {
            __typename: 'GqlPoolMinimal';
            id: string;
            name: string;
            symbol: string;
            dynamicData: { __typename: 'GqlPoolDynamicData'; totalLiquidity: string };
            allTokens: Array<{
                __typename: 'GqlPoolTokenExpanded';
                address: string;
                isNested: boolean;
                isPhantomBpt: boolean;
            }>;
        };
    }>;
};

export type GqlSorSwapRouteHopFragment = {
    __typename: 'GqlSorSwapRouteHop';
    poolId: string;
    tokenIn: string;
    tokenOut: string;
    tokenInAmount: string;
    tokenOutAmount: string;
    pool: {
        __typename: 'GqlPoolMinimal';
        id: string;
        name: string;
        symbol: string;
        dynamicData: { __typename: 'GqlPoolDynamicData'; totalLiquidity: string };
        allTokens: Array<{
            __typename: 'GqlPoolTokenExpanded';
            address: string;
            isNested: boolean;
            isPhantomBpt: boolean;
        }>;
    };
};

export type GetTradeSelectedTokenDataQueryVariables = Exact<{
    tokenIn: Scalars['String'];
    tokenOut: Scalars['String'];
}>;

export type GetTradeSelectedTokenDataQuery = {
    __typename: 'Query';
    tokenInData?: {
        __typename: 'GqlTokenData';
        id: string;
        tokenAddress: string;
        description?: string | null;
        discordUrl?: string | null;
        telegramUrl?: string | null;
        twitterUsername?: string | null;
    } | null;
    tokenOutData?: {
        __typename: 'GqlTokenData';
        id: string;
        tokenAddress: string;
        description?: string | null;
        discordUrl?: string | null;
        telegramUrl?: string | null;
        twitterUsername?: string | null;
    } | null;
    tokenInDynamicData?: {
        __typename: 'GqlTokenDynamicData';
        id: string;
        tokenAddress: string;
        ath: number;
        atl: number;
        marketCap?: string | null;
        fdv?: string | null;
        priceChange24h: number;
        priceChangePercent24h: number;
        priceChangePercent7d?: number | null;
        priceChangePercent14d?: number | null;
        priceChangePercent30d?: number | null;
        high24h: number;
        low24h: number;
        updatedAt: string;
    } | null;
    tokenOutDynamicData?: {
        __typename: 'GqlTokenDynamicData';
        id: string;
        tokenAddress: string;
        ath: number;
        atl: number;
        marketCap?: string | null;
        fdv?: string | null;
        priceChange24h: number;
        priceChangePercent24h: number;
        priceChangePercent7d?: number | null;
        priceChangePercent14d?: number | null;
        priceChangePercent30d?: number | null;
        high24h: number;
        low24h: number;
        updatedAt: string;
    } | null;
};

export type GqlTokenDynamicDataFragment = {
    __typename: 'GqlTokenDynamicData';
    id: string;
    tokenAddress: string;
    ath: number;
    atl: number;
    marketCap?: string | null;
    fdv?: string | null;
    priceChange24h: number;
    priceChangePercent24h: number;
    priceChangePercent7d?: number | null;
    priceChangePercent14d?: number | null;
    priceChangePercent30d?: number | null;
    high24h: number;
    low24h: number;
    updatedAt: string;
};

export const GqlPoolCardDataFragmentDoc = gql`
    fragment GqlPoolCardData on GqlPoolMinimal {
        id
        address
        name
        dynamicData {
            totalLiquidity
            totalShares
            apr {
                hasRewardApr
                thirdPartyApr
                nativeRewardApr
                swapApr
                total
                items {
                    title
                    apr
                    subItems {
                        title
                        apr
                    }
                }
            }
        }
        allTokens {
            id
            address
            isNested
            isPhantomBpt
            weight
        }
    }
`;
export const GqlPoolFeaturedPoolGroupFragmentDoc = gql`
    fragment GqlPoolFeaturedPoolGroup on GqlPoolFeaturedPoolGroup {
        id
        icon
        title
        items {
            ... on GqlFeaturePoolGroupItemExternalLink {
                id
                image
                buttonText
                buttonUrl
            }
            ... on GqlPoolMinimal {
                ...GqlPoolCardData
            }
        }
    }
    ${GqlPoolCardDataFragmentDoc}
`;
export const GqlPoolTokenFragmentDoc = gql`
    fragment GqlPoolToken on GqlPoolToken {
        id
        index
        name
        symbol
        balance
        address
        priceRate
        decimals
        weight
    }
`;
export const GqlPoolTokenLinearFragmentDoc = gql`
    fragment GqlPoolTokenLinear on GqlPoolTokenLinear {
        id
        index
        name
        symbol
        balance
        address
        priceRate
        decimals
        weight
        mainTokenBalance
        wrappedTokenBalance
        totalMainTokenBalance
        pool {
            id
            name
            symbol
            address
            owner
            factory
            createTime
            wrappedIndex
            mainIndex
            upperTarget
            lowerTarget
            totalShares
            totalLiquidity
            tokens {
                ... on GqlPoolToken {
                    ...GqlPoolToken
                }
            }
        }
    }
    ${GqlPoolTokenFragmentDoc}
`;
export const GqlPoolTokenPhantomStableFragmentDoc = gql`
    fragment GqlPoolTokenPhantomStable on GqlPoolTokenPhantomStable {
        id
        index
        name
        symbol
        balance
        address
        weight
        priceRate
        decimals
        pool {
            id
            name
            symbol
            address
            owner
            factory
            createTime
            totalShares
            totalLiquidity
            nestingType
            tokens {
                ... on GqlPoolToken {
                    ...GqlPoolToken
                }
                ... on GqlPoolTokenLinear {
                    ...GqlPoolTokenLinear
                }
            }
        }
    }
    ${GqlPoolTokenFragmentDoc}
    ${GqlPoolTokenLinearFragmentDoc}
`;
export const GqlPoolMinimalFragmentDoc = gql`
    fragment GqlPoolMinimal on GqlPoolMinimal {
        id
        address
        name
        symbol
        createTime
        dynamicData {
            totalLiquidity
            totalShares
            fees24h
            swapFee
            volume24h
            apr {
                hasRewardApr
                thirdPartyApr
                nativeRewardApr
                swapApr
                total
                items {
                    title
                    apr
                    subItems {
                        title
                        apr
                    }
                }
            }
        }
        allTokens {
            id
            address
            isNested
            isPhantomBpt
            weight
        }
        staking {
            id
            type
            address
            farm {
                id
                beetsPerBlock
                rewarders {
                    id
                    address
                    tokenAddress
                    rewardPerSecond
                }
            }
        }
    }
`;
export const GqlSorSwapRouteHopFragmentDoc = gql`
    fragment GqlSorSwapRouteHop on GqlSorSwapRouteHop {
        poolId
        pool {
            id
            name
            symbol
            dynamicData {
                totalLiquidity
            }
            allTokens {
                address
                isNested
                isPhantomBpt
            }
        }
        tokenIn
        tokenOut
        tokenInAmount
        tokenOutAmount
    }
`;
export const GqlSorSwapRouteFragmentDoc = gql`
    fragment GqlSorSwapRoute on GqlSorSwapRoute {
        tokenIn
        tokenOut
        tokenInAmount
        tokenOutAmount
        share
        hops {
            ...GqlSorSwapRouteHop
        }
    }
    ${GqlSorSwapRouteHopFragmentDoc}
`;
export const GqlSorGetSwapsResponseFragmentDoc = gql`
    fragment GqlSorGetSwapsResponse on GqlSorGetSwapsResponse {
        tokenIn
        tokenOut
        swapAmount
        tokenAddresses
        swapType
        marketSp
        swaps {
            poolId
            amount
            userData
            assetInIndex
            assetOutIndex
        }
        returnAmount
        returnAmountScaled
        returnAmountFromSwaps
        returnAmountConsideringFees
        swapAmount
        swapAmountScaled
        swapAmountForSwaps
        tokenInAmount
        tokenOutAmount
        effectivePrice
        effectivePriceReversed
        priceImpact
        routes {
            ...GqlSorSwapRoute
        }
    }
    ${GqlSorSwapRouteFragmentDoc}
`;
export const GqlTokenDynamicDataFragmentDoc = gql`
    fragment GqlTokenDynamicData on GqlTokenDynamicData {
        id
        tokenAddress
        ath
        atl
        marketCap
        fdv
        priceChange24h
        priceChangePercent24h
        priceChangePercent7d
        priceChangePercent14d
        priceChangePercent30d
        high24h
        low24h
        updatedAt
    }
`;
export const GetPoolBatchSwapsDocument = gql`
    query GetPoolBatchSwaps($first: Int, $skip: Int, $where: GqlPoolSwapFilter) {
        batchSwaps: poolGetBatchSwaps(first: $first, skip: $skip, where: $where) {
            id
            timestamp
            tokenAmountIn
            tokenAmountOut
            tokenIn
            tokenOut
            tokenInPrice
            tokenOutPrice
            tx
            userAddress
            valueUSD
            swaps {
                id
                timestamp
                tokenAmountIn
                tokenAmountOut
                tokenIn
                tokenOut
                valueUSD
                poolTokens
                poolId
            }
        }
    }
`;

/**
 * __useGetPoolBatchSwapsQuery__
 *
 * To run a query within a React component, call `useGetPoolBatchSwapsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPoolBatchSwapsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPoolBatchSwapsQuery({
 *   variables: {
 *      first: // value for 'first'
 *      skip: // value for 'skip'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useGetPoolBatchSwapsQuery(
    baseOptions?: Apollo.QueryHookOptions<GetPoolBatchSwapsQuery, GetPoolBatchSwapsQueryVariables>,
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery<GetPoolBatchSwapsQuery, GetPoolBatchSwapsQueryVariables>(GetPoolBatchSwapsDocument, options);
}
export function useGetPoolBatchSwapsLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<GetPoolBatchSwapsQuery, GetPoolBatchSwapsQueryVariables>,
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery<GetPoolBatchSwapsQuery, GetPoolBatchSwapsQueryVariables>(
        GetPoolBatchSwapsDocument,
        options,
    );
}
export type GetPoolBatchSwapsQueryHookResult = ReturnType<typeof useGetPoolBatchSwapsQuery>;
export type GetPoolBatchSwapsLazyQueryHookResult = ReturnType<typeof useGetPoolBatchSwapsLazyQuery>;
export type GetPoolBatchSwapsQueryResult = Apollo.QueryResult<GetPoolBatchSwapsQuery, GetPoolBatchSwapsQueryVariables>;
export const GetAppGlobalDataDocument = gql`
    query GetAppGlobalData {
        tokenGetTokens {
            address
            name
            symbol
            decimals
            chainId
            logoURI
            priority
            tradable
        }
        tokenGetCurrentPrices {
            price
            address
        }
        beetsGetFbeetsRatio
        beetsGetProtocolData {
            totalLiquidity
            swapFee24h
            swapVolume24h
            marketCap
            circulatingSupply
            poolCount
            beetsPrice
            fbeetsPrice
        }
    }
`;

/**
 * __useGetAppGlobalDataQuery__
 *
 * To run a query within a React component, call `useGetAppGlobalDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAppGlobalDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAppGlobalDataQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAppGlobalDataQuery(
    baseOptions?: Apollo.QueryHookOptions<GetAppGlobalDataQuery, GetAppGlobalDataQueryVariables>,
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery<GetAppGlobalDataQuery, GetAppGlobalDataQueryVariables>(GetAppGlobalDataDocument, options);
}
export function useGetAppGlobalDataLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<GetAppGlobalDataQuery, GetAppGlobalDataQueryVariables>,
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery<GetAppGlobalDataQuery, GetAppGlobalDataQueryVariables>(
        GetAppGlobalDataDocument,
        options,
    );
}
export type GetAppGlobalDataQueryHookResult = ReturnType<typeof useGetAppGlobalDataQuery>;
export type GetAppGlobalDataLazyQueryHookResult = ReturnType<typeof useGetAppGlobalDataLazyQuery>;
export type GetAppGlobalDataQueryResult = Apollo.QueryResult<GetAppGlobalDataQuery, GetAppGlobalDataQueryVariables>;
export const GetTokensDocument = gql`
    query GetTokens {
        tokens: tokenGetTokens {
            address
            name
            symbol
            decimals
            chainId
            logoURI
            priority
            tradable
        }
    }
`;

/**
 * __useGetTokensQuery__
 *
 * To run a query within a React component, call `useGetTokensQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTokensQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTokensQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetTokensQuery(baseOptions?: Apollo.QueryHookOptions<GetTokensQuery, GetTokensQueryVariables>) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery<GetTokensQuery, GetTokensQueryVariables>(GetTokensDocument, options);
}
export function useGetTokensLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<GetTokensQuery, GetTokensQueryVariables>,
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery<GetTokensQuery, GetTokensQueryVariables>(GetTokensDocument, options);
}
export type GetTokensQueryHookResult = ReturnType<typeof useGetTokensQuery>;
export type GetTokensLazyQueryHookResult = ReturnType<typeof useGetTokensLazyQuery>;
export type GetTokensQueryResult = Apollo.QueryResult<GetTokensQuery, GetTokensQueryVariables>;
export const GetTokenPricesDocument = gql`
    query GetTokenPrices {
        tokenPrices: tokenGetCurrentPrices {
            price
            address
        }
    }
`;

/**
 * __useGetTokenPricesQuery__
 *
 * To run a query within a React component, call `useGetTokenPricesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTokenPricesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTokenPricesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetTokenPricesQuery(
    baseOptions?: Apollo.QueryHookOptions<GetTokenPricesQuery, GetTokenPricesQueryVariables>,
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery<GetTokenPricesQuery, GetTokenPricesQueryVariables>(GetTokenPricesDocument, options);
}
export function useGetTokenPricesLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<GetTokenPricesQuery, GetTokenPricesQueryVariables>,
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery<GetTokenPricesQuery, GetTokenPricesQueryVariables>(GetTokenPricesDocument, options);
}
export type GetTokenPricesQueryHookResult = ReturnType<typeof useGetTokenPricesQuery>;
export type GetTokenPricesLazyQueryHookResult = ReturnType<typeof useGetTokenPricesLazyQuery>;
export type GetTokenPricesQueryResult = Apollo.QueryResult<GetTokenPricesQuery, GetTokenPricesQueryVariables>;
export const GetTokensDynamicDataDocument = gql`
    query GetTokensDynamicData($addresses: [String!]!) {
        dynamicData: tokenGetTokensDynamicData(addresses: $addresses) {
            ath
            atl
            fdv
            high24h
            id
            low24h
            marketCap
            price
            priceChange24h
            priceChangePercent7d
            priceChangePercent14d
            priceChangePercent24h
            priceChangePercent30d
            tokenAddress
            updatedAt
        }
    }
`;

/**
 * __useGetTokensDynamicDataQuery__
 *
 * To run a query within a React component, call `useGetTokensDynamicDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTokensDynamicDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTokensDynamicDataQuery({
 *   variables: {
 *      addresses: // value for 'addresses'
 *   },
 * });
 */
export function useGetTokensDynamicDataQuery(
    baseOptions: Apollo.QueryHookOptions<GetTokensDynamicDataQuery, GetTokensDynamicDataQueryVariables>,
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery<GetTokensDynamicDataQuery, GetTokensDynamicDataQueryVariables>(
        GetTokensDynamicDataDocument,
        options,
    );
}
export function useGetTokensDynamicDataLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<GetTokensDynamicDataQuery, GetTokensDynamicDataQueryVariables>,
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery<GetTokensDynamicDataQuery, GetTokensDynamicDataQueryVariables>(
        GetTokensDynamicDataDocument,
        options,
    );
}
export type GetTokensDynamicDataQueryHookResult = ReturnType<typeof useGetTokensDynamicDataQuery>;
export type GetTokensDynamicDataLazyQueryHookResult = ReturnType<typeof useGetTokensDynamicDataLazyQuery>;
export type GetTokensDynamicDataQueryResult = Apollo.QueryResult<
    GetTokensDynamicDataQuery,
    GetTokensDynamicDataQueryVariables
>;
export const GetFbeetsRatioDocument = gql`
    query GetFbeetsRatio {
        ratio: beetsGetFbeetsRatio
    }
`;

/**
 * __useGetFbeetsRatioQuery__
 *
 * To run a query within a React component, call `useGetFbeetsRatioQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFbeetsRatioQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFbeetsRatioQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetFbeetsRatioQuery(
    baseOptions?: Apollo.QueryHookOptions<GetFbeetsRatioQuery, GetFbeetsRatioQueryVariables>,
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery<GetFbeetsRatioQuery, GetFbeetsRatioQueryVariables>(GetFbeetsRatioDocument, options);
}
export function useGetFbeetsRatioLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<GetFbeetsRatioQuery, GetFbeetsRatioQueryVariables>,
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery<GetFbeetsRatioQuery, GetFbeetsRatioQueryVariables>(GetFbeetsRatioDocument, options);
}
export type GetFbeetsRatioQueryHookResult = ReturnType<typeof useGetFbeetsRatioQuery>;
export type GetFbeetsRatioLazyQueryHookResult = ReturnType<typeof useGetFbeetsRatioLazyQuery>;
export type GetFbeetsRatioQueryResult = Apollo.QueryResult<GetFbeetsRatioQuery, GetFbeetsRatioQueryVariables>;
export const GetProtocolDataDocument = gql`
    query GetProtocolData {
        protocolData: beetsGetProtocolData {
            totalLiquidity
            swapFee24h
            swapVolume24h
            marketCap
            circulatingSupply
            poolCount
            beetsPrice
            fbeetsPrice
        }
    }
`;

/**
 * __useGetProtocolDataQuery__
 *
 * To run a query within a React component, call `useGetProtocolDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProtocolDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProtocolDataQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetProtocolDataQuery(
    baseOptions?: Apollo.QueryHookOptions<GetProtocolDataQuery, GetProtocolDataQueryVariables>,
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery<GetProtocolDataQuery, GetProtocolDataQueryVariables>(GetProtocolDataDocument, options);
}
export function useGetProtocolDataLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<GetProtocolDataQuery, GetProtocolDataQueryVariables>,
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery<GetProtocolDataQuery, GetProtocolDataQueryVariables>(GetProtocolDataDocument, options);
}
export type GetProtocolDataQueryHookResult = ReturnType<typeof useGetProtocolDataQuery>;
export type GetProtocolDataLazyQueryHookResult = ReturnType<typeof useGetProtocolDataLazyQuery>;
export type GetProtocolDataQueryResult = Apollo.QueryResult<GetProtocolDataQuery, GetProtocolDataQueryVariables>;
export const GetUserDataDocument = gql`
    query GetUserData {
        balances: userGetPoolBalances {
            poolId
            tokenAddress
            tokenPrice
            totalBalance
            stakedBalance
            walletBalance
        }
        fbeetsBalance: userGetFbeetsBalance {
            totalBalance
            stakedBalance
            walletBalance
        }
        staking: userGetStaking {
            id
            type
            address
            farm {
                id
                beetsPerBlock
                rewarders {
                    id
                    address
                    tokenAddress
                    rewardPerSecond
                }
            }
        }
    }
`;

/**
 * __useGetUserDataQuery__
 *
 * To run a query within a React component, call `useGetUserDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserDataQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUserDataQuery(
    baseOptions?: Apollo.QueryHookOptions<GetUserDataQuery, GetUserDataQueryVariables>,
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery<GetUserDataQuery, GetUserDataQueryVariables>(GetUserDataDocument, options);
}
export function useGetUserDataLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<GetUserDataQuery, GetUserDataQueryVariables>,
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery<GetUserDataQuery, GetUserDataQueryVariables>(GetUserDataDocument, options);
}
export type GetUserDataQueryHookResult = ReturnType<typeof useGetUserDataQuery>;
export type GetUserDataLazyQueryHookResult = ReturnType<typeof useGetUserDataLazyQuery>;
export type GetUserDataQueryResult = Apollo.QueryResult<GetUserDataQuery, GetUserDataQueryVariables>;
export const GetHomeDataDocument = gql`
    query GetHomeData {
        poolGetFeaturedPoolGroups {
            ...GqlPoolFeaturedPoolGroup
        }
        configGetNewsItems {
            id
            text
            image
            url
            source
            timestamp
        }
    }
    ${GqlPoolFeaturedPoolGroupFragmentDoc}
`;

/**
 * __useGetHomeDataQuery__
 *
 * To run a query within a React component, call `useGetHomeDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetHomeDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetHomeDataQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetHomeDataQuery(
    baseOptions?: Apollo.QueryHookOptions<GetHomeDataQuery, GetHomeDataQueryVariables>,
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery<GetHomeDataQuery, GetHomeDataQueryVariables>(GetHomeDataDocument, options);
}
export function useGetHomeDataLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<GetHomeDataQuery, GetHomeDataQueryVariables>,
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery<GetHomeDataQuery, GetHomeDataQueryVariables>(GetHomeDataDocument, options);
}
export type GetHomeDataQueryHookResult = ReturnType<typeof useGetHomeDataQuery>;
export type GetHomeDataLazyQueryHookResult = ReturnType<typeof useGetHomeDataLazyQuery>;
export type GetHomeDataQueryResult = Apollo.QueryResult<GetHomeDataQuery, GetHomeDataQueryVariables>;
export const GetHomeFeaturedPoolsDocument = gql`
    query GetHomeFeaturedPools {
        featuredPoolGroups: poolGetFeaturedPoolGroups {
            ...GqlPoolFeaturedPoolGroup
        }
    }
    ${GqlPoolFeaturedPoolGroupFragmentDoc}
`;

/**
 * __useGetHomeFeaturedPoolsQuery__
 *
 * To run a query within a React component, call `useGetHomeFeaturedPoolsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetHomeFeaturedPoolsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetHomeFeaturedPoolsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetHomeFeaturedPoolsQuery(
    baseOptions?: Apollo.QueryHookOptions<GetHomeFeaturedPoolsQuery, GetHomeFeaturedPoolsQueryVariables>,
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery<GetHomeFeaturedPoolsQuery, GetHomeFeaturedPoolsQueryVariables>(
        GetHomeFeaturedPoolsDocument,
        options,
    );
}
export function useGetHomeFeaturedPoolsLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<GetHomeFeaturedPoolsQuery, GetHomeFeaturedPoolsQueryVariables>,
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery<GetHomeFeaturedPoolsQuery, GetHomeFeaturedPoolsQueryVariables>(
        GetHomeFeaturedPoolsDocument,
        options,
    );
}
export type GetHomeFeaturedPoolsQueryHookResult = ReturnType<typeof useGetHomeFeaturedPoolsQuery>;
export type GetHomeFeaturedPoolsLazyQueryHookResult = ReturnType<typeof useGetHomeFeaturedPoolsLazyQuery>;
export type GetHomeFeaturedPoolsQueryResult = Apollo.QueryResult<
    GetHomeFeaturedPoolsQuery,
    GetHomeFeaturedPoolsQueryVariables
>;
export const GetHomeNewsItemsDocument = gql`
    query GetHomeNewsItems {
        newsItems: configGetNewsItems {
            id
            text
            image
            url
            source
            timestamp
        }
    }
`;

/**
 * __useGetHomeNewsItemsQuery__
 *
 * To run a query within a React component, call `useGetHomeNewsItemsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetHomeNewsItemsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetHomeNewsItemsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetHomeNewsItemsQuery(
    baseOptions?: Apollo.QueryHookOptions<GetHomeNewsItemsQuery, GetHomeNewsItemsQueryVariables>,
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery<GetHomeNewsItemsQuery, GetHomeNewsItemsQueryVariables>(GetHomeNewsItemsDocument, options);
}
export function useGetHomeNewsItemsLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<GetHomeNewsItemsQuery, GetHomeNewsItemsQueryVariables>,
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery<GetHomeNewsItemsQuery, GetHomeNewsItemsQueryVariables>(
        GetHomeNewsItemsDocument,
        options,
    );
}
export type GetHomeNewsItemsQueryHookResult = ReturnType<typeof useGetHomeNewsItemsQuery>;
export type GetHomeNewsItemsLazyQueryHookResult = ReturnType<typeof useGetHomeNewsItemsLazyQuery>;
export type GetHomeNewsItemsQueryResult = Apollo.QueryResult<GetHomeNewsItemsQuery, GetHomeNewsItemsQueryVariables>;
export const GetPoolDocument = gql`
    query GetPool($id: String!) {
        pool: poolGetPool(id: $id) {
            id
            address
            name
            owner
            decimals
            factory
            symbol
            createTime
            dynamicData {
                poolId
                swapEnabled
                totalLiquidity
                totalLiquidity24hAgo
                totalShares
                totalShares24hAgo
                fees24h
                swapFee
                volume24h
                fees48h
                volume48h
                apr {
                    hasRewardApr
                    thirdPartyApr
                    nativeRewardApr
                    swapApr
                    total
                    items {
                        title
                        apr
                        subItems {
                            title
                            apr
                        }
                    }
                }
            }
            allTokens {
                id
                address
                name
                symbol
                decimals
                isNested
                isPhantomBpt
            }
            staking {
                id
                type
                address
                farm {
                    id
                    beetsPerBlock
                    rewarders {
                        id
                        address
                        tokenAddress
                        rewardPerSecond
                    }
                }
            }
            investConfig {
                singleAssetEnabled
                proportionalEnabled
                options {
                    poolTokenIndex
                    poolTokenAddress
                    tokenOptions {
                        ... on GqlPoolToken {
                            ...GqlPoolToken
                        }
                    }
                }
            }
            withdrawConfig {
                singleAssetEnabled
                proportionalEnabled
                options {
                    poolTokenIndex
                    poolTokenAddress
                    tokenOptions {
                        ... on GqlPoolToken {
                            ...GqlPoolToken
                        }
                    }
                }
            }
            ... on GqlPoolWeighted {
                nestingType
                tokens {
                    ... on GqlPoolToken {
                        ...GqlPoolToken
                    }
                    ... on GqlPoolTokenLinear {
                        ...GqlPoolTokenLinear
                    }
                    ... on GqlPoolTokenPhantomStable {
                        ...GqlPoolTokenPhantomStable
                    }
                }
            }
            ... on GqlPoolStable {
                amp
                tokens {
                    ... on GqlPoolToken {
                        ...GqlPoolToken
                    }
                }
            }
            ... on GqlPoolElement {
                unitSeconds
                principalToken
                baseToken
                tokens {
                    ... on GqlPoolToken {
                        ...GqlPoolToken
                    }
                }
            }
            ... on GqlPoolPhantomStable {
                amp
                nestingType
                tokens {
                    ... on GqlPoolToken {
                        ...GqlPoolToken
                    }
                    ... on GqlPoolTokenLinear {
                        ...GqlPoolTokenLinear
                    }
                    ... on GqlPoolTokenPhantomStable {
                        ...GqlPoolTokenPhantomStable
                    }
                }
            }
            ... on GqlPoolLinear {
                mainIndex
                wrappedIndex
                lowerTarget
                upperTarget
                tokens {
                    ... on GqlPoolToken {
                        ...GqlPoolToken
                    }
                }
            }
            ... on GqlPoolLiquidityBootstrapping {
                name
                nestingType
                tokens {
                    ... on GqlPoolToken {
                        ...GqlPoolToken
                    }
                    ... on GqlPoolTokenLinear {
                        ...GqlPoolTokenLinear
                    }
                    ... on GqlPoolTokenPhantomStable {
                        ...GqlPoolTokenPhantomStable
                    }
                }
            }
        }
    }
    ${GqlPoolTokenFragmentDoc}
    ${GqlPoolTokenLinearFragmentDoc}
    ${GqlPoolTokenPhantomStableFragmentDoc}
`;

/**
 * __useGetPoolQuery__
 *
 * To run a query within a React component, call `useGetPoolQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPoolQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPoolQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetPoolQuery(baseOptions: Apollo.QueryHookOptions<GetPoolQuery, GetPoolQueryVariables>) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery<GetPoolQuery, GetPoolQueryVariables>(GetPoolDocument, options);
}
export function useGetPoolLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPoolQuery, GetPoolQueryVariables>) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery<GetPoolQuery, GetPoolQueryVariables>(GetPoolDocument, options);
}
export type GetPoolQueryHookResult = ReturnType<typeof useGetPoolQuery>;
export type GetPoolLazyQueryHookResult = ReturnType<typeof useGetPoolLazyQuery>;
export type GetPoolQueryResult = Apollo.QueryResult<GetPoolQuery, GetPoolQueryVariables>;
export const GetPoolSwapsDocument = gql`
    query GetPoolSwaps($first: Int, $skip: Int, $where: GqlPoolSwapFilter) {
        swaps: poolGetSwaps(first: $first, skip: $skip, where: $where) {
            id
            poolId
            timestamp
            tokenAmountIn
            tokenAmountOut
            tokenIn
            tokenOut
            tx
            userAddress
            valueUSD
        }
    }
`;

/**
 * __useGetPoolSwapsQuery__
 *
 * To run a query within a React component, call `useGetPoolSwapsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPoolSwapsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPoolSwapsQuery({
 *   variables: {
 *      first: // value for 'first'
 *      skip: // value for 'skip'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useGetPoolSwapsQuery(
    baseOptions?: Apollo.QueryHookOptions<GetPoolSwapsQuery, GetPoolSwapsQueryVariables>,
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery<GetPoolSwapsQuery, GetPoolSwapsQueryVariables>(GetPoolSwapsDocument, options);
}
export function useGetPoolSwapsLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<GetPoolSwapsQuery, GetPoolSwapsQueryVariables>,
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery<GetPoolSwapsQuery, GetPoolSwapsQueryVariables>(GetPoolSwapsDocument, options);
}
export type GetPoolSwapsQueryHookResult = ReturnType<typeof useGetPoolSwapsQuery>;
export type GetPoolSwapsLazyQueryHookResult = ReturnType<typeof useGetPoolSwapsLazyQuery>;
export type GetPoolSwapsQueryResult = Apollo.QueryResult<GetPoolSwapsQuery, GetPoolSwapsQueryVariables>;
export const GetPoolJoinExitsDocument = gql`
    query GetPoolJoinExits($first: Int, $skip: Int, $poolId: String!) {
        joinExits: poolGetJoinExits(first: $first, skip: $skip, where: { poolIdIn: [$poolId] }) {
            id
            timestamp
            tx
            type
            poolId
            valueUSD
            amounts {
                address
                amount
            }
        }
    }
`;

/**
 * __useGetPoolJoinExitsQuery__
 *
 * To run a query within a React component, call `useGetPoolJoinExitsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPoolJoinExitsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPoolJoinExitsQuery({
 *   variables: {
 *      first: // value for 'first'
 *      skip: // value for 'skip'
 *      poolId: // value for 'poolId'
 *   },
 * });
 */
export function useGetPoolJoinExitsQuery(
    baseOptions: Apollo.QueryHookOptions<GetPoolJoinExitsQuery, GetPoolJoinExitsQueryVariables>,
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery<GetPoolJoinExitsQuery, GetPoolJoinExitsQueryVariables>(GetPoolJoinExitsDocument, options);
}
export function useGetPoolJoinExitsLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<GetPoolJoinExitsQuery, GetPoolJoinExitsQueryVariables>,
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery<GetPoolJoinExitsQuery, GetPoolJoinExitsQueryVariables>(
        GetPoolJoinExitsDocument,
        options,
    );
}
export type GetPoolJoinExitsQueryHookResult = ReturnType<typeof useGetPoolJoinExitsQuery>;
export type GetPoolJoinExitsLazyQueryHookResult = ReturnType<typeof useGetPoolJoinExitsLazyQuery>;
export type GetPoolJoinExitsQueryResult = Apollo.QueryResult<GetPoolJoinExitsQuery, GetPoolJoinExitsQueryVariables>;
export const GetPoolBptPriceChartDataDocument = gql`
    query GetPoolBptPriceChartData($address: String!, $range: GqlTokenChartDataRange!) {
        prices: tokenGetPriceChartData(address: $address, range: $range) {
            id
            price
            timestamp
        }
    }
`;

/**
 * __useGetPoolBptPriceChartDataQuery__
 *
 * To run a query within a React component, call `useGetPoolBptPriceChartDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPoolBptPriceChartDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPoolBptPriceChartDataQuery({
 *   variables: {
 *      address: // value for 'address'
 *      range: // value for 'range'
 *   },
 * });
 */
export function useGetPoolBptPriceChartDataQuery(
    baseOptions: Apollo.QueryHookOptions<GetPoolBptPriceChartDataQuery, GetPoolBptPriceChartDataQueryVariables>,
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery<GetPoolBptPriceChartDataQuery, GetPoolBptPriceChartDataQueryVariables>(
        GetPoolBptPriceChartDataDocument,
        options,
    );
}
export function useGetPoolBptPriceChartDataLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<GetPoolBptPriceChartDataQuery, GetPoolBptPriceChartDataQueryVariables>,
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery<GetPoolBptPriceChartDataQuery, GetPoolBptPriceChartDataQueryVariables>(
        GetPoolBptPriceChartDataDocument,
        options,
    );
}
export type GetPoolBptPriceChartDataQueryHookResult = ReturnType<typeof useGetPoolBptPriceChartDataQuery>;
export type GetPoolBptPriceChartDataLazyQueryHookResult = ReturnType<typeof useGetPoolBptPriceChartDataLazyQuery>;
export type GetPoolBptPriceChartDataQueryResult = Apollo.QueryResult<
    GetPoolBptPriceChartDataQuery,
    GetPoolBptPriceChartDataQueryVariables
>;
export const GetPoolUserJoinExitsDocument = gql`
    query GetPoolUserJoinExits($first: Int, $skip: Int, $poolId: String!) {
        joinExits: userGetPoolJoinExits(poolId: $poolId, first: $first, skip: $skip) {
            id
            timestamp
            tx
            type
            poolId
            valueUSD
            amounts {
                address
                amount
            }
        }
    }
`;

/**
 * __useGetPoolUserJoinExitsQuery__
 *
 * To run a query within a React component, call `useGetPoolUserJoinExitsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPoolUserJoinExitsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPoolUserJoinExitsQuery({
 *   variables: {
 *      first: // value for 'first'
 *      skip: // value for 'skip'
 *      poolId: // value for 'poolId'
 *   },
 * });
 */
export function useGetPoolUserJoinExitsQuery(
    baseOptions: Apollo.QueryHookOptions<GetPoolUserJoinExitsQuery, GetPoolUserJoinExitsQueryVariables>,
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery<GetPoolUserJoinExitsQuery, GetPoolUserJoinExitsQueryVariables>(
        GetPoolUserJoinExitsDocument,
        options,
    );
}
export function useGetPoolUserJoinExitsLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<GetPoolUserJoinExitsQuery, GetPoolUserJoinExitsQueryVariables>,
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery<GetPoolUserJoinExitsQuery, GetPoolUserJoinExitsQueryVariables>(
        GetPoolUserJoinExitsDocument,
        options,
    );
}
export type GetPoolUserJoinExitsQueryHookResult = ReturnType<typeof useGetPoolUserJoinExitsQuery>;
export type GetPoolUserJoinExitsLazyQueryHookResult = ReturnType<typeof useGetPoolUserJoinExitsLazyQuery>;
export type GetPoolUserJoinExitsQueryResult = Apollo.QueryResult<
    GetPoolUserJoinExitsQuery,
    GetPoolUserJoinExitsQueryVariables
>;
export const GetPoolsDocument = gql`
    query GetPools(
        $first: Int
        $skip: Int
        $orderBy: GqlPoolOrderBy
        $orderDirection: GqlPoolOrderDirection
        $where: GqlPoolFilter
        $textSearch: String
    ) {
        poolGetPools(
            first: $first
            skip: $skip
            orderBy: $orderBy
            orderDirection: $orderDirection
            where: $where
            textSearch: $textSearch
        ) {
            ...GqlPoolMinimal
        }
        count: poolGetPoolsCount(
            first: $first
            skip: $skip
            orderBy: $orderBy
            orderDirection: $orderDirection
            where: $where
            textSearch: $textSearch
        )
    }
    ${GqlPoolMinimalFragmentDoc}
`;

/**
 * __useGetPoolsQuery__
 *
 * To run a query within a React component, call `useGetPoolsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPoolsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPoolsQuery({
 *   variables: {
 *      first: // value for 'first'
 *      skip: // value for 'skip'
 *      orderBy: // value for 'orderBy'
 *      orderDirection: // value for 'orderDirection'
 *      where: // value for 'where'
 *      textSearch: // value for 'textSearch'
 *   },
 * });
 */
export function useGetPoolsQuery(baseOptions?: Apollo.QueryHookOptions<GetPoolsQuery, GetPoolsQueryVariables>) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery<GetPoolsQuery, GetPoolsQueryVariables>(GetPoolsDocument, options);
}
export function useGetPoolsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPoolsQuery, GetPoolsQueryVariables>) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery<GetPoolsQuery, GetPoolsQueryVariables>(GetPoolsDocument, options);
}
export type GetPoolsQueryHookResult = ReturnType<typeof useGetPoolsQuery>;
export type GetPoolsLazyQueryHookResult = ReturnType<typeof useGetPoolsLazyQuery>;
export type GetPoolsQueryResult = Apollo.QueryResult<GetPoolsQuery, GetPoolsQueryVariables>;
export const GetPoolFiltersDocument = gql`
    query GetPoolFilters {
        filters: poolGetPoolFilters {
            id
            title
        }
    }
`;

/**
 * __useGetPoolFiltersQuery__
 *
 * To run a query within a React component, call `useGetPoolFiltersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPoolFiltersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPoolFiltersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPoolFiltersQuery(
    baseOptions?: Apollo.QueryHookOptions<GetPoolFiltersQuery, GetPoolFiltersQueryVariables>,
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery<GetPoolFiltersQuery, GetPoolFiltersQueryVariables>(GetPoolFiltersDocument, options);
}
export function useGetPoolFiltersLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<GetPoolFiltersQuery, GetPoolFiltersQueryVariables>,
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery<GetPoolFiltersQuery, GetPoolFiltersQueryVariables>(GetPoolFiltersDocument, options);
}
export type GetPoolFiltersQueryHookResult = ReturnType<typeof useGetPoolFiltersQuery>;
export type GetPoolFiltersLazyQueryHookResult = ReturnType<typeof useGetPoolFiltersLazyQuery>;
export type GetPoolFiltersQueryResult = Apollo.QueryResult<GetPoolFiltersQuery, GetPoolFiltersQueryVariables>;
export const GetTokenRelativePriceChartDataDocument = gql`
    query GetTokenRelativePriceChartData($tokenIn: String!, $tokenOut: String!, $range: GqlTokenChartDataRange!) {
        prices: tokenGetRelativePriceChartData(tokenIn: $tokenIn, tokenOut: $tokenOut, range: $range) {
            id
            price
            timestamp
        }
    }
`;

/**
 * __useGetTokenRelativePriceChartDataQuery__
 *
 * To run a query within a React component, call `useGetTokenRelativePriceChartDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTokenRelativePriceChartDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTokenRelativePriceChartDataQuery({
 *   variables: {
 *      tokenIn: // value for 'tokenIn'
 *      tokenOut: // value for 'tokenOut'
 *      range: // value for 'range'
 *   },
 * });
 */
export function useGetTokenRelativePriceChartDataQuery(
    baseOptions: Apollo.QueryHookOptions<
        GetTokenRelativePriceChartDataQuery,
        GetTokenRelativePriceChartDataQueryVariables
    >,
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery<GetTokenRelativePriceChartDataQuery, GetTokenRelativePriceChartDataQueryVariables>(
        GetTokenRelativePriceChartDataDocument,
        options,
    );
}
export function useGetTokenRelativePriceChartDataLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<
        GetTokenRelativePriceChartDataQuery,
        GetTokenRelativePriceChartDataQueryVariables
    >,
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery<GetTokenRelativePriceChartDataQuery, GetTokenRelativePriceChartDataQueryVariables>(
        GetTokenRelativePriceChartDataDocument,
        options,
    );
}
export type GetTokenRelativePriceChartDataQueryHookResult = ReturnType<typeof useGetTokenRelativePriceChartDataQuery>;
export type GetTokenRelativePriceChartDataLazyQueryHookResult = ReturnType<
    typeof useGetTokenRelativePriceChartDataLazyQuery
>;
export type GetTokenRelativePriceChartDataQueryResult = Apollo.QueryResult<
    GetTokenRelativePriceChartDataQuery,
    GetTokenRelativePriceChartDataQueryVariables
>;
export const GetSorSwapsDocument = gql`
    query GetSorSwaps(
        $tokenIn: String!
        $tokenOut: String!
        $swapType: GqlSorSwapType!
        $swapAmount: BigDecimal!
        $swapOptions: GqlSorSwapOptionsInput!
    ) {
        swaps: sorGetSwaps(
            tokenIn: $tokenIn
            tokenOut: $tokenOut
            swapType: $swapType
            swapAmount: $swapAmount
            swapOptions: $swapOptions
        ) {
            ...GqlSorGetSwapsResponse
        }
    }
    ${GqlSorGetSwapsResponseFragmentDoc}
`;

/**
 * __useGetSorSwapsQuery__
 *
 * To run a query within a React component, call `useGetSorSwapsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSorSwapsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSorSwapsQuery({
 *   variables: {
 *      tokenIn: // value for 'tokenIn'
 *      tokenOut: // value for 'tokenOut'
 *      swapType: // value for 'swapType'
 *      swapAmount: // value for 'swapAmount'
 *      swapOptions: // value for 'swapOptions'
 *   },
 * });
 */
export function useGetSorSwapsQuery(baseOptions: Apollo.QueryHookOptions<GetSorSwapsQuery, GetSorSwapsQueryVariables>) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery<GetSorSwapsQuery, GetSorSwapsQueryVariables>(GetSorSwapsDocument, options);
}
export function useGetSorSwapsLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<GetSorSwapsQuery, GetSorSwapsQueryVariables>,
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery<GetSorSwapsQuery, GetSorSwapsQueryVariables>(GetSorSwapsDocument, options);
}
export type GetSorSwapsQueryHookResult = ReturnType<typeof useGetSorSwapsQuery>;
export type GetSorSwapsLazyQueryHookResult = ReturnType<typeof useGetSorSwapsLazyQuery>;
export type GetSorSwapsQueryResult = Apollo.QueryResult<GetSorSwapsQuery, GetSorSwapsQueryVariables>;
export const GetTradeSelectedTokenDataDocument = gql`
    query GetTradeSelectedTokenData($tokenIn: String!, $tokenOut: String!) {
        tokenInData: tokenGetTokenData(address: $tokenIn) {
            id
            tokenAddress
            description
            discordUrl
            telegramUrl
            twitterUsername
        }
        tokenOutData: tokenGetTokenData(address: $tokenOut) {
            id
            tokenAddress
            description
            discordUrl
            telegramUrl
            twitterUsername
        }
        tokenInDynamicData: tokenGetTokenDynamicData(address: $tokenIn) {
            ...GqlTokenDynamicData
        }
        tokenOutDynamicData: tokenGetTokenDynamicData(address: $tokenOut) {
            ...GqlTokenDynamicData
        }
    }
    ${GqlTokenDynamicDataFragmentDoc}
`;

/**
 * __useGetTradeSelectedTokenDataQuery__
 *
 * To run a query within a React component, call `useGetTradeSelectedTokenDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTradeSelectedTokenDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTradeSelectedTokenDataQuery({
 *   variables: {
 *      tokenIn: // value for 'tokenIn'
 *      tokenOut: // value for 'tokenOut'
 *   },
 * });
 */
export function useGetTradeSelectedTokenDataQuery(
    baseOptions: Apollo.QueryHookOptions<GetTradeSelectedTokenDataQuery, GetTradeSelectedTokenDataQueryVariables>,
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery<GetTradeSelectedTokenDataQuery, GetTradeSelectedTokenDataQueryVariables>(
        GetTradeSelectedTokenDataDocument,
        options,
    );
}
export function useGetTradeSelectedTokenDataLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<GetTradeSelectedTokenDataQuery, GetTradeSelectedTokenDataQueryVariables>,
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery<GetTradeSelectedTokenDataQuery, GetTradeSelectedTokenDataQueryVariables>(
        GetTradeSelectedTokenDataDocument,
        options,
    );
}
export type GetTradeSelectedTokenDataQueryHookResult = ReturnType<typeof useGetTradeSelectedTokenDataQuery>;
export type GetTradeSelectedTokenDataLazyQueryHookResult = ReturnType<typeof useGetTradeSelectedTokenDataLazyQuery>;
export type GetTradeSelectedTokenDataQueryResult = Apollo.QueryResult<
    GetTradeSelectedTokenDataQuery,
    GetTradeSelectedTokenDataQueryVariables
>;
