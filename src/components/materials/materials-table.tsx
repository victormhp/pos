import * as React from 'react';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { materialColumns } from './materials.model';
import { getMaterials, getMaterialCategories, getMaterialsByCategory } from './materials.handlers';
import { DataTable } from '@/components/ui/data-table';
import { Button, InputSearch } from '@/components/ui';
import { Separator } from '@radix-ui/react-separator';

export function MaterialsTable() {
  const [category, setCategory] = React.useState<string | null>(null);
  const [searchFilter, setSearchFilter] = React.useState('');

  const queryMaterials = () => {
    if (category) {
      return getMaterialsByCategory(category);
    }
    return getMaterials();
  };

  const { data: materials } = useQuery({
    queryKey: ['materials', category],
    queryFn: queryMaterials,
    placeholderData: keepPreviousData,
  });

  const { data: materialsCategories } = useQuery({
    queryKey: ['materials_category'],
    queryFn: getMaterialCategories,
  });

  const categories = materialsCategories?.map(({ id, name }) => {
    const handleClick = () => setCategory(id);
    const variant = id === category ? 'default' : 'secondary';

    return (
      <Button key={id} variant={variant} onClick={handleClick}>
        {name}
      </Button>
    );
  });

  const searchMaterials = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    setSearchFilter(target.value);
  };

  const filteredMaterials = React.useMemo(() => {
    return materials?.filter(({ name }) => name.includes(searchFilter));
  }, [materials, searchFilter]);

  return (
    <section className="space-y-8">
      <InputSearch placeholder="Buscar material..." onChange={searchMaterials} />
      <div className="flex gap-8">
        <Button
          className="flex-1/5"
          variant={!category ? 'default' : 'secondary'}
          onClick={() => setCategory(null)}
        >
          Todos
        </Button>
        <Separator className="bg-border w-px flex-none" orientation="vertical" />
        <div className="grid w-full flex-4/5 auto-cols-fr grid-flow-col justify-between gap-8">
          {categories}
        </div>
      </div>
      <DataTable columns={materialColumns} data={filteredMaterials ?? []} />
    </section>
  );
}
