import { ColumnDef } from '@tanstack/react-table';
import { z } from 'zod';

export const MaterialSchema = z.object({
  id: z.string().nonempty(),
  category_id: z.string().nonempty(),
  name: z.string().nonempty(),
  purchase_price: z.number().positive(),
  sales_price: z.number().positive(),
  weight: z.number().positive(),
  barcode: z.string().nonempty(),
});

export type Material = z.infer<typeof MaterialSchema>;

export const MaterialsCategorySchema = z.object({
  id: z.string().nonempty(),
  name: z.string().nonempty(),
});

export type MaterialsCategory = z.infer<typeof MaterialsCategorySchema>;

export const materialColumns: ColumnDef<Material>[] = [
  {
    accessorKey: 'name',
    header: 'Material',
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
    header: 'Codigo de barras',
  },
];
