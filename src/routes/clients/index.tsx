import { ClientsTable } from '@/components/clients';
import { DashboardHeader } from '@/components/template';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/clients/')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <DashboardHeader />
      <div className="p-4">
        <ClientsTable />
      </div>
    </>
  );
}
