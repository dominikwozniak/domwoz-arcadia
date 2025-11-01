import { View } from "react-native";
import type { RNComponentType, PolymorphicComponentProps } from "./types";
import { cnx } from "~/utils";

/**
 * Vertical stack layout component. Renders children in a column with flexbox.
 *
 * @example
 * <VStack className="gap-4">
 *   <Text>Item 1</Text>
 *   <Text>Item 2</Text>
 * </VStack>
 *
 * @example
 * // Custom component
 * <VStack as={Pressable} onPress={handlePress}>
 *   <Text>Clickable stack</Text>
 * </VStack>
 */
export function VStack<C extends RNComponentType = typeof View>({
  as,
  className,
  ...props
}: PolymorphicComponentProps<C>) {
  const Component = as ?? View;
  return <Component className={cnx("flex flex-col", className)} {...props} />;
}

VStack.displayName = "Aether.UI.layout.VStack";

/**
 * Horizontal stack layout component. Renders children in a row with flexbox.
 *
 * @example
 * <HStack className="gap-2 items-center">
 *   <Icon name="star" />
 *   <Text>Favorite</Text>
 * </HStack>
 *
 * @example
 * // Custom component
 * <HStack as={ScrollView} horizontal>
 *   <Card />
 *   <Card />
 * </HStack>
 */
export function HStack<C extends RNComponentType = typeof View>({
  as,
  className,
  ...props
}: PolymorphicComponentProps<C>) {
  const Component = as ?? View;
  return <Component className={cnx("flex flex-row", className)} {...props} />;
}

HStack.displayName = "Aether.UI.layout.HStack";
