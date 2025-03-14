import { ColumnDef } from '@tanstack/react-table';
import { z } from 'zod';

export const ClientSchema = z.object({
  id: z.string().nonempty(),
  category_id: z.string().nonempty(),
  name: z.string().nonempty(),
  purchase_price: z.number().positive(),
  sales_price: z.number().positive(),
  weight: z.number().positive(),
  barcode: z.string().nonempty(),
});

export type Client = z.infer<typeof ClientSchema>;

export const clientColumns: ColumnDef<Client>[] = [
  {
    accessorKey: 'name',
    header: 'Cliente',
  },
  {
    accessorKey: 'phone',
    header: 'Teléfono',
  },
  {
    accessorKey: 'ext_number',
    header: 'Número Exterior',
  },
  {
    accessorKey: 'street',
    header: 'Calle',
  },
  {
    accessorKey: 'neighborhood',
    header: 'Colonia',
  },
];
