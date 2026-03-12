import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { MemberInput } from '#/client/domains/member/model';
import { MEMBERS_QUERY_KEY } from '#/client/domains/member/use-members';
import { createMember } from '#/server/member/member.controller';

export function useCreateMember() {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (input: MemberInput) => createMember({ data: input }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: MEMBERS_QUERY_KEY }),
  });
  return {
    execute: (input: MemberInput) => mutation.mutateAsync(input),
    isPending: mutation.isPending,
  };
}
