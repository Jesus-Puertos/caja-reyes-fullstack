import { formatCurrency } from "../../helpers";
import { deletePatner } from "../../services/PatnerService";
import { Patner } from "../../types";
import { ActionFunctionArgs, Form, redirect, useFetcher, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

type PatnerDetailsProps = {
    patner: Patner;
}

export async function action({ params }: ActionFunctionArgs) {
    if (params.id !== undefined) {
        await deletePatner(+params.id);
        return redirect('/');
    }
}

export default function PatnerDetails({ patner }: PatnerDetailsProps) {
    const fetcher = useFetcher();
    const navigate = useNavigate();

    return (
        <tr className="border-b">
            <td className="p-3 text-lg text-gray-800">
                {patner.numero_socio}
            </td>
            <td className="p-3 text-lg text-gray-800">
                {patner.fecha_apertura}
            </td>
            <td className="p-3 text-lg text-gray-800">
                {patner.nombre}
            </td>
            <td className="p-3 text-lg text-gray-800">
                {patner.apellido_paterno + ' ' + patner.apellido_materno}
            </td>
            <td className="p-3 text-lg text-gray-800">
                {patner.comunidad}
            </td>
            <td className="p-3 text-lg text-gray-800">
                {patner.municipio}
            </td>
            <td className="p-3 text-lg text-gray-800">
                {formatCurrency(patner.cantidad)}
            </td>
            <td className="p-3 text-lg text-gray-800">
                <div className="flex gap-2 items-center">
                    <button
                        onClick={() => navigate(`socios/${patner.id}/editar`)}
                        className="bg-indigo-600 text-white rounded-lg w-full font-bold uppercase p-2 text-xs text-center"
                    >
                        Editar
                    </button>
                    <Form
                        className="w-full"
                        method="POST"
                        action={`socios/${patner.id}/eliminar`}
                        onSubmit={ async (e) => {
                            e.preventDefault() // Evita el envío inmediato del formulario
                            const result = await Swal.fire({
                                title: '¿Estás seguro?',
                                text: 'Esta acción no se puede deshacer',
                                icon: 'warning',
                                showCancelButton: true,
                                confirmButtonColor: '#3085d6',
                                cancelButtonColor: '#d33',
                                confirmButtonText: 'Sí, eliminar',
                                cancelButtonText: 'Cancelar'
                            })
                     
                            if (result.isConfirmed) {
                                fetcher.submit(e.target as HTMLFormElement)
                                Swal.fire(
                                    '¡Eliminado!',
                                    'El socio ha sido eliminado',
                                    'success'
                                )
                            }
                        }}
                    >
                        <input
                            type="submit"
                            value="Eliminar"
                            className="bg-red-600 text-white rounded-lg w-full font-bold uppercase p-2 text-xs text-center"
                        />
                    </Form>
                </div>
            </td>
        </tr>
    );
}