import { clientColumns, type Client } from './';
import { DataTable } from '@/components/ui';

interface ClientTableProps {
  clients: Client[];
}

export function ClientTable({ clients }: ClientTableProps) {
  return <DataTable columns={clientColumns} data={clients} />;
}
