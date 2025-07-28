import Banner from './components/Banner'
import Header from './components/Header'
import Products from './components/Products'
import { GlobalCss } from './styles'
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom'

const routes = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Banner />
        <Products />
      </>
    )
  }
])

function App() {
  return (
    <>
      <GlobalCss />
      <div className="container">
        <Header />
      </div>
      <RouterProvider router={routes} />
    </>
  )
}

export default App
