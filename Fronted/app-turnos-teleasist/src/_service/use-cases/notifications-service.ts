
import { apiNotificationService } from "../general-api";


export const postNotificationAsReaded = async (id: string) => {
  try {
    const res = await apiNotificationService.post(`/${id}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};


export const getNotificationsByIdPatient = async (id: string) => {
  try {
    const res = await apiNotificationService.get(`/${id}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const deleteNotificationById = async (id: string) => {
  try {
    const res = await apiNotificationService.delete(`/${id}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};