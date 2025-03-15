import { DashboardHeader } from '@/components/template';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/orders/')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <DashboardHeader />
      <div className="p-4">hola</div>
    </>
  );
}
