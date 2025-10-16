"use client";

import dynamic from "next/dynamic";
import { ComponentPropsWithoutRef, ReactNode, Suspense, createElement, useState } from "react";

import { DialogContext } from "../model/dialog.context";

const CreateLinkDialog = dynamic(() => import("@/features/link/create-link").then((mod) => mod.CreateLinkDialog));
const DeleteLinkDialog = dynamic(() => import("@/features/link/delete-link").then((mod) => mod.DeleteLinkDialog));
const LinkQrcodeDialog = dynamic(() => import("@/widgets/link/link-qrcode-dialog").then((mod) => mod.LinkQrcodeDialog));
const DeleteUserDialog = dynamic(() => import("@/features/user/delete-user").then((mod) => mod.DeleteUserDialog));

const dialogs = {
  "create-link": CreateLinkDialog,
  "delete-link": DeleteLinkDialog,
  "link-qrcode": LinkQrcodeDialog,
  "delete-user": DeleteUserDialog,
} as const;

type DialogState =
  | {
      [K in keyof typeof dialogs]: {
        type: K;
        props: Omit<ComponentPropsWithoutRef<(typeof dialogs)[K]>, "openDialog" | "setOpenDialog">;
      };
    }[keyof typeof dialogs]
  | {
      type: null;
      props: null;
    };

interface DialogProviderProps {
  children: ReactNode;
}

const DialogProvider = ({ children }: DialogProviderProps) => {
  const [state, setState] = useState<DialogState>({ type: null, props: null });
  const currentDialog = state.type && dialogs[state.type];

  const handleOpen = (value: boolean) => {
    if (value) {
      setState(state);
    } else {
      setState({ type: null, props: null });
    }
  };

  return (
    <DialogContext.Provider value={{ state, setState }}>
      {children}
      <Suspense>
        {currentDialog ? (
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          createElement(currentDialog as any, {
            openDialog: true,
            setOpenDialog: (value: boolean) => handleOpen(value),
            ...(state.props ?? {}),
          })
        ) : (
          <></>
        )}
      </Suspense>
    </DialogContext.Provider>
  );
};

export { DialogProvider, type DialogState };
