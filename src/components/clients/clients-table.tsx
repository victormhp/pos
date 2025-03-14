import * as React from 'react';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { DataTable, InputSearch } from '@/components/ui';
import { clientColumns } from './clients.model';
import { getClients } from './clients.handlers';

export function ClientsTable() {
  const [searchFilter, setSearchFilter] = React.useState('');

  const { data: clients } = useQuery({
    queryKey: ['clients'],
    queryFn: getClients,
    placeholderData: keepPreviousData,
  });

  const searchMaterials = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    setSearchFilter(target.value);
  };

  const filteredMaterials = React.useMemo(() => {
    const filtered = clients?.filter(({ name }) => {
      const parsedName = name.toLowerCase();
      const parsedSearch = searchFilter.trim().toLowerCase();
      return parsedName.includes(parsedSearch);
    });
    return filtered;
  }, [clients, searchFilter]);

  return (
    <section className="space-y-8">
      <InputSearch placeholder="Buscar cliente..." onChange={searchMaterials} />
      <DataTable columns={clientColumns} data={filteredMaterials ?? []} />
    </section>
  );
}
