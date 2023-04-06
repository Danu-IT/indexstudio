import styled from "styled-components";
import Skeleton from 'react-loading-skeleton';

export const Container = styled.div`
  cursor: pointer;
  background-color: white;
  color: #00a0ab;
  padding: 8px 15px;
`

export const SkeletonContainer = styled(Skeleton)`
  width: 125px;
  height: 32px;
`