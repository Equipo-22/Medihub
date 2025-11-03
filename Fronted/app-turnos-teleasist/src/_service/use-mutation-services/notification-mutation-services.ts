import { useMutation} from "@tanstack/react-query";
import { deleteNotificationById, postNotificationAsReaded } from "../use-cases/notifications-service";


export const NotificationMutationsService = () => {
  const mutationPostNotificationAsReaded = useMutation({
    mutationFn: (id: string) => {
      return postNotificationAsReaded(id);
    }
  });

   const mutationDeleteNotificationsById = useMutation({
    mutationFn: (id: string) => {
      return deleteNotificationById(id);
    }
  });


  return {
    mutationPostNotificationAsReaded,
    mutationDeleteNotificationsById
  };
};
