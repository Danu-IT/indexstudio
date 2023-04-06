import styled from "styled-components"
import Skeleton from 'react-loading-skeleton';

interface Props {
    view: boolean
}

export const Container = styled.div<Props>`
  border-radius: 12px;
  position: relative;
  display: ${({ view }) => (view ? 'flex' : '')};
  align-items: center;
`
export const Blank = styled.div<Props>`
  position: absolute;
  background: #f8f8f8;
  border-radius: 3px;
  width: 56px;
  height: 8px;
  bottom: ${({ view }) => (view ? '33px' : '140px')};
  left: ${({ view }) => (view ? '54px' : '90px')};
  z-index: 2;
`

export const Content = styled.div<Props>`
  background-color: #f8f8f8;
  display: flex;
  flex-direction: column;
  align-items: ${({ view }) => (view ? '' : 'center')};
  gap: 10px;
  height: 134px;
  border-radius: ${({ view }) => (view ? '0 12px 12px 0' : '0 0 12px 12px')};
  padding: ${({ view }) => (view ? '5px 15px 19px 12px' : '10px 0 19px 0')};
`

export const Image = styled(Skeleton)<Props>`
  width: ${({ view }) => (view ? '156px' : '224px')};
  border-radius: ${({ view }) => (view ? '12px 0 0 12px' : '12px 12px 0 0')};
  height: ${({ view }) => (view ? '134px' : '260px')};
`
export const DoubleBlocks = styled.div`
  display: flex;
  align-self: normal;
  justify-content: space-around;
`
export const Blocks = styled.div`
  display: flex;
`
export const Left = styled(Skeleton)`
  width: 177px;
  height: 14px;
`
export const Rigth = styled(Skeleton)`
  width: 107px;
  height: 14px;
  margin-left: 8px;
`

export const Title = styled(Skeleton)<Props>`
  width: ${({ view }) => (view ? '256px' : '156px')};
  height: 25px;
  border-radius: 8px;
`
export const Like = styled(Skeleton)<Props>`
  margin-left: ${({ view }) => (view ? '8px' : '')};
  width: 25px;
  border-radius: 6px;
  height: 25px;
`

export const Block = styled(Skeleton)<Props>`
  width: ${({ view }) => (view ? '292px' : '200px')};
  height: 16px;
  border-radius: 6px;
  align-self: start;
`