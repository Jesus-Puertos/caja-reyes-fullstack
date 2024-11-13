import { Outlet } from "react-router-dom"
import Logo from "../components/shared/Logo"


export default function AuthLayout() {
  return (
    <>

        <div className="bg-slate-200 min-h-screen">
            <div className="py-10 lg:py-20 mx-auto w-[450px] md:flex md:justify-center md:items-center md:flex-col">
               <Logo />
                <div className="mt-10">
                <Outlet />
                </div>
            </div>
        </div>

      
    </>
  )
}
