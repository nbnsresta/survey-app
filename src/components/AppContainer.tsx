import { styled } from "../theme";
import Logo from "./assets/Logo";
import Flex from "./Flex";
import Stack from "./Stack";

const LogoContainer = styled(Flex, {
  justifyContent: "center",
  height: "2.4rem",
});

const AppContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <Stack css={{ gap: "3.6rem" }}>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      {children}
    </Stack>
  );
};

export default AppContainer;
