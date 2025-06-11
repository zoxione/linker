import { createContext } from "react";

import { DialogState } from "../ui/dialog-provider";

interface DialogContextProps {
  state: DialogState;
  setState: (state: DialogState) => void;
}

const DialogContext = createContext<DialogContextProps | null>(null);

export { DialogContext };
