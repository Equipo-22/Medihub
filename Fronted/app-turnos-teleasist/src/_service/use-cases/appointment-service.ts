import { AppointmentType } from "@/_types/appointment-type";
import { apiAppointmentService } from "../general-api";

export const postAppointment = async (data: AppointmentType) => {
  try {
    const res = await apiAppointmentService.post("/", data);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const getAppointment = async (id: string) => {
  try {
    const res = await apiAppointmentService.get(`/${id}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const getAppointmentsByIdPatient = async (id: string) => {
  try {
    const res = await apiAppointmentService.get(`/patient/${id}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const deleteAppointment = async (id: string) => {
  try {
    const res = await apiAppointmentService.delete(`/${id}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};