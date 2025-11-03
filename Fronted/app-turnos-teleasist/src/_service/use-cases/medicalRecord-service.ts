import { apiEHRService } from "../general-api";


export const getRecordById = async (id: string) => {
  try {
    const res = await apiEHRService.get(`/history/${id}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const getMedicalRecordByIdPatient = async (id: string) => {
  try {
    const res = await apiEHRService.get(`/patient/${id}/history`);
    return res.data;
  } catch (error) {
    throw error;
  }
};




