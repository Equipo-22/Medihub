import { AppointmentType } from "@/_types/appointment-type";
import { useMutation } from "@tanstack/react-query";
import {
  getAppointmentsByIdPatient,
  postAppointment,
} from "../use-cases/appointment-service";

export const AppointmentMutationsService = () => {
  const mutationPostAppointment = useMutation({
    mutationFn: (data: AppointmentType) => {
      return postAppointment(data);
    },
  });

  const mutationGetAppointmentsByIdPatient = useMutation({
    mutationFn: (id: string) => {
      return getAppointmentsByIdPatient(id);
    },
  });

  return {
    mutationPostAppointment,
    mutationGetAppointmentsByIdPatient,
  };
};
