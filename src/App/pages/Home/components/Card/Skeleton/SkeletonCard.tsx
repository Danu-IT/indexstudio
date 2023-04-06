import { FC } from 'react'
import { Container } from '../style'
import {
  Blank,
  Block,
  Blocks,
  Content,
  DoubleBlocks,
  Image,
  Left,
  Like,
  Rigth,
  Title,
} from './styleSceleton'

interface CardProps {
  view: boolean
}

const SkeletonCard: FC<CardProps> = ({ view }) => {
  return (
    <Container view={view}>
      <Blank view={view}></Blank>
      <Image view={view}></Image>
      <Content view={view}>
        <DoubleBlocks>
          <Title view={view}></Title>
          <Like view={view}></Like>
        </DoubleBlocks>
        <Block view={view} />
        {!view && <Block view={view} />}
        {view && <Block width={116} height={16} view={view} />}
        {view && (
          <Blocks>
            <Left></Left>
            <Rigth></Rigth>
          </Blocks>
        )}
      </Content>
    </Container>
  )
}

export default SkeletonCard
