import { ProfilePayload } from "@/_types/profile-type";
import { apiPatientService } from "../general-api";


export const postProfile = async (data: ProfilePayload) => {
    try {
        const res = await apiPatientService.post("/", data)
        return res.data
    } catch (error) {
        throw error
    }
}

export const getProfileByIdPatient = async (id: string) => {
    try {
        const res = await apiPatientService.get(`/${id}`)
        return res.data
    } catch (error) {
        throw error
    }
}

export const getProfileByIdUser = async (id: string) => {
    try {
        const res = await apiPatientService.get(`/byUserId/${id}`)
        return res.data
    } catch (error) {
        throw error
    }
}