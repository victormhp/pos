import { NavMenu } from '@/components/template';

interface BaseLayoutProps {
  children: React.ReactNode;
}
export function BaseLayout({ children }: BaseLayoutProps) {
  return (
    <>
      <NavMenu />
      <main className="p-8">{children}</main>
    </>
  );
}
