import { ClientsTable } from '@/components/clients';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/clients')({
  component: RouteComponent,
});

function RouteComponent() {
  return <ClientsTable />;
}
