import styled from "styled-components";
const pxToRem = (size: number) => `${size / 16}rem`;

const CommentsBox = styled.div`
  overflow-y: scroll;
  height: ${pxToRem(650)};
  width: ${pxToRem(330)};
  @media (min-width: 768px) {
    height: ${pxToRem(280)};
    width: ${pxToRem(900)};
  }
`;
export { CommentsBox };
