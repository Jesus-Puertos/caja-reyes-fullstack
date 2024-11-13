import { object, string, number, array, Output } from "valibot";

/**Auth user */

const authSchema = object({
    name: string(),
    email: string(),
    password: string(),
    password_confirmation: string(),
});

type Auth = Output < typeof authSchema > ;
export type UserLoginForm = Pick < Auth, "email" | "password" > ;

export const DraftPatnerSchema = object({
    numero_socio: string(),
    fecha_apertura: string(),
    nombre: string(),
    apellido_paterno: string(),
    apellido_materno: string(),
    comunidad: string(),
    municipio: string(),
    cantidad: number(),
});

export const PatnerSchema = object({
    id: number(),
    numero_socio: string(),
    fecha_apertura: string(),
    nombre: string(),
    apellido_paterno: string(),
    apellido_materno: string(),
    comunidad: string(),
    municipio: string(),
    cantidad: number(),
});

export const PatnersSchema = array(PatnerSchema);
export type Patner = Output < typeof PatnerSchema > ;