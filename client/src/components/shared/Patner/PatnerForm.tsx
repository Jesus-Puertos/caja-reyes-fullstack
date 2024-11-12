import { Patner } from "../../../types";

type PatnerFormProps = {
    patner?: Patner;
}



export default function PatnerForm({patner}: PatnerFormProps) {
  return (

    <>
    <div className="mb-4">
          <label className="text-gray-800" htmlFor="numero_socio">
            Numero de Socio:
          </label>
          <input
            id="numero_socio"
            type="text"
            className="mt-2 block w-full p-3 bg-gray-50"
            placeholder="Numero de Socio. ej. 123456"
            name="numero_socio"
            defaultValue={patner?.numero_socio}
          />
        </div>
        <div>
            <label className="text-gray-800" htmlFor="fecha_apertura">
                Fecha de Apertura de Cuenta:
            </label>
            <input type="date" className="mt-2 block w-full p-3 bg-gray-50" name="fecha_apertura"   defaultValue={patner?.fecha_apertura} />
            
        </div>

        <div className="mb-4">
          <label className="text-gray-800" htmlFor="nombre">
            Nombre del Socio:
          </label>
          <input
            id="nombre"
            type="text"
            className="mt-2 block w-full p-3 bg-gray-50"
            placeholder="Nombre del Socio. ej. Juan Perez"
            name="nombre"
            defaultValue={patner?.nombre}
          />
        </div>

        <div className="mb-4">
          <label className="text-gray-800" htmlFor="apellido_paterno">
            Apellido Paterno del Socio:
          </label>
          <input
            id="apellido_paterno"
            type="text"
            className="mt-2 block w-full p-3 bg-gray-50"
            placeholder="Apellido del Socio. ej. Juan Perez"
            name="apellido_paterno"
            defaultValue={patner?.apellido_paterno}
          />
        </div>

        <div className="mb-4">
          <label className="text-gray-800" htmlFor="apellido_materno">
            Apellido Materno del Socio:
          </label>
          <input
            id="apellido_materno"
            type="text"
            className="mt-2 block w-full p-3 bg-gray-50"
            placeholder="Apellido del Socio. ej. Juan Perez"
            name="apellido_materno"
            defaultValue={patner?.apellido_materno}

          />
        </div>

      

        <div className="mb-4">
          <label className="text-gray-800" htmlFor="comunidad">
            Comunidad del Socio:
          </label>
          <input
            id="comunidad"
            type="text"
            className="mt-2 block w-full p-3 bg-gray-50"
            placeholder="Direccion del Socio. ej. Calle 123"
            name="comunidad"
            defaultValue={patner?.comunidad}

          />
        </div>

        <div className="mb-4">
          <label className="text-gray-800" htmlFor="municipio">
            Municipio del Socio:
          </label>
          <input
            id="municipio"
            type="text"
            className="mt-2 block w-full p-3 bg-gray-50"
            placeholder="Direccion del Socio. ej. Calle 123"
            name="municipio"
            defaultValue={patner?.municipio}
          />
        </div>

        <div className="mb-4">
          <label className="text-gray-800" htmlFor="cantidad">
            Cantidad de Ej. Ahorro Inicial:
          </label>
          <input
            id="cantidad"
            type="number"
            className="mt-2 block w-full p-3 bg-gray-50"
            placeholder="Cantidad de Ahorro Inicial. ej. 200, 300"
            name="cantidad"
            defaultValue={patner?.cantidad}
          />
        </div>
    
    </>

)
}
