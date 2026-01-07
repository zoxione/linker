"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

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
import { toast } from "@repo/ui/toast";

import { SimpleError } from "@/shared/errors/simple-error";
import { authClient } from "@/shared/lib/auth-client";
import { displayError } from "@/shared/utils/display-error";
import { getAuthError } from "@/shared/utils/get-auth-error";

interface DeleteUserDialogProps {
  openDialog: boolean;
  setOpenDialog: (openDialog: boolean) => void;
}

const DeleteUserDialog = ({ openDialog, setOpenDialog }: DeleteUserDialogProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const handleDelete = async () => {
    try {
      setLoading(true);
      const { error } = await authClient.deleteUser();
      if (error) {
        throw new SimpleError(getAuthError(error.code) ?? "Не удалось удалить аккаунт");
      }
      setOpenDialog(false);
      toast.success({ description: "Аккаунт удален" });
      router.push("/auth");
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
          <DialogTitle>Удалить аккаунт</DialogTitle>
        </DialogHeader>
        <DialogMain>
          <p className="text-muted-foreground text-sm">
            После удаления аккаунт будет недоступен, и все связанные с ним данные будут потеряны.
          </p>
        </DialogMain>
        <DialogFooter>
          <DialogClose asChild>
            <Button loading={loading} type="button" variant="secondary">
              Отмена
            </Button>
          </DialogClose>
          <Button onClick={handleDelete} loading={loading}>
            Удалить
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export { DeleteUserDialog };
