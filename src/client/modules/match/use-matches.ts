import { queryOptions, useQuery } from '@tanstack/react-query';
import { getMatches } from '#/server/match/match.controller';
import type { Match } from './model';

export const MATCHES_QUERY_KEY = ['matches'] as const;

export const matchesQueryOptions = queryOptions({
  queryKey: MATCHES_QUERY_KEY,
  queryFn: () => getMatches(),
});

export function useMatches(): { data: Match[]; isLoading: boolean } {
  const { data, isLoading } = useQuery(matchesQueryOptions);
  return { data: data ?? [], isLoading };
}
