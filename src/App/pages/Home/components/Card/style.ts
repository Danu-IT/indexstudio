import styled from "styled-components"

interface Props {
    view: boolean
}

export const Container = styled.div<Props>`
  display: ${({ view }) => (view ? 'flex' : 'block')};
  align-items: center;
  width: ${({ view }) => (view ? '472px' : '224px')};
  height: ${({ view }) => (view ? '134px' : '364px')};
  filter: drop-shadow(0px 0px 16px rgba(0, 0, 0, 0.08));
  @media (max-width: 768px) {
    width: ${({ view }) => (view ? '300px' : '224px')};
  } 
`
export const Content = styled.div<Props>`
  padding: ${({ view }) =>
    view ? '10px 15px 19px 12px' : '12px 10px 12px 19px'};
  width: ${({ view }) => (view ? '316px' : '224px')};
  height: ${({ view }) => (view ? '134px' : '104px')};
  min-width: 0;
  background-color: white;
  border-radius: ${({ view }) => (view ? '0 12px 12px 0' : '0 0 12px 12px')};
`
export const Price = styled.div`
  font-weight: 700;
  font-size: 22px;
  line-height: 25px;
  color: #2c2c2c;
`
export const PriceAndLike = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Button = styled.div<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 94px;
  height: 24px;
  background: white;
  color: #2c2c2c;
  font-weight: 400;
  font-size: 12px;
  border-radius: 8px;
  position: absolute;
  top: 8px;
  left: ${({ view }) => (view ? '34px' : '66px')};
  z-index: 1;
  @media (max-width: 768px) {
    left: ${({ view }) => (view ? '0px' : '66px')}; 
    font-size: 9px;
  } 
`

export const Title = styled.div<Props>`
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: #2c2c2c;
  margin: ${({ view }) => (view ? '10px 0 40px 0' : '10px 0')};
`
export const TownAndTime = styled.div`
  display: flex;
  justify-content: space-between;
`
export const Town = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #8f8f8f;
`
export const Date = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  text-align: right;
  color: #8f8f8f;
`