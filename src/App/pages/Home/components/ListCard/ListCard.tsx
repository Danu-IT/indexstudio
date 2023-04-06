import { FC } from 'react'
import { ICard } from '../../../../../interfaces/card'
import Card from '../Card'
import styled from 'styled-components'

interface ListCardProps {
  items: ICard[]
  changeLike: (id: string) => void
  view: boolean
}

const ListCard: FC<ListCardProps> = ({ items, changeLike, view }) => {
  return (
    <>
      {items.map((el) => (
        <Card view={view} changeLike={changeLike} data={el} key={el.id}></Card>
      ))}
    </>
  )
}

const Cards = styled.div``

export default ListCard
