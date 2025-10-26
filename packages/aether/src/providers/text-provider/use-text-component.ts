import { createContext, useContext } from "react";
import type { TextProviderProps } from "./types";

export const TextComponentContext = createContext<TextProviderProps>(
  {} as TextProviderProps,
);

export const useProvideDefaultTextComponent = () => {
  return {
    allowFontScaling: true,
    maxFontSizeMultiplier: 1.5,
  } satisfies TextProviderProps;
};

export const useTextComponent = () => {
  const context = useContext(TextComponentContext);
  if (!Object.keys(context).length) {
    throw new Error(
      "useTextComponent must be used within a TextComponentProvider",
    );
  }
  return context;
};
