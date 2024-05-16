import styled from "styled-components";
import { DEVICE_BREAKPOINT } from "../../styles/deviceBreakpoint";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 24px;
  padding: 16px 0;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.GRAY_500};

  > h1 {
    font-size: 2rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINT.XS}) {
    > h1 {
      font-size: 1.5rem;
      flex: 1;
    }
  }
`;

export const Menu = styled.button`
  background: none;
  border: none;
  display: none;

  > svg {
    font-size: 2.5rem;
    color: ${({ theme }) => theme.COLORS.BLUE_200};
  }

  @media (max-width: ${DEVICE_BREAKPOINT.MD}) {
    display: block;
  }

  @media (max-width: ${DEVICE_BREAKPOINT.XS}) {
    > svg {
      font-size: 2rem;
    }
  }
`;