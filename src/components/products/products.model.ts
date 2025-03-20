import { z } from 'zod';

export const categoriesSchema = z.object({
  id: z.string(),
  name: z.string(),
});

export type ProductCategory = z.infer<typeof categoriesSchema>;

export const productSchema = z.object({
  id: z.string(),
  name: z.string(),
  category_id: z.string(),
  purchase_price: z.number().positive(),
  sales_price: z.number().positive(),
  weight: z.number().positive(),
  barcode: z.string(),
  expand: z.object({
    category_id: categoriesSchema,
  }),
});

export type Product = z.infer<typeof productSchema>;

export const productFormSchema = z
  .object({
    name: z
      .string({ required_error: 'El nombre del producto es requerido' })
      .trim()
      .min(2, 'El nombre debe tener al menos 2 caracteres')
      .max(100, 'El nombre no debe exceder los 100 caracteres'),
    category: z.string({ required_error: 'La categoría es requerida' }).trim(),
    purchase_price: z
      .number({ required_error: 'El precio de compra es requerido' })
      .positive('El precio de compra debe ser mayor que 0')
      .max(999999, 'El precio de compra no debe exceder los 999,999'),
    sales_price: z
      .number({ required_error: 'El precio de venta es requerido' })
      .positive('El precio de venta debe ser mayor que 0')
      .max(999999, 'El precio de venta no debe exceder los 999,999'),
    weight: z
      .number({ required_error: 'El peso es requerido' })
      .positive('El peso debe ser mayor que 0')
      .max(10000, 'El peso no debe exceder los 10,000 kg'),
    barcode: z.string().trim(),
  })
  .refine((data) => data.purchase_price <= data.sales_price, {
    message: 'El precio de venta debe ser mayor o igual al precio de compra',
    path: ['sales_price'],
  });
