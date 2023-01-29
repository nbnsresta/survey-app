import { IOption } from "../interfaces/IOption";
import { styled } from "../theme";
import Flex from "./Flex";
import FlexCenter from "./FlexCenter";

const BaseTextContent = styled("div", {
  display: "flex",
  fontWeight: 600,
  alignItems: "center",
  color: "$midnight",
  height: "12rem",
  textAlign: "start",

  variants: {
    size: {
      sm: {
        fontSize: "2.4rem",
      },
      md: {
        fontSize: "3.2rem",
      },
      lg: {
        fontSize: "5.4rem",
      },
    },
  },
  defaultVariants: {
    size: "sm",
  },
});

const Image = styled("img", {
  height: "6.4rem",
  width: "6.4rem",
  objectFit: "scale-down",
});

export const TextContent = styled(BaseTextContent, {
  padding: "0 2.4rem",
});

interface IProps {
  size?: "sm" | "md";
  content: IOption;
}

const ImageTextContent = ({ size, content }: IProps) => {
  return (
    <Flex>
      <FlexCenter css={{ height: "12rem", width: "12rem" }}>
        <Image src={content.image || "/empty_icon.svg"} alt={content.value} />
      </FlexCenter>
      <BaseTextContent size={size}>{content.label}</BaseTextContent>
    </Flex>
  );
};

const CardContent = ({ content, size }: IProps) => {
  return "image" in content ? (
    <ImageTextContent size={size} content={content} />
  ) : (
    <TextContent size="lg">{content.label}</TextContent>
  );
};
export default CardContent;
