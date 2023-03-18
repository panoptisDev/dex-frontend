import { useEffect, useState } from 'react';
import {
  LiquidityGauge,
  useGetLiquidityGaugesQuery,
} from '~/apollo/generated/graphql-codegen-generated';
import { CURRENT_EPOCH } from '~/lib/util/epoch-utils';

export function useGetGaugesQuery() {
  const [gauges, setGauges] = useState<LiquidityGauge[]>([]);

  const {
    data,
    loading: isLoading,
    error,
    refetch: refetchGauges,
  } = useGetLiquidityGaugesQuery({
    pollInterval: 15000,
    variables: {
      epoch: CURRENT_EPOCH,
    },
  });

  useEffect(() => {
    if (error) {
      console.log(error);
    }
  }, [error]);

  useEffect(() => {
    if (!isLoading) {
      setGauges(data?.getLiquidityGauges as LiquidityGauge[]);
    }
  }, [isLoading]);

  return {
    gauges,
    isLoading,
    refetchGauges,
  };
}
