import { FC, ReactNode } from 'react'
import styled from 'styled-components'
import { Container } from './style'

interface ViewAllProps {
  page: number | string
  getData: () => void
  children: ReactNode
}

const ViewMore: FC<ViewAllProps> = ({ children, page, getData }) => {
  return (
    <Container>
      {page !== 'all' && <div onClick={getData}>{children}</div>}
    </Container>
  )
}

export default ViewMore
