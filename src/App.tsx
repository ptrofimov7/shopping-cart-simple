import { Provider } from "react-redux";
import { store } from './app/store'
import { sagaActions } from "./features/shopping-cart/sagaActions";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom"
import Home from "./pages/Home";
import Cart from "./pages/Cart";

store.dispatch({ type: sagaActions.FETCH_PRODUCTS_SAGA })

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route
            path="*"
            element={<Navigate to="/" replace />}
          />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
