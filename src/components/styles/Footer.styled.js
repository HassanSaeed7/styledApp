import styled from 'styled-components'
import theme from "./Theme"

export const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.colors.footer};
  color: #fff;
  padding: 80px 0 0px;

  ul {
    list-style-type: none;
  }

  ul li {
    margin-bottom: 20px;
  }

  p {
    text-align: center;
    margin-bottom: 0;
  }
  .logo {
    margin-bottom: 2%;
    margin-left: 10%;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    text-align: center;
    ul {
      padding: 0;
    }
    p {
      text-align: center;
    }
  }
`
