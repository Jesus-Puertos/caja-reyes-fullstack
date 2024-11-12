import { DraftPatnerSchema, PatnersSchema, Patner, PatnerSchema } from "../types";
import { safeParse , number, parse, string, transform, pipe} from "valibot";
import axios from "axios";


type PatnerData = {
    [k: string]: FormDataEntryValue;
}

export async function addPatner(data: PatnerData){
    try {
        const result = safeParse(DraftPatnerSchema, {
            numero_socio: data.numero_socio,
            fecha_apertura: data.fecha_apertura,
            nombre: data.nombre,
            apellido_paterno: data.apellido_paterno,
            apellido_materno: data.apellido_materno,
            comunidad: data.comunidad,
            municipio: data.municipio,
            cantidad: +data.cantidad
        });
        if(result.success){
            const url = `${import.meta.env.VITE_API_URL}/api/socios`;
            await axios.post(url, {
                numero_socio: result.output.numero_socio,
                fecha_apertura: result.output.fecha_apertura,
                nombre: result.output.nombre,
                apellido_paterno: result.output.apellido_paterno,
                apellido_materno: result.output.apellido_materno,
                comunidad: result.output.comunidad,
                municipio: result.output.municipio,
                cantidad: result.output.cantidad
            })
        }else{
            throw new Error('Datos no validos');
        }
    } catch (error) {
        console.log(error);
    }
}


export async function getPatners(){
    try {
        const url = `${import.meta.env.VITE_API_URL}/api/socios`;
        const {data} = await axios.get(url);
        const result = safeParse(PatnersSchema, data.data);
        if(result.success){
            return result.output;
        }else{
            throw new Error('Datos no validos');
        }

    } catch (error) {
        console.log(error);
    }

}


export async function getPatnerById(id: Patner['id']){
    try {
        const url = `${import.meta.env.VITE_API_URL}/api/socios/${id}`;
        const {data} = await axios.get(url);
        const result = safeParse(PatnerSchema, data.data);
        if(result.success){
            return result.output;
        }else{
            throw new Error('Datos no validos');
        }

    } catch (error) {
        console.log(error);
    }

}


export async function updatePatner( data: PatnerData, id: Patner['id']){
    try {

        const NumberSchema = pipe(string(), transform(Number), number());
        const result = safeParse(PatnerSchema, {
            id,
            numero_socio: data.numero_socio,
            fecha_apertura: data.fecha_apertura,
            nombre: data.nombre,
            apellido_paterno: data.apellido_paterno,
            apellido_materno: data.apellido_materno,
            comunidad: data.comunidad,
            municipio: data.municipio,
            cantidad: parse(NumberSchema, data.cantidad)
        });

        if(result.success){
            const url = `${import.meta.env.VITE_API_URL}/api/socios/${id}`;
            await axios.put(url, result.output);
        }

    } catch (error) {
        console.log(error);
    }
}

export async function deletePatner(id: Patner['id']){

try {
    const url = `${import.meta.env.VITE_API_URL}/api/socios/${id}`;
    await axios.delete(url);
} catch (error) {
    console.log(error);
    
}

}