import { FC } from 'react'
import { LikeImg } from './style'

interface LikeProps {
  isLike: boolean
  onClick?: (e: any) => void
}

const Like: FC<LikeProps> = ({ onClick, isLike }) => {
  return (
    <div onClick={onClick}>
      <LikeImg islike={isLike}></LikeImg>
    </div>
  )
}

export default Like
