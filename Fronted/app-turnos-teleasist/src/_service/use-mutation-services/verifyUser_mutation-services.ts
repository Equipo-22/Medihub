import { useMutation } from "@tanstack/react-query";
import { VerifyUserType } from "@/_types/verifyUser-type";
import {
  postVerifyUserLogin,
  postVerifyUserRegister,
} from "../use-cases/verifyUser-service";
import { useRouter } from "next/navigation";
import { useUserStore } from "@/store/userStore";
import { ProfileMutationsService } from "./profile-mutation-services";

export const VerifyUserMutationService = () => {
  const router = useRouter();
  const setUserData = useUserStore((state) => state.setUserData);
  const { mutationGetProfileByIdUser } = ProfileMutationsService();

  const mutationPostVerifyUserRegister = useMutation({
    mutationFn: (data: VerifyUserType) => {
      return postVerifyUserRegister(data);
    },
    onSuccess: () => {
      router.push("/register/success");
    },
  });

  const mutationPostVerifyUserLogin = useMutation({
    mutationFn: (data: VerifyUserType) => {
      return postVerifyUserLogin(data);
    },
    onSuccess: (data) => {
      setUserData({
        idUser: data.id,
        email: data.email,
        username: data.username,
      });

      mutationGetProfileByIdUser.mutate(data.id, {
        onSuccess: (profile) => {
          if (profile && profile.id) {
            setUserData({ idPatient: profile.id });
            router.push("/dashboard-patient/inicio");
          }
        },
        onError: () => {
          router.push("/profile-patient");
        },
      });
    },
  });

  return {
    mutationPostVerifyUserRegister,
    mutationPostVerifyUserLogin,
  };
};
