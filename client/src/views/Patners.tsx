import { Link, useLoaderData } from "react-router-dom"
import { getPatners } from "../services/PatnerService"
import PatnerDeatils from "../components/shared/PatnerDeatils";

export async function loader() {
  const patners = await getPatners();
  return patners ;
}


export default function Patners() {

  const patners = useLoaderData() as Patner[];

  return (
    <>
        <div className="flex justify-between">
            <h2 className="text-4xl font-black text-slate-600">Socios</h2>
            <Link
            to="socios/nuevo"
            className="rounded-md bg-indigo-600 p-3 text-sm font-bold text-white shadow-sm hover:bg-indigo-700"
            >
                Agregar Socio
            </Link>
        </div>

        <div className="p-2">
        {
          patners.length === 0 ? (
            <p className="text-center mt-8 font-semibold text-2xl text-slate-400">No hay socios</p>
          ):
          (
            <table className="w-full mt-5 table-auto">
            <thead className="bg-orange-400 text-white">
                <tr>
                    <th className="p-2">Numero de socio</th>
                    <th className="p-2">Fecha de apertura</th>
                    <th className="p-2">Nombre</th>
                    <th className="p-2">Apellidos</th>
                    <th className="p-2">Comunidad</th>
                    <th className="p-2">Municipio</th>
                    <th className="p-2">Cantidad</th>
                    <th className="p-2">Acciones</th>
                </tr>
            </thead>
            <tbody>
              {patners.map(patner => (
                  <PatnerDeatils
                    key={patner.id}
                    patner={patner}
                  />
              ))}
            </tbody>
          </table>
          )

        }
</div>


    </>
  )
}
