import { FC, MouseEvent, useState } from 'react'
import { ICard } from '../../../../../interfaces/card'
import Like from '../../../../../components/Like/Like'
import { formateData, formatePrice } from '../../../../../utils/formate'
import SliderImg from '../../../../../components/SliderImg'
import { useNavigate } from 'react-router-dom'
import {
  Button,
  Container,
  Content,
  Date,
  Price,
  PriceAndLike,
  Title,
  Town,
  TownAndTime,
} from './style'

interface CardProps {
  data: ICard
  changeLike: (id: string) => void
  view: boolean
}

const Card: FC<CardProps> = ({ data, changeLike, view }) => {
  const [updateSwiper, setUpdateSwiper] = useState(false)

  const date = formateData(data.createdAt)
  const price = formatePrice(data.price)
  const navigate = useNavigate()

  const handlerCard = (id: string) => {
    if (!updateSwiper) {
      navigate(`/products/${id}`, { replace: true })
    }
    setUpdateSwiper(false)
  }
  const handlerLike = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
    changeLike(data.id)
  }

  const handlerUpdate = (a: any) => {
    setUpdateSwiper(true)
  }

  return (
    <Container onClick={(e) => handlerCard(data.id)} view={view}>
      <SliderImg update={handlerUpdate} view={view}></SliderImg>
      {data.seen && <Button view={view}>Просмотрено</Button>}
      <Content view={view}>
        <PriceAndLike>
          <Price>{`${price} ₽`}</Price>
          <Like onClick={(e) => handlerLike(e)} isLike={data.isLike}></Like>
        </PriceAndLike>
        <Title view={view}>{data.title}</Title>
        <TownAndTime>
          <Town>{data.address}</Town>
          <Date>{date}</Date>
        </TownAndTime>
      </Content>
    </Container>
  )
}

export default Card
