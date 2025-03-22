import { z } from 'zod';

export const clientSchema = z.object({
  id: z.string().optional(),
  name: z
    .string()
    .min(1, 'El nombre del cliente es requerido')
    .min(2, 'El nombre debe tener al menos 2 caracteres')
    .max(100, 'El nombre no debe exceder los 100 caracteres')
    .trim(),
  phone: z
    .string()
    .trim()
    .min(10, 'El número de teléfono debe tener al menos 10 dígitos')
    .max(15, 'El número de teléfono no debe exceder los 15 dígitos')
    .regex(/^\d+$/, 'El número de teléfono solo debe contener dígitos'),
  street: z
    .string()
    .min(2, 'La calle debe tener al menos 2 caracteres')
    .max(100, 'La calle no debe exceder los 100 caracteres')
    .trim(),
  neighborhood: z
    .string()
    .min(2, 'La colonia debe tener al menos 2 caracteres')
    .max(100, 'La colonia no debe exceder los 100 caracteres')
    .trim(),
  ext_number: z
    .string()
    .trim()
    .min(1, 'El número exterior es requerido')
    .max(10, 'El número exterior no debe exceder los 10 caracteres'),
  reference: z
    .string()
    .max(200, 'La referencia no debe exceder los 200 caracteres')
    .trim()
});

export type Client = z.infer<typeof clientSchema>;
