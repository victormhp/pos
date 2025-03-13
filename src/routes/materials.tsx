import { createFileRoute } from "@tanstack/react-router"
import { MaterialsTable } from "@/components/materials"

export const Route = createFileRoute("/materials")({
  component: Materials
})

function Materials() {
  return (
    <div>
      <MaterialsTable />
    </div>
  )
}
