import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './routes/Home'
import RestaurantDetailPage from './routes/RestaurantDetailPage'
import UpdatePage from './routes/UpdatePage'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/restaurants/:id/update' element={<UpdatePage />} />
          <Route exact path='/restaurants/:id' element={<RestaurantDetailPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
