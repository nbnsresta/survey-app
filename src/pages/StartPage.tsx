import Button from "../components/Button";
import Stack from "../components/Stack";
import { styled } from "../theme";

interface IStartPageProps {
  onContinue: VoidFunction;
}

const Heading = styled("h1", {
  fontWeight: 600,
  fontSize: "$xl",
  lineHeight: "6.4rem",
  textAlign: "center",
  color: "$midnight",
  maxWidth: "80rem",
});

const Subtext = styled("p", {
  fontFamily: "Roboto",
  fontWeight: 400,
  fontSize: "$md",
  lineHeight: "28px",
  color: "$midnight",
});

const RequestText = styled("p", {
  fontWeight: 600,
  fontSize: "$lg",
  lineHeight: "4.2rem",
  textAlign: "center",
  color: "$primary",
  maxWidth: "90rem",
});

const StartPage = ({ onContinue }: IStartPageProps) => {
  return (
    <Stack css={{ alignItems: "center", gap: "2.4rem" }}>
      <Heading>Thank you for requesting a UXCam quote.</Heading>
      <Subtext>Just one more thing before you go:</Subtext>
      <RequestText css={{ marginTop: "2.4rem" }}>
        To help us tailor a plan to your needs, please answer the following
        questions. It will only take 2 minutes!
      </RequestText>
      <Button type="button" size="lg" onClick={onContinue}>
        Continue
      </Button>
    </Stack>
  );
};

export default StartPage;
