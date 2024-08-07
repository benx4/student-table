import styled from "styled-components";

const PageArrowWapper = styled.em<{ place: "left" | "right" }>`
  display: block;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #1970c0;

  position: absolute;
  top: 40%;
  ${(props) => (props.place === "left" ? "left:41px" : "right:41px")};
  color: white;
  font-size: 34px;
  text-align: center;
  line-height: 1.5;
`;

type PageArrowProps = {
  text: string;
  place?: "right" | "left";
  clickHandler: () => void;
};

const PageArrow = ({ text, place = "left", clickHandler }: PageArrowProps) => {
  return (
    <PageArrowWapper place={place} onClick={() => clickHandler()}>
      {text}
    </PageArrowWapper>
  );
};

export default PageArrow;
