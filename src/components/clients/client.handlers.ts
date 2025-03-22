import type { Client } from './';
import { pb } from '@/lib/pocketbase';
import { keepPreviousData, queryOptions } from '@tanstack/react-query';

export async function getClients(): Promise<Client[]> {
  try {
    const clients = await pb.collection('clients').getFullList<Client>();
    return clients;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function insertClient(client: Client) {
  try {
    await pb.collection('clients').create(client);
  } catch (error) {
    console.error(error);
  }
}

// Query options
export const clientsQueryOptions = queryOptions({
  queryKey: ['clients'],
  queryFn: getClients,
  placeholderData: keepPreviousData,
});
