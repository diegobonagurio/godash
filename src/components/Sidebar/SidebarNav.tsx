import { Stack } from "@chakra-ui/react";
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
  RiWalletLine,
} from "react-icons/ri";
import { HiOutlineAdjustments } from "react-icons/hi";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function SidebarNav() {
  return (
    <Stack spacing="12" align="flex-start">
      <NavSection title="GERAL">
        <NavLink
          href="/dashboard"
          icon={RiDashboardLine}
          children="Dashboard"
        />
        <NavLink href="/users" icon={RiContactsLine} children="Usuários" />
        <NavLink href="/users" icon={RiWalletLine} children="Planos" />
        <NavLink
          href="/users"
          icon={HiOutlineAdjustments}
          children="Configurações"
        />
      </NavSection>

      <NavSection title="AUTOMACAO">
        <NavLink
          href="/forms"
          icon={RiInputMethodLine}
          children="Formularios"
        />
        <NavLink
          href="/automation"
          icon={RiGitMergeLine}
          children="Automacao"
        />
      </NavSection>
    </Stack>
  );
}
