import type { ReactNode } from "react";

export type children = ReactNode | ReactNode[];

export interface Menu {
  name: string;
  en_name?: string;
  href: string;
  child?: Menu[];
}

export type Navigation = Menu[];

export interface HeaderProps {
  navigation: Navigation;
}

export interface FooterProps {
  navigation: Navigation;
}

export interface MobileMenuProps {
  navigation: Navigation;
}

export interface MenuProps {
  navigation: Navigation;
}

export interface MagaMenuProps {
  navigation: Navigation;
}
