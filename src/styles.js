import styled from "styled-components";

const sizeS = "14px";
const sizeM = "16px";
const sizeL = "24px";

export const Wrapper = styled.div`
  display: flex;
  color: #fff;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: center;
  padding: ${sizeS};
  border: solid 1px grey;
  background-color: ${(props) => (props.isPrimary ? "#3F51B5" : "#312f41")};
`;

export const Name = styled.h3`
  font-size: ${sizeL};
  margin-bottom: 0;
`;

export const Bio = styled.p`
  font-size: ${sizeM};
`;

export const SocialURL = styled.a`
  text-decoration: none;
  font-size: ${sizeS};
  color: #2196f3;
`;
