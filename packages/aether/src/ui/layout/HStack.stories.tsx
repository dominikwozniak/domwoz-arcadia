import type { Meta, StoryObj } from "@storybook/react-native";
import { Text } from "react-native";
import { HStack, VStack } from "./layout";
import { Box } from  "~/_story-components/box";

/**
 * HStack is a layout component that arranges its children horizontally using flexbox.
 * It's a syntactic sugar over `display: flex`.
 * Use Tailwind classes to customize spacing, alignment, and other properties.
 */
const meta: Meta<typeof HStack> = {
  title: "@aether/Layout/HStack",
  component: HStack,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof HStack>;

/**
 * Basic horizontal stack with spacing between items.
 */
export const Basic: Story = {
  render() {
    return (
      <HStack className="gap-4">
        <Box>Item 1</Box>
        <Box>Item 2</Box>
        <Box>Item 3</Box>
      </HStack>
    );
  },
};

/**
 * HStack with different gap sizes.
 */
export const Spacing: Story = {
  render() {
    return (
      <VStack className="gap-8">
        <VStack className="gap-2">
          <Text className="text-sm mb-2">Small gap (gap-2)</Text>
          <HStack className="gap-2">
            <Box>Item 1</Box>
            <Box>Item 2</Box>
            <Box>Item 3</Box>
          </HStack>
        </VStack>
        <VStack className="gap-2">
          <Text className="text-sm mb-2">Medium gap (gap-4)</Text>
          <HStack className="gap-4">
            <Box>Item 1</Box>
            <Box>Item 2</Box>
            <Box>Item 3</Box>
          </HStack>
        </VStack>
        <VStack className="gap-2">
          <Text className="text-sm mb-2">Large gap (gap-8)</Text>
          <HStack className="gap-8">
            <Box>Item 1</Box>
            <Box>Item 2</Box>
            <Box>Item 3</Box>
          </HStack>
        </VStack>
      </VStack>
    );
  },
};

/**
 * HStack with different alignment options.
 */
export const Alignment: Story = {
  render() {
    return (
      <VStack className="gap-8">
        <VStack className="gap-2">
          <Text className="text-sm mb-2">Start aligned (default)</Text>
          <HStack className="items-start gap-2 rounded-lg border border-gray-300 p-4">
            <Box className="h-12">Short</Box>
            <Box className="h-20">Tall</Box>
            <Box className="h-16">Medium</Box>
          </HStack>
        </VStack>
        <VStack className="gap-2">
          <Text className="text-sm mb-2">Center aligned</Text>
          <HStack className="items-center gap-2 rounded-lg border border-gray-300 p-4">
            <Box className="h-12">Short</Box>
            <Box className="h-20">Tall</Box>
            <Box className="h-16">Medium</Box>
          </HStack>
        </VStack>
        <VStack className="gap-2">
          <Text className="text-sm mb-2">End aligned</Text>
          <HStack className="items-end gap-2 rounded-lg border border-gray-300 p-4">
            <Box className="h-12">Short</Box>
            <Box className="h-20">Tall</Box>
            <Box className="h-16">Medium</Box>
          </HStack>
        </VStack>
      </VStack>
    );
  },
};

/**
 * HStack with wrapping enabled for responsive content.
 */
export const Wrapping: Story = {
  render() {
    return (
      <VStack className="gap-2">
        <Text className="text-sm mb-2">Wrapping enabled (flex-wrap)</Text>
        <HStack className="flex-wrap gap-2 rounded-lg border border-gray-300 p-4 max-w-md">
          <Box>Item 1</Box>
          <Box>Item 2</Box>
          <Box>Item 3</Box>
          <Box>Item 4</Box>
          <Box>Item 5</Box>
          <Box>Item 6</Box>
        </HStack>
      </VStack>
    );
  },
};
