import { apiAuthService } from "../general-api";
import { ReqPassResetType } from "@/_types/reqPassReset-type";

export const postReqPassReset = async (data: ReqPassResetType) => {
  try {
    const res = await apiAuthService.post(
      `/solicitar-reset-password?email=${data.email}`
    );
    return res.data;
  } catch (error: any) {
    const status = error.response?.status;
    const code = error.response?.data?.code;
    const message = error.response?.data?.message;

    let friendlyMessage = "Error desconocido";
    if (code === "USER_NOT_FOUND") {
      friendlyMessage = "El email ingresado no fue encontrado. Por favor registrarse";
    } else if (status === 500) {
      friendlyMessage = "Error interno del servidor, intente más tarde";
    } else if (message) {
      friendlyMessage = message;
    }

    throw new Error(friendlyMessage);
  }
};
