import { Link } from "@tanstack/react-router"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { buttonVariants } from "@/components/ui/button"
import { Home, List, Package, Settings, ShoppingCart, UserRound, File } from "lucide-react"
import { ModeToggle } from "../mode-toggle"
import { cn } from "@/lib/utils"

export function NavMenu() {
  const links = [
    {
      label: "Inicio",
      url: "/",
      icon: <Home />
    },
    {
      label: "Ventas",
      url: "/sales",
      icon: <ShoppingCart />
    },
    {
      label: "Pedidos",
      url: "/orders",
      icon: <List />
    },
    {
      label: "Materiales",
      url: "/materials",
      icon: <Package />
    },
    {
      label: "Clientes",
      url: "/clients",
      icon: <UserRound />
    }
  ]

  const navList = links.map(({ label, url, icon }, i) => {
    return (
      <li key={i}>
        <Link className="flex items-center gap-2" activeProps={{ className: "font-bold" }} to={url}>
          {icon}
          {label}
        </Link>
      </li>
    )
  })

  return (
    <header className="border-border w-full border-b px-8 py-4">
      <nav className="flex items-center justify-between">
        <ul className="flex items-center gap-12">{navList}</ul>
        <div className="flex items-center gap-4">
          <ModeToggle />
          <a href="http://localhost:8090/_/" className={cn(buttonVariants({ variant: "ghost" }), "size-9 p-0")}>
            <File className="size-5" />
            <span className="sr-only">Pocketbase</span>
          </a>
          <Link to="/" className={cn(buttonVariants({ variant: "ghost" }), "size-9 p-0")}>
            <Settings className="size-5" />
            <span className="sr-only">Configuracion</span>
          </Link>
          <Avatar>
            <AvatarImage src="" alt="@usuario" />
            <AvatarFallback>CN</AvatarFallback>
            <span className="sr-only">Perfil</span>
          </Avatar>
        </div>
      </nav>
    </header>
  )
}
