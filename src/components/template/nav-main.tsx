import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { Link } from '@tanstack/react-router';
import { Home, List, Package, ShoppingCart, UserRound } from 'lucide-react';

export function NavMain() {
  const sections = [
    {
      title: 'Inicio',
      url: '/',
      icon: Home,
      isActive: true,
    },
    {
      title: 'Ventas',
      url: '/sales',
      icon: ShoppingCart,
    },
    {
      title: 'Pedidos',
      url: '/orders',
      icon: List,
    },
    {
      title: 'Productos',
      url: '/products',
      icon: Package,
    },
    {
      title: 'Clientes',
      url: '/clients',
      icon: UserRound,
    },
  ];

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Secciones</SidebarGroupLabel>
      <SidebarMenu>
        {sections.map((s) => (
          <SidebarMenuItem key={s.title}>
            <SidebarMenuButton asChild tooltip={s.title}>
              <Link
                to={s.url}
                className="hover:bg-sidebar-border"
                activeProps={{ className: 'bg-sidebar-border hover:bg-none' }}
              >
                <s.icon />
                <span>{s.title}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
