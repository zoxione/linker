"use client";

import { Dialog, DialogContent, DialogHeader, DialogMain, DialogTitle } from "@repo/ui/dialog";

import { CreateLinkForm } from "./create-link-form";

interface CreateLinkDialogProps {
  openDialog: boolean;
  setOpenDialog: (openDialog: boolean) => void;
}

const CreateLinkDialog = ({ openDialog, setOpenDialog }: CreateLinkDialogProps) => {
  return (
    <Dialog open={openDialog} onOpenChange={setOpenDialog}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Создать ссылку</DialogTitle>
        </DialogHeader>
        <DialogMain>
          <CreateLinkForm onSuccess={() => setOpenDialog(false)} />
        </DialogMain>
      </DialogContent>
    </Dialog>
  );
};

export { CreateLinkDialog };
