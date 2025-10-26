import React from "react";

import {
  TextComponentContext,
  useProvideDefaultTextComponent,
} from "./use-text-component";
import type { TextProviderProps } from "./types";

export const TextComponentProvider = ({
  children,
  value,
}: {
  children: React.ReactNode;
  value?: TextProviderProps;
}) => {
  const defaultValue = useProvideDefaultTextComponent();

  return (
    <TextComponentContext.Provider value={value ?? defaultValue}>
      {children}
    </TextComponentContext.Provider>
  );
};
