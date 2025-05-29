"use client";

import { useState } from "react";
import { toast } from "sonner";

import { Switch } from "@repo/ui/switch";

import { QueryKeys } from "@/core/data/constants";
import { Link } from "@/entities/link/model/link.types";
import { usePostApiCustomerLinksIdStatus } from "@/shared/api";
import { displayError } from "@/shared/utils/display-error";
import { useQueryClient } from "@tanstack/react-query";

interface UpdateStatusLinkSwitchProps {
  id: Link["id"];
  status: Link["status"];
}

const UpdateStatusLinkSwitch = ({ id, status }: UpdateStatusLinkSwitchProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const queryClient = useQueryClient();

  const { mutateAsync: updateStatusLink } = usePostApiCustomerLinksIdStatus();

  const onUpdateStatus = async (value: boolean) => {
    try {
      setLoading(true);
      await updateStatusLink({
        id,
        data: {
          status: value ? "ENABLE" : "DISABLE",
        },
      });
      toast.success("Ссылка обновлена");
      await queryClient.invalidateQueries({ queryKey: [QueryKeys.customer.links] });
    } catch (error) {
      await displayError(error);
    } finally {
      setLoading(false);
    }
  };

  return <Switch checked={status === "ENABLE"} onCheckedChange={onUpdateStatus} disabled={loading} />;
};

export { UpdateStatusLinkSwitch };
