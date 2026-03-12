import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { MemberInput } from '#/client/domains/member/model';
import { MEMBERS_QUERY_KEY } from '#/client/domains/member/use-members';
import { updateMember } from '#/server/member/member.controller';

export function useUpdateMember() {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (data: { id: string; updates: Partial<MemberInput> & { mmr?: number } }) =>
      updateMember({ data }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: MEMBERS_QUERY_KEY }),
  });
  return {
    execute: (data: { id: string; updates: Partial<MemberInput> & { mmr?: number } }) =>
      mutation.mutateAsync(data),
    isPending: mutation.isPending,
  };
}
