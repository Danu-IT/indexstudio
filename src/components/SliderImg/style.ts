import styled from "styled-components"
import { Swiper } from 'swiper/react';

interface Props {
    view: boolean | null
}
  
export const SwiperCustom = styled(Swiper)<Props>`
    width: ${({ view }) => (view ? '156px' : '224px')};
`
  
export const Image = styled.img<Props>`
    width: ${({ view }) => (view ? '156px' : '224px')};
    border-radius: ${({ view }) => (view ? '12px 0 0 12px' : '12px 12px 0 0')};
    height: ${({ view }) => (view ? '134px' : '260px')};
    object-fit: cover;
`