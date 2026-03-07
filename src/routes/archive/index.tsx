// @ts-nocheck
import { createFileRoute } from '@tanstack/react-router';
import { membersQueryOptions } from '#/client/domains/member';
import { MatchmakingPage } from '#/client/_archive/pages/matchmaking/matchmaking-page';

export const Route = createFileRoute('/archive/')({
  loader: ({ context: { queryClient } }) => queryClient.ensureQueryData(membersQueryOptions),
  component: MatchmakingPage,
});
