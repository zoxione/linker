"use client";

import dynamic from "next/dynamic";
import { ComponentPropsWithoutRef, createElement, ReactNode, Suspense, useState } from "react";

import { DialogContext } from "../lib/dialog-context";

const CreateLinkDialog = dynamic(() => import("@/widgets/link/create-link-dialog").then((mod) => mod.CreateLinkDialog));

const dialogs = {
  "create-link": CreateLinkDialog,
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
          createElement(currentDialog as any, {
            openDialog: true,
            setOpenDialog: (value: boolean) => handleOpen(value),
            // @ts-ignore TODO clear
            ...state.props,
          })
        ) : (
          <></>
        )}
      </Suspense>
    </DialogContext.Provider>
  );
};

export { DialogProvider, type DialogState };
