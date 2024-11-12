import { Outlet } from "react-router-dom"


export default function Layout() {
  return (
    <>
    <header className="bg-orange-400">
        <div className="mx-auto max-w-6xl py-10">
            <h1 className="text-4xl font-bold text-white capitalize">
                Socios de Caja Reyes
            </h1>
        </div>
    </header>

    <main className="mt-10 mx-auto max-w-6xl p-10 bg-white shadow">
    <Outlet />

    </main>
    </>
  )
}
