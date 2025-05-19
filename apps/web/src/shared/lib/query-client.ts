import { toast } from "sonner";

import { QueryCache, QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error) => {
      toast.error(`Ой! Произошла ошибка`);
      console.error(error.message);
    },
  }),
  defaultOptions: {
    queries: {
      retry: 1,
    },
  },
});

export { queryClient };
