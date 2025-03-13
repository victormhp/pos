import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/")({
  component: Home
})

function Home() {
  return (
    <div className="p-2">
      <h3>Yeah perdonen kame kame ha!</h3>
    </div>
  )
}
