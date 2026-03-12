import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createMember } from '#/server/member/member.controller';
import type { MemberInput } from './model';
import { MEMBERS_QUERY_KEY } from './use-members';

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
