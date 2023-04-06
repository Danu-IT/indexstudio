import styled from "styled-components"
import { AiFillHeart } from 'react-icons/ai';

interface LikeImgProps {
    islike?: boolean
  }

export const LikeImg = styled(AiFillHeart)<LikeImgProps>`
  color: ${({ islike }) => (islike ? '#00A0AB' : '#C7C7C7')};
  &: hover {
    cursor: pointer;
    color: #a4a4a4;
  }
`