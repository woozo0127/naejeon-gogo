import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_app/members')({
  component: () => <div style={{ color: '#F0E6D2', padding: 40 }}>사용자 페이지 (구현 예정)</div>,
});
