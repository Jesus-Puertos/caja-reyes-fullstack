import { PropsWithChildren } from "react";

export default function ErrorMessage({children} : PropsWithChildren) {
  return (
   <>
   <div className="text-center rounded my-4 text-white bg-red-600 font-bold p-3 uppercase">
    {children}
   </div>
   </>
  )
}
