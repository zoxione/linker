import { ExternalToast, toast as sonner } from "sonner";

const toast = {
  success: (props: ExternalToast) => {
    sonner.success("Успех", props);
  },
  info: (props: ExternalToast) => {
    sonner.info("Информация", props);
  },
  error: (props: ExternalToast) => {
    sonner.error("Ошибка", props);
  },
};

export { toast };
