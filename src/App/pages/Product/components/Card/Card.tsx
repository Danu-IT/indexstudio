import { FC } from 'react'
import { ICard } from '../../../../../interfaces/card'
import { formateData, formatePrice } from '../../../../../utils/formate'
import { Address, Container, Content, Img, Price, Title } from './style'

interface CardProps {
  item?: ICard
}

const Card: FC<CardProps> = ({ item }) => {
  const date = item && formateData(item.createdAt)
  const price = item && formatePrice(item.price)
  return (
    <Container>
      <Img src="https://source.unsplash.com/random"></Img>
      <Address>{item?.address}</Address>
      <Content>
        <Title>{item?.title}</Title>
        <Price>{price}₽</Price>
        <div>{date}</div>
      </Content>
    </Container>
  )
}

export default Card
