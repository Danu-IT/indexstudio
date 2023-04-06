import styled from "styled-components"

export const Views = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 35px;
  @media (max-width: 768px) {
    justify-content: center;
  }
`

export const Cards = styled.div`
  display: flex;
  justify-content: center;
  gap: 24px;
  flex-wrap: wrap;
`

export const Error = styled.div`
  display: flex;
  flex-direction: column;
`

export const ErrorText = styled.div`
  text-align: center;
`

export const Blank = styled.div`
  font-weight: 400;
  font-size: 14.4px;
  line-height: 17px;
  color: #8f8f8f;
  width: 246px;
  text-align: center;
`
export const BlankTitle = styled.div`
  margin-bottom: 9px;
  font-weight: 500;
  font-size: 16.8px;
  line-height: 19px;
  text-align: center;
  color: #00a0ab;
`

export const ButtonView = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 39px;
`

export const ButtonScroll = styled.div`
  position: fixed;
  bottom: 100px;
  right: 100px;
  color: #8f8f8f;
  display: flex;
  align-items: center;
  justify-content: center;
  :hover {
    cursor: pointer;
  }
  @media (max-width: 768px) {
    right: 10px;
    & > span {
      display: none;
    }
  } 
`