import type { ComponentType, ComponentProps } from "react";
import type { View } from "react-native";

export type RNComponentType = ComponentType<any>;

export type PolymorphicComponentProps<
  C extends RNComponentType = typeof View,
  Props = object,
> = {
  as?: C;
  className?: string;
} & Props &
  Omit<ComponentProps<C>, keyof Props | "as" | "className">;

export type ViewComponentProps<Props = object> = PolymorphicComponentProps<
  typeof View,
  Props
>;
