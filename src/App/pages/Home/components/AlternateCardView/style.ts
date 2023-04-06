import styled from "styled-components";
import Skeleton from 'react-loading-skeleton';
import { MdGridView } from 'react-icons/md';
import { BsViewStacked } from 'react-icons/bs';

interface iconsProps {
    view: null | boolean
  }

export const Container = styled.div`
  margin: 0 0 26px 0;
  color: #c7c7c7;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  & > * {
    cursor: pointer;
  }
`

export const Square = styled(MdGridView)<iconsProps>`
  color: ${({ view }) => (!view ? '#00A0AB' : '#c7c7c7')};
`

export const Rectangle = styled(BsViewStacked)<iconsProps>`
  color: ${({ view }) => (view ? '#00A0AB' : '#c7c7c7')};
`

export const Block = styled(Skeleton)`
  width: 84px;
  height: 39px;
  background: #eaeaea;
  border-radius: 8px;
`