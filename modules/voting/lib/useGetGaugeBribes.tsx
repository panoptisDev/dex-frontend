import { useEffect } from 'react';
import { useGetCurrentAndNextEpochBribesQuery } from '~/apollo/generated/graphql-codegen-generated';

export function useGetGaugeBribes() {
  const { data, error, loading } = useGetCurrentAndNextEpochBribesQuery({
    pollInterval: 30000,
    notifyOnNetworkStatusChange: true,
  });

  useEffect(() => {
    if (error) {
      console.log(Error);
    }
  }, [error]);

  function getGaugeBribes(gauge: string) {
    return (
      (data?.getCurrentAndNextEpochBribes || []).find((gb) => gb?.gauge === gauge) || {
        gauge,
        currentEpochBribes: [],
        nextEpochBribes: [],
      }
    );
  }

  return {
    gaugeBribes: data?.getCurrentAndNextEpochBribes || [],
    loading,

    getGaugeBribes,
  };
}
