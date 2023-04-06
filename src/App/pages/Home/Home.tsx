import axios from 'axios'
import { useState, useEffect, useCallback } from 'react'
import { ICard, ICards } from '../../../interfaces/card'
import { API_ENDPOINTS } from '../../../utils/api'
import ViewMore from './components/ViewMore'
import ListCard from './components/ListCard/ListCard'
import { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import SkeletonCard from './components/Card/Skeleton/SkeletonCard'
import { createArray } from '../../../utils/formate'
import AlternateCardView from './components/AlternateCardView/AlternateCardView'
import SkeletonCardView from './components/AlternateCardView/SkeletonCardView'
import SkeletonViewMore from './components/ViewMore/SkeletonViewMore'
import { MdKeyboardArrowUp } from 'react-icons/md'
import Loader from '../../../components/Loader/Loader'
import {
  ButtonScroll,
  ButtonView,
  Blank,
  BlankTitle,
  ErrorText,
  Error,
  Views,
  Cards,
} from './style'

const App = () => {
  const [data, setData] = useState<ICard[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [skeleton, setSkeleton] = useState(true)
  const [error, setError] = useState(false)

  const [scroll, setScroll] = useState(0)
  const [currentPage, setCurrentPage] = useState<number | string>(1)
  const [alternateCard, setAlternateCard] = useState<boolean>(true)

  const getData = async () => {
    try {
      setIsLoading(true)
      const response = await axios.get<ICards>(
        `${API_ENDPOINTS.PRODUCTS}${currentPage}`
      )
      const resp = response.data.items.map((el) => ({
        ...el,
        isLike: false,
      }))
      setData((prev) => [...prev, ...resp])
      currentPage === response.data.pages
        ? setCurrentPage('all')
        : setCurrentPage((prev) => Number(prev) + 1)
    } catch (err) {
      setError(true)
    }
    setIsLoading(false)
    setSkeleton(false)
  }

  const changeLike = (id: string) => {
    return data.filter((el, i) => {
      if (el.id === id) {
        let newArr = [...data]
        newArr[i] = { ...el, isLike: !el.isLike }
        localStorage.setItem('user', JSON.stringify(newArr))
        localStorage.setItem('page', String(currentPage))
        return setData(newArr)
      }
      return el
    })
  }

  useEffect(() => {
    let timeout: any
    if (String(localStorage.getItem('view'))) {
      setAlternateCard(JSON.parse(String(localStorage.getItem('view'))))
    }
    if (JSON.parse(String(localStorage.getItem('user'))) === null) {
      timeout = setTimeout(() => getData(), 300)
    } else {
      setSkeleton(false)
      setData(JSON.parse(String(localStorage.getItem('user'))))
      setCurrentPage(Number(localStorage.getItem('page')))
    }
    return () => clearTimeout(timeout)
  }, [])

  const changeViewReq = () => {
    setAlternateCard(true)
    localStorage.setItem('view', String(true))
  }

  const changeViewSq = () => {
    setAlternateCard(false)
    localStorage.setItem('view', String(false))
  }

  const onScroll = useCallback(() => setScroll(Math.round(window.scrollY)), [])

  useEffect(() => {
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [onScroll])
  const handlerScrol = () => {
    window.scrollTo(0, 0)
  }

  return (
    <div className="App">
      <SkeletonTheme baseColor="#EAEAEA">
        <Views>
          {skeleton ? (
            <SkeletonCardView></SkeletonCardView>
          ) : (
            <AlternateCardView
              changeViewReq={changeViewReq}
              changeViewSq={changeViewSq}
              view={alternateCard}
            ></AlternateCardView>
          )}
        </Views>
        <Cards>
          {skeleton ? (
            createArray().map((el) => (
              <SkeletonCard view={alternateCard} key={el}></SkeletonCard>
            ))
          ) : (
            <ListCard
              view={alternateCard}
              changeLike={changeLike}
              items={data}
            ></ListCard>
          )}
        </Cards>
        {isLoading && <Loader></Loader>}

        <ButtonView>
          {skeleton ? (
            <SkeletonViewMore></SkeletonViewMore>
          ) : (
            <Error>
              {error && <ErrorText>Ошибка при загрузке</ErrorText>}
              <ViewMore page={currentPage} getData={getData}>
                {error
                  ? 'Повторить попытку'
                  : !data.length
                  ? ''
                  : 'Показать еще'}
              </ViewMore>
              {!isLoading && !data.length && (
                <>
                  <BlankTitle>ОБЪЯВЛЕНИЙ НЕ НАЙДЕНО</BlankTitle>
                  <Blank>
                    Простите, по вашему запросу товаров сейчас нет. Задайте
                    запрос по-другому или измените характеристики
                  </Blank>
                </>
              )}
            </Error>
          )}
        </ButtonView>
        {scroll >= 100 && (
          <ButtonScroll onClick={handlerScrol}>
            <MdKeyboardArrowUp size={40}></MdKeyboardArrowUp>
            <span>Вверх</span>
          </ButtonScroll>
        )}
      </SkeletonTheme>
    </div>
  )
}

export default App
