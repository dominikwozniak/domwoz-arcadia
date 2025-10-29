import type { Meta, StoryObj } from "@storybook/react-native";
import { Text } from "react-native";
import { VStack } from "./layout";
import { Box } from "~/_story-components/box";

/**
 * VStack is a layout component that arranges its children vertically using flexbox.
 * It's a syntactic sugar over `display: flex` with `flex-direction: column`.
 * Use Tailwind classes to customize spacing, alignment, and other properties.
 */
const meta: Meta<typeof VStack> = {
  title: "@aether/Layout/VStack",
  component: VStack,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof VStack>;

/**
 * Basic vertical stack with spacing between items.
 */
export const Basic: Story = {
  render() {
    return (
      <VStack className="gap-4">
        <Box>Item 1</Box>
        <Box>Item 2</Box>
        <Box>Item 3</Box>
      </VStack>
    );
  },
};

/**
 * VStack with different gap sizes.
 */
export const Spacing: Story = {
  render() {
    return (
      <VStack className="gap-8">
        <VStack className="gap-2">
          <Text className="text-sm mb-2">Small gap (gap-2)</Text>
          <VStack className="gap-2">
            <Box>Item 1</Box>
            <Box>Item 2</Box>
            <Box>Item 3</Box>
          </VStack>
        </VStack>
        <VStack className="gap-2">
          <Text className="text-sm mb-2">Medium gap (gap-4)</Text>
          <VStack className="gap-4">
            <Box>Item 1</Box>
            <Box>Item 2</Box>
            <Box>Item 3</Box>
          </VStack>
        </VStack>
        <VStack className="gap-2">
          <Text className="text-sm mb-2">Large gap (gap-8)</Text>
          <VStack className="gap-8">
            <Box>Item 1</Box>
            <Box>Item 2</Box>
            <Box>Item 3</Box>
          </VStack>
        </VStack>
      </VStack>
    );
  },
};

/**
 * VStack with different alignment options.
 */
export const Alignment: Story = {
  render() {
    return (
      <VStack className="gap-8">
        <VStack className="gap-2">
          <Text className="text-sm mb-2">Start aligned (default)</Text>
          <VStack className="items-start gap-2 rounded-lg border border-gray-300 p-4">
            <Box className="w-24">Item 1</Box>
            <Box className="w-32">Item 2</Box>
            <Box className="w-20">Item 3</Box>
          </VStack>
        </VStack>
        <VStack className="gap-2">
          <Text className="text-sm mb-2">Center aligned</Text>
          <VStack className="items-center gap-2 rounded-lg border border-gray-300 p-4">
            <Box className="w-24">Item 1</Box>
            <Box className="w-32">Item 2</Box>
            <Box className="w-20">Item 3</Box>
          </VStack>
        </VStack>
        <VStack className="gap-2">
          <Text className="text-sm mb-2">End aligned</Text>
          <VStack className="items-end gap-2 rounded-lg border border-gray-300 p-4">
            <Box className="w-24">Item 1</Box>
            <Box className="w-32">Item 2</Box>
            <Box className="w-20">Item 3</Box>
          </VStack>
        </VStack>
      </VStack>
    );
  },
};
