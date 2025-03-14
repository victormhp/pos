import { ColumnDef } from '@tanstack/react-table';
import { z } from 'zod';

export const MaterialCategories = z.object({
  id: z.string().nonempty(),
  name: z.string().nonempty(),
});

export type MaterialCategories = z.infer<typeof MaterialCategories>;

export const MaterialSchema = z.object({
  id: z.string().nonempty(),
  category_id: z.string().nonempty(),
  name: z.string().nonempty(),
  purchase_price: z.number().positive(),
  sales_price: z.number().positive(),
  weight: z.number().positive(),
  barcode: z.string().nonempty(),
  expand: z
    .object({
      category_id: MaterialCategories.optional(),
    })
    .optional(),
});

export type Material = z.infer<typeof MaterialSchema>;

export const materialColumns: ColumnDef<Material>[] = [
  {
    accessorKey: 'name',
    header: 'Material',
  },
  {
    accessorFn: (row) => row.expand?.category_id?.name,
    header: 'Categoría',
    id: 'category_id',
  },
  {
    accessorKey: 'purchase_price',
    header: 'Precio de compra',
  },
  {
    accessorKey: 'sales_price',
    header: 'Precio de venta',
  },
  {
    accessorKey: 'weight',
    header: 'Peso (kg)',
  },
  {
    accessorKey: 'barcode',
    header: 'Código de barras',
  },
];

export const filteredMaterialColumns = materialColumns.filter(
  (column) => column.header !== 'Categoría',
);
