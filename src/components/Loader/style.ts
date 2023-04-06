import styled from "styled-components";

export const Img = styled.img`
  margin: 25px auto;
  animation: spin 2s linear infinite;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`