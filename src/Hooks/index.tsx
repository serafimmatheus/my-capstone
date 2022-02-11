import { ChakraProvider } from "@chakra-ui/react";
import { ReactNode } from "react";
import { theme } from "../Styles/theme";

interface PropsChildren {
  children: ReactNode;
}

export const Providers = ({ children }: PropsChildren) => (
  <ChakraProvider theme={theme}>{children}</ChakraProvider>
);
