import styled from "styled-components"

export const Flex = styled.div`
display: flex;
align-items: center;
justify-content: center;
@media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }

.test {
    display: flex;
    flex-direction: column;
    width: 50%;
    align-items: center;
    justify-content: center;
    @media (max-width: ${({ theme }) => theme.mobile}) {
        width: 70%;
      }
}
.test > p {
    width: 50%;
    @media (max-width: ${({ theme }) => theme.mobile}) {
        width: 100%;
      }
    
}

` 

