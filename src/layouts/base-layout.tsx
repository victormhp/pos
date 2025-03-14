import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/template/nav-sidebar';

interface BaseLayoutProps {
  children: React.ReactNode;
}
export function BaseLayout({ children }: BaseLayoutProps) {
  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset className='grid grid-rows-[auto_1fr] min-h-screen'>
          <header className="flex h-12 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
            <div className="flex items-center gap-2 px-4">
              <SidebarTrigger className="-ml-1" />
            </div>
          </header>
          <div className="px-8 py-4">{children}</div>
        </SidebarInset>
      </SidebarProvider>
    </>
  );
}
