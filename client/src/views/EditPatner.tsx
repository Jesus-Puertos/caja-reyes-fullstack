import { Link, Form, useActionData, ActionFunctionArgs, redirect, LoaderFunctionArgs, useLoaderData } from "react-router-dom";
import ErrorMessage from "../components/shared/ErrorMessage";
import { addPatner, getPatnerById, updatePatner } from "../services/PatnerService";
import PatnerForm from "../components/shared/Patner/PatnerForm";

export async function loader({params} : LoaderFunctionArgs) {

    if(params.id !== undefined){
       const patner = await getPatnerById(+params.id)
        if(!patner){
            return redirect('/')
        }
        return patner

    }

}



export async function action({request, params} : ActionFunctionArgs) {
  const data = Object.fromEntries(await request.formData())
  let error = ''
  if(Object.values(data).includes('')) {
      error = 'Todos los campos son obligatorios'
  }
  if(error.length) {
      return error
  }
  if(params.id !== undefined){
    await updatePatner(data, +params.id)
    return redirect('/')

  }
  
}

export default function EditPatner() {
    const patner = useLoaderData() as Patner;
    const error = useActionData() as string


  return (
    <>
      <div className="flex justify-between">
        <h2 className="text-4xl font-black text-slate-600">Editar Socio</h2>
        <Link
          to="/"
          className="rounded-md bg-indigo-600 p-3 text-sm font-bold text-white shadow-sm hover:bg-indigo-700"
        >
          Volver a socios
        </Link>
      </div>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <Form className="mt-10" method="POST">
        
        <PatnerForm 
            patner={patner}
        />

        
        <input
          type="submit"
          className="mt-5 w-full bg-indigo-600 p-2 text-white font-bold text-lg cursor-pointer rounded"
          value="Guardar Cambios"
        />
      </Form>
    </>
  );
}