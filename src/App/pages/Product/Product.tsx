import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ICard } from '../../../interfaces/card'
import { API_ENDPOINTS } from '../../../utils/api'
import axios from 'axios'
import styled from 'styled-components'
import { IoIosArrowRoundBack } from 'react-icons/io'
import Card from './components/Card'

const Product = () => {
  const [data, setData] = useState<ICard>()
  const [error, setError] = useState(false)
  const { id } = useParams()
  const navigate = useNavigate()

  const getData = async () => {
    try {
      const response = await axios.get<ICard>(`${API_ENDPOINTS.PRODUCT}/${id}`)
      setData(response.data)
    } catch (err) {
      setError(true)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <Container>
      <Card item={data}></Card>
      <Back onClick={() => navigate(`/`)}>
        <IoIosArrowRoundBack size={30}></IoIosArrowRoundBack>
      </Back>
    </Container>
  )
}

const Container = styled.div`
  margin-top: 50px;
`

const Back = styled.div`
  position: fixed;
  top: 10px;
  left: 20px;
`

export default Product
