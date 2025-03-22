import { SidebarTrigger } from '@/components/ui/sidebar';
import { Separator } from '@/components/ui';
import { Clock } from '@/components/clock';

interface SiteHeaderProps {
  title: string;
}

export function SiteHeader({ title }: SiteHeaderProps) {
  return (
    <header className="px-4 flex h-16 shrink-0 items-center gap-2 border-b border-border transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-16">
      <div className="flex h-full items-center gap-2">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mx-1 data-[orientation=vertical]:h-4" />
        <h1 className="text-base font-medium">{title}</h1>
      </div>
      <div className="ml-auto">
        <Clock />
      </div>
    </header>
  );
}
