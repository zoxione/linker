"use client";

import { useState } from "react";
import { toast } from "sonner";

import { Button } from "@repo/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogMain,
  DialogTitle,
} from "@repo/ui/dialog";

import { QueryKeys } from "@/core/data/constants";
import { Link } from "@/entities/link/model/link.types";
import { useDeleteApiCustomerLinksId } from "@/shared/api";
import { displayError } from "@/shared/utils/display-error";
import { useQueryClient } from "@tanstack/react-query";

interface DeleteLinkDialogProps {
  openDialog: boolean;
  setOpenDialog: (openDialog: boolean) => void;
  link: Link;
}

const DeleteLinkDialog = ({ openDialog, setOpenDialog, link }: DeleteLinkDialogProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const queryClient = useQueryClient();

  const { mutateAsync: deleteLink } = useDeleteApiCustomerLinksId();

  const onDelete = async () => {
    try {
      setLoading(true);
      await deleteLink({
        id: link.id,
      });
      setOpenDialog(false);
      toast.success("Ссылка удалена");
      await queryClient.invalidateQueries({ queryKey: [QueryKeys.customer.links] });
    } catch (error) {
      await displayError(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={openDialog} onOpenChange={setOpenDialog}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Удалить ссылку</DialogTitle>
        </DialogHeader>
        <DialogMain>
          <p className="text-muted-foreground text-sm">
            После удаления ссылка будет недоступна, и все связанные с ней данные будут потеряны.
          </p>
        </DialogMain>
        <DialogFooter>
          <DialogClose asChild>
            <Button loading={loading} type="button" variant="secondary">
              Отмена
            </Button>
          </DialogClose>
          <Button onClick={onDelete} loading={loading}>
            Удалить
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export { DeleteLinkDialog };
