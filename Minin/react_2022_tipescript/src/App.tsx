import { AboutPage } from './pages/AboutPage'
import { ProductsPage } from './pages/ProductsPage'
import { Navigation } from './components/Navigation'
import { Route, Routes } from 'react-router-dom'





function App() {




  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/' element={<ProductsPage />} />
        <Route path='/AboutPage' element={<AboutPage />} />
      </Routes>
    </>
  )
}

export default App