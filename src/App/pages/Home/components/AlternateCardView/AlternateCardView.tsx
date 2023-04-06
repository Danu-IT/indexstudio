import { FC } from 'react'
import { Container, Rectangle, Square } from './style'

interface AlternateCardViewProps {
  view: null | boolean
  changeViewReq: () => void
  changeViewSq: () => void
}

const AlternateCardView: FC<AlternateCardViewProps> = ({
  view,
  changeViewReq,
  changeViewSq,
}) => {
  return (
    <Container>
      <div onClick={changeViewSq}>
        <Square view={view} size={36}></Square>
      </div>
      <div onClick={changeViewReq}>
        <Rectangle view={view} size={28}></Rectangle>
      </div>
    </Container>
  )
}

export default AlternateCardView
