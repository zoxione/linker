"use client";

import { useCallback, useContext } from "react";

import { DialogState } from "../ui/dialog-provider";
import { DialogContext } from "./dialog.context";

interface UseDialogProps {}

const useDialog = ({}: UseDialogProps = {}) => {
  const context = useContext(DialogContext);

  if (!context) {
    throw new Error("useDialog must be used within an DialogProvider");
  }

  const { state, setState } = context;
  const isOpen = state.type !== null;

  const onOpen = useCallback(
    (state: DialogState) => {
      setState(state);
    },
    [setState],
  );

  const onClose = useCallback(() => {
    setState({ type: null, props: null });
  }, [setState]);

  const onOpenChange = useCallback(
    ({ value, ...state }: DialogState & { value: boolean }) => {
      const action = value ? onOpen : onClose;
      action(state);
    },
    [onOpen, onClose],
  );

  return {
    isOpen,
    onOpen,
    onClose,
    onOpenChange,
  };
};

export { useDialog, type UseDialogProps };
