import { useMutation } from "@tanstack/react-query";
import {
  getMedicalRecordByIdPatient,
  getRecordById
} from "../use-cases/medicalRecord-service";

export const MedicalRecordMutationsService = () => {
  
  const mutationGetMedicalRecordByIdPatient = useMutation({
    mutationFn: (id: string) => {
      return getMedicalRecordByIdPatient(id);
    }
  });

  const mutationGetRecordById = useMutation({
    mutationFn: (id: string) => {
      return getRecordById(id);
    }
  });

  return {
    mutationGetMedicalRecordByIdPatient,
    mutationGetRecordById,
  };
};
