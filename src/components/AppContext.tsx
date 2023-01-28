import { styled } from "../theme";

const AppContainer = styled("div", {});

const AppContext = ({ children }: { children: React.ReactNode }) => {
  return <AppContainer>{children}</AppContainer>;
};

export default AppContext;
