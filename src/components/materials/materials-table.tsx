import * as React from 'react';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { Button, Separator, DataTable, InputSearch } from '@/components/ui';
import { materialColumns, filteredMaterialColumns } from './materials.model';
import { getMaterials, getMaterialCategories, getMaterialsByCategory } from './materials.handlers';

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

  const { data: materialCategories } = useQuery({
    queryKey: ['materials_category'],
    queryFn: getMaterialCategories,
  });

  const categories = materialCategories?.map(({ id, name }) => {
    const handleClick = () => setCategory(id);
    const variant = id === category ? 'default' : 'secondary';

    return (
      <Button key={id} variant={variant} onClick={handleClick} className="grow">
        {name}
      </Button>
    );
  });

  const searchMaterials = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    setSearchFilter(target.value);
  };

  const filteredMaterials = React.useMemo(() => {
    const filtered = materials?.filter(({ name, barcode }) => {
      const parsedName = name.toLowerCase();
      const parsedBarcode = barcode.toLowerCase();
      const parsedSearch = searchFilter.trim().toLowerCase();

      const includesName = parsedName.includes(parsedSearch);
      const includesBarcode = parsedBarcode.includes(parsedSearch);

      return includesName || includesBarcode;
    });
    return filtered;
  }, [materials, searchFilter]);

  return (
    <div className="space-y-8">
      <InputSearch placeholder="Buscar material..." onChange={searchMaterials} />
        <div className="grid grid-cols-[1fr_auto_5fr] gap-6 items-center">
          <Button variant={!category ? 'default' : 'secondary'} onClick={() => setCategory(null)}>
            Todos
          </Button>
          <Separator orientation="vertical" />
          <div className="flex items-center gap-6 overflow-x-auto pb-3">{categories}</div>
        </div>
      <DataTable
        columns={!category ? materialColumns : filteredMaterialColumns}
        data={filteredMaterials ?? []}
      />
    </div>
  );
}
