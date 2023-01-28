import { styled } from "../theme";

interface IProgressbarProps {
  progress: number;
}

const FixedLayout = styled("div", {
  position: "fixed",
  top: 0,
  left: 0,
  background: "white",
  height: "1.2rem",
  width: "100%",
});

const Progress = styled("div", {
  backgroundColor: "$primary",
  height: "inherit",
  width: 0,
  transition: "width 400ms ease-in-out",
});

const limitProgress = (progress: number) => {
  if (progress > 100) return 100;
  if (progress < 0) return 0;
  return progress;
};

const Progressbar = ({ progress }: IProgressbarProps) => {
  return (
    <FixedLayout>
      <Progress css={{ width: `${limitProgress(progress)}%` }} />
    </FixedLayout>
  );
};

export default Progressbar;
