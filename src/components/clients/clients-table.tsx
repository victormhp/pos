import * as React from 'react';
import { Button, DataTable, InputSearch } from '@/components/ui';
import { debounce } from '@/lib/utils';
import { clientColumns } from './clients.model';
import { getClients } from './clients.handlers';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { Link } from '@tanstack/react-router';
import { Plus } from 'lucide-react';

export function ClientsTable() {
  const [searchFilter, setSearchFilter] = React.useState('');

  const { data: clients } = useQuery({
    queryKey: ['clients'],
    queryFn: getClients,
    placeholderData: keepPreviousData,
  });

  const searchClients = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    setSearchFilter(target.value);
  };

  const debounceSearchClients = debounce(searchClients);

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
      <div className="flex items-center justify-between gap-4">
        <InputSearch placeholder="Buscar cliente..." onChange={debounceSearchClients} />
        <Button asChild size="search">
          <Link to="/">
            <Plus className="size-5" />
          </Link>
        </Button>
      </div>
      <DataTable columns={clientColumns} data={filteredMaterials ?? []} />
    </section>
  );
}
