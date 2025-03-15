import { SidebarTrigger } from '@/components/ui/sidebar';
import { Button } from '@/components/ui';
import { Link } from '@tanstack/react-router';
import { ChevronLeft } from 'lucide-react';

interface DashboardHeader {
  showBackButton?: boolean;
  backPath?: string;
}

export function DashboardHeader({ showBackButton = false, backPath }: DashboardHeader) {
  return (
    <header className="px-2 flex h-12 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
      <div className="flex items-center gap-2 px-4">
        <SidebarTrigger className="-ml-1" />
        {showBackButton ? (
          <Button asChild className="size-7" size="icon" variant="ghost">
            <Link to={backPath}>
              <ChevronLeft />
              <span className="sr-only">Go back</span>
            </Link>
          </Button>
        ) : null}
      </div>
    </header>
  );
}
