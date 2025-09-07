"use client";

import { QRCodeCanvas } from "qrcode.react";
import { useRef, useState } from "react";

import { Button } from "@repo/ui/components/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogMain,
  DialogTitle,
} from "@repo/ui/components/dialog";

import { Link } from "@/entities/link/model/link.types";
import { displayError } from "@/shared/utils/display-error";

interface LinkQrcodeDialogProps {
  openDialog: boolean;
  setOpenDialog: (openDialog: boolean) => void;
  link: Link;
}

const LinkQrcodeDialog = ({ openDialog, setOpenDialog, link }: LinkQrcodeDialogProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleDownload = async () => {
    try {
      setLoading(true);
      if (!canvasRef.current) return;
      const url = canvasRef.current.toDataURL("image/png");
      const tag = document.createElement("a");
      tag.href = url;
      tag.download = `${link.name}-qrcode.png`;
      tag.click();
    } catch (error) {
      await displayError(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={openDialog} onOpenChange={setOpenDialog}>
      <DialogContent className="sm:max-w-[300px]">
        <DialogHeader>
          <DialogTitle>QR код</DialogTitle>
        </DialogHeader>
        <DialogMain className="flex items-center justify-center">
          <QRCodeCanvas ref={canvasRef} value={link.url} size={200} />
        </DialogMain>
        <DialogFooter>
          <DialogClose asChild>
            <Button loading={loading} type="button" variant="secondary">
              Закрыть
            </Button>
          </DialogClose>
          <Button onClick={handleDownload} loading={loading}>
            Скачать
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export { LinkQrcodeDialog };
