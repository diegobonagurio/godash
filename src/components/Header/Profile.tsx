import { Flex, Box, Avatar, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Gilberto Marques</Text>
          <Text color="gray.300">gil.marques@gmail.com</Text>
        </Box>
      )}

      <Avatar size="md" name="Gilberto Marques" />
    </Flex>
  );
}
