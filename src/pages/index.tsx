import { Flex, Button, Stack } from "@chakra-ui/react";
import Link from "next/link";
import { Input } from "../components/Form/Input";

export default function Home() {
  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDirection="column"
      >
        <Stack spacing="4">
          <Input type="email" name="email" label="E-mail" />

          <Input type="password" name="password" label="Senha" />
        </Stack>

        <Link href="/dashboard" passHref>
          <Button type="submit" mt="6" colorScheme="pink" size="lg">
            Entrar
          </Button>
        </Link>
      </Flex>
    </Flex>
  );
}
