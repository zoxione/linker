"use client";

import { Dialog, DialogContent, DialogHeader, DialogMain, DialogTitle } from "@repo/ui/components/dialog";

import { Link } from "@/entities/link/model/link.types";

import { UpdateLinkForm } from "./update-link-form";

interface UpdateLinkDialogProps {
  openDialog: boolean;
  setOpenDialog: (openDialog: boolean) => void;
  link: Link;
}

const UpdateLinkDialog = ({ openDialog, setOpenDialog, link }: UpdateLinkDialogProps) => {
  return (
    <Dialog open={openDialog} onOpenChange={setOpenDialog}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Обновить ссылку</DialogTitle>
        </DialogHeader>
        <DialogMain>
          <UpdateLinkForm link={link} onSuccess={() => setOpenDialog(false)} />
        </DialogMain>
      </DialogContent>
    </Dialog>
  );
};

export { UpdateLinkDialog };
