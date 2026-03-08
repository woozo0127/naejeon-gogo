import { createFileRoute } from '@tanstack/react-router';
import { MembersPage } from '#/client/pages/members';

export const Route = createFileRoute('/_app/members')({
  component: MembersPage,
});
