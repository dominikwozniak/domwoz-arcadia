import { Text, View } from "react-native";
import { cnx } from "~/utils";

/**
 * Visual placeholder component for demonstrating layout behavior in stories.
 * React Native adaptation of Horizon's Box component.
 *
 * @example
 * ```tsx
 * <Box>Item 1</Box>
 * <Box className="w-24">Small Box</Box>
 * ```
 */
export function Box({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <View className={cnx("rounded-lg bg-blue-600 px-4 py-2", className)}>
      <Text className="text-sm text-white font-medium text-center">
        {children}
      </Text>
    </View>
  );
}
