import { createFileRoute } from '@tanstack/react-router';
import { MatchmakingPage } from '#/client/_archive/pages/matchmaking/matchmaking-page';
import { membersQueryOptions } from '#/client/modules/member';

export const Route = createFileRoute('/archive/')({
  loader: ({ context: { queryClient } }) => queryClient.ensureQueryData(membersQueryOptions),
  component: MatchmakingPage,
});
