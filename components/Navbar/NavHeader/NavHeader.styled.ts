import styled from "styled-components";

import { TypoStyle } from "@/components/Typography";
import { Theme, FontWeight } from "@/foundations";

export const Header = styled.header`
  border-bottom: 1px solid ${Theme.borderColor.lightest};
`;

export const Hgroup = styled.hgroup`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  // TODO: 크로스 브라우징 이슈 체크
  gap: 20px;
  height: 112px;
`;

export const Greeting = styled.h1`
  margin: 0 0 3px 0;
  ${TypoStyle}
`;

export const Username = styled.span`
  ${TypoStyle}
`;

export const Email = styled.h2`
  margin: 0;
  ${TypoStyle}
`;

export const Message = styled.h2`
  margin: 0;
  ${TypoStyle}

  > strong {
    font-weight: ${FontWeight.bold};
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;

  width: 240px;
  height: 52px;
  padding: 0 20px;
  margin: 40px 0;
  border-radius: 6px;
  border: none;

  background-color: ${Theme.bgColor.primary};
  cursor: pointer;
`;
