import { z } from 'zod';

export const productCategorySchema = z.object({
  id: z.string(),
  name: z.string(),
});

export type ProductCategory = z.infer<typeof productCategorySchema>;

export const productSchema = z
  .object({
    id: z.string().optional(),
    name: z
      .string()
      .min(1, 'El nombre del producto es requerido')
      .min(2, 'El nombre debe tener al menos 2 caracteres')
      .max(100, 'El nombre no debe exceder los 100 caracteres')
      .trim(),
    category_id: z.string().min(2, 'El nombre de la categoría es requerido'),
    purchase_price: z
      .number({
        invalid_type_error: 'Precio de compra debe ser un número',
      })
      .positive('El precio de compra debe ser mayor que 0')
      .max(999999, 'El precio de compra no debe exceder los 999,999'),
    sales_price: z
      .number({
        invalid_type_error: 'Precio de venta debe ser un número',
      })
      .positive('El precio de venta debe ser mayor que 0')
      .max(999999, 'El precio de venta no debe exceder los 999,999'),
    weight: z
      .number({
        invalid_type_error: 'Peso debe ser un número',
      })
      .positive('El peso debe ser mayor que 0')
      .max(10000, 'El peso no debe exceder los 10,000 kg'),
    barcode: z.string().trim(),
    expand: z
      .object({
        category_id: productCategorySchema,
      })
      .optional(),
  })
  .refine((data) => data.purchase_price <= data.sales_price, {
    message: 'El precio de venta debe ser mayor o igual al precio de compra',
    path: ['sales_price'],
  });

export type Product = z.infer<typeof productSchema>;
