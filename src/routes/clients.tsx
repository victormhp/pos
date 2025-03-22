import * as React from 'react';
import { ClientTable, ClientForm, clientsQueryOptions } from '@/components/clients';
import { SiteHeader } from '@/components/template';
import { InputSearch } from '@/components/ui';
import { debounce } from '@/lib/utils';
import { useSuspenseQuery } from '@tanstack/react-query';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/clients')({
  loader: ({ context: { queryClient } }) => {
    queryClient.ensureQueryData(clientsQueryOptions);
  },
  component: RouteComponent,
});

function RouteComponent() {
  const clientsQuery = useSuspenseQuery(clientsQueryOptions);
  const clients = clientsQuery.data;

  const [searchFilter, setSearchFilter] = React.useState('');

  const searchClients = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    setSearchFilter(target.value);
  };
  const debounceSearchClients = debounce(searchClients);

  const filteredClients = React.useMemo(() => {
    const parsedSearch = searchFilter.trim().toLowerCase();

    const filtered = clients.filter(({ name }) => {
      const parsedName = name.toLowerCase();
      return parsedName.includes(parsedSearch);
    });
    return filtered;
  }, [clients, searchFilter]);

  return (
    <>
      <SiteHeader title="Clientes" />
      <div className="h-full space-y-8 p-4">
        <div className="grid grid-cols-[1fr_auto] items-center gap-4">
          <InputSearch placeholder="Buscar cliente..." onChange={debounceSearchClients} />
          <ClientForm />
        </div>
        <ClientTable clients={filteredClients} />
      </div>
    </>
  );
}
