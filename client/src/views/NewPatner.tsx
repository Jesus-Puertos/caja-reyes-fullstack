import { Link, Form, useActionData, ActionFunctionArgs, redirect } from "react-router-dom";
import ErrorMessage from "../components/shared/ErrorMessage";
import { addPatner } from "../services/PatnerService";
import PatnerForm from "../components/shared/Patner/PatnerForm";

export async function action({request} : ActionFunctionArgs) {
  const data = Object.fromEntries(await request.formData())
  let error = ''
  if(Object.values(data).includes('')) {
      error = 'Todos los campos son obligatorios'
  }
  if(error.length) {
      return error
  }
  
  await addPatner(data)
  
  return redirect('/')
}

export default function NewPatner() {
  const error = useActionData() as string

  return (
    <>
      <div className="flex justify-between">
        <h2 className="text-4xl font-black text-slate-600">Registrar Socios</h2>
        <Link
          to="/"
          className="rounded-md bg-indigo-600 p-3 text-sm font-bold text-white shadow-sm hover:bg-indigo-700"
        >
          Volver a socios
        </Link>
      </div>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <Form className="mt-10" method="POST">
      <PatnerForm />
        <input
          type="submit"
          className="mt-5 w-full bg-indigo-600 p-2 text-white font-bold text-lg cursor-pointer rounded"
          value="Registrar Socio"
        />
      </Form>
    </>
  );
}