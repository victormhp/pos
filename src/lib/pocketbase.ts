import PocketBase from 'pocketbase';

const dbURL = import.meta.env.VITE_DB_URL;
export const pb = new PocketBase(dbURL);

const superuser = import.meta.env.VITE_SUPERUSER;
const superuserPass = import.meta.env.VITE_SUPERUSER_PASSWORD;
await pb.collection('_superusers').authWithPassword(superuser, superuserPass);

export async function createBackup(): Promise<void> {
  const date = new Date();
  const timestamp = date
    .toLocaleString('es-MX', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    })
    .replace(/[\/,]/g, '-')
    .replace(/\s+/g, '_')
    .replace(/:/g, '-');

  const filename = `backup-${timestamp}.zip`;

  await pb.backups.create(filename);

  const token = await pb.files.getToken();
  const url = pb.backups.getDownloadURL(token, filename);

  const response = await fetch(url);
  if (!response.ok) throw new Error('Failed to download backup');

  const blob = await response.blob();
  const blobUrl = window.URL.createObjectURL(blob);

  const a = document.createElement('a');
  a.href = blobUrl;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);

  window.URL.revokeObjectURL(blobUrl);
}
