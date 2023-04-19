import { HStack, TabList, Tabs } from '@chakra-ui/react';
import { usePoolList } from '~/modules/pools/usePoolList';
import BeetsTab from '~/components/tabs/BeetsTab';
import { useUserAccount } from '~/lib/user/useUserAccount';
import { GqlPoolFilterCategory } from '~/apollo/generated/graphql-codegen-generated';
import { useState } from 'react';

type PoolOptions = 'incentivized' | 'community' | 'my-investments';

export function PoolListTabs() {
  const [selectedTab, setSelectedTab] = useState<PoolOptions>('incentivized');

  const { isConnected } = useUserAccount();
  const {
    state,
    refetch: refreshPoolList,
    setShowMyInvestments,
    showMyInvestments,
  } = usePoolList();

  const TABS = [{ id: 'incentivized' }, { id: 'community' }, { id: 'my-investments' }];

  const handleTabChanged = (index: number) => {
    const tab = TABS[index];
    let categoryIn: GqlPoolFilterCategory[];

    if (tab.id === 'community') {
      categoryIn = ['COMMUNITY'];
      setSelectedTab('community');
    } else if (tab.id === 'incentivized') {
      categoryIn = ['INCENTIVIZED'];
      setSelectedTab('incentivized');
    } else {
      categoryIn = null;
      setSelectedTab('my-investments');
    }

    if (categoryIn) {
      setShowMyInvestments(false);
      refreshPoolList({
        ...state,
        skip: 0,
        first: 20,
        where: {
          ...state.where,
          categoryIn,
          // categoryNotIn,
          idIn: undefined,
        },
      });
    } else {
      if (!showMyInvestments) {
        setShowMyInvestments(true);
        setSelectedTab('my-investments');
      }
    }
  };

  return (
    <Tabs variant="soft-rounded" display="flex" onChange={handleTabChanged}>
      <TabList>
        <HStack spacing="2">
          <BeetsTab isSelected={selectedTab === 'incentivized'} key="incentivized">
            Incentivized pools
          </BeetsTab>
          <BeetsTab isSelected={selectedTab === 'community'} key="community">
            Community pools
          </BeetsTab>
          {isConnected ? (
            <BeetsTab isSelected={selectedTab === 'my-investments'} key="my-investments">
              My investments
            </BeetsTab>
          ) : null}
        </HStack>
      </TabList>
    </Tabs>
  );
}
