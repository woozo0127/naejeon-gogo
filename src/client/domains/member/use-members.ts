import { queryOptions, useQuery } from '@tanstack/react-query';
import type { Member } from '#/client/domains/member/model';
import { getMembers } from '#/server/member/member.controller';

export const MEMBERS_QUERY_KEY = ['members'] as const;

export const membersQueryOptions = queryOptions({
  queryKey: MEMBERS_QUERY_KEY,
  queryFn: () => getMembers(),
});

export function useMembers(): { data: Member[]; isLoading: boolean } {
  const { data, isLoading } = useQuery(membersQueryOptions);
  return { data: data ?? [], isLoading };
}
