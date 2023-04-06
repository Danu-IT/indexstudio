import { Route, Routes } from 'react-router-dom'

import Home from '../../App/pages/Home'
import Product from '../../App/pages/Product/Product'

const publicRoutes = [
  { path: '/', component: Home },
  { path: '/products/:id', component: Product },
]

const Router = () => {
  return (
    <Routes>
      {publicRoutes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={<route.component />}
        />
      ))}
      <Route path="*" element={<Home />} />
    </Routes>
  )
}

export default Router
