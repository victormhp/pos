import { ClientsTable } from '@/components/clients';
import { SiteHeader } from '@/components/template';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/clients/')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <SiteHeader title='Clientes' />
      <div className="p-4">
        <ClientsTable />
      </div>
    </>
  );
}
