import { ResetPassType } from "@/_types/resetPass-type";
import { apiAuthService } from "../general-api";

export const postResetPass = async (data: ResetPassType) => {
    try {
        const res = await apiAuthService.post("/reset-password", data,  { headers: { "Content-Type": "application/json" }} )
        return res.data
    } catch (error) {
        throw error
    }
}