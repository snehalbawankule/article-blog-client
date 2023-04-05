import styled from "styled-components";
const pxToRem = (size: number) => `${size / 16}rem`;

const PostButton = styled.button`
  color: #ffffff;
  height: 30px;
  font-weight: 300;
  margin-left: ${pxToRem(14)};
  font-size: ${pxToRem(16)};
  padding-left: ${pxToRem(20)};
  padding-right: ${pxToRem(20)};
  background: #2f2e41;
  border-radius: ${pxToRem(10)};
`;
const Input = styled.input`
  font-weight: 300;
  width: ${pxToRem(250)};
  font-size: ${pxToRem(17)};
  border-width: 0 0 2px;
  margin-top: ${pxToRem(10)};
  @media (min-width: 768px) {
    width: ${pxToRem(530)};
  }
  @media (min-width: 1024px) {
    width: ${pxToRem(780)};
  }
`;

const LengthTextWrap = styled.div`
  font-weight: 500;
  padding-top: ${pxToRem(5)};
  font-size: ${pxToRem(14)};
  color: black;
  font-family: "Poppins";
`;
const TextWrap04 = styled.div`
  font-weight: 300;

  font-size: ${pxToRem(16)};
  color: #6d6d6d;
`;
const ReplyInput = styled.input`
  font-weight: 300;
  width: ${pxToRem(200)};
  font-size: ${pxToRem(17)};
  border-width: 0 0 2px;

  @media (max-width: 767px) {
    margin-bottom: ${pxToRem(30)};
  }
`;
const ButtonReply = styled.button`
  font-weight: 300;
  border: none;
  background: none;
  font-size: ${pxToRem(10)};
  color: #6d6d6d;
  margin-top: 5px;
  margin-bottom: 20px;
`;
const PostReplyButton = styled.button`
  font-weight: 300;
  font-size: ${pxToRem(10)};
  background: #2f2e41;
  color: #ffffff;
  border-radius: ${pxToRem(10)};
`;
export {
  PostButton,
  Input,
  LengthTextWrap,
  TextWrap04,
  ReplyInput,
  ButtonReply,
  PostReplyButton,
};
