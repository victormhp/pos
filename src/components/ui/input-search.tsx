import { Search } from "lucide-react"
import { Input } from "./input"

export function InputSearch({ ...props }: React.ComponentProps<"input">) {
  return (
    <div className="border-border flex items-center rounded-md border px-3 py-2">
      <Search className="mr-2 size-5 opacity-50" />
      <Input className="border-0 shadow-none" {...props} />
    </div>
  )
}
