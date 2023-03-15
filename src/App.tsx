import { Provider } from "react-redux";
import { store } from './app/store'
import { sagaActions } from "./features/shopping-cart/sagaActions";
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Home from "./pages/Home";
import { Cart } from "./features/shopping-cart/components";

console.log(store.getState());

store.dispatch({ type: sagaActions.FETCH_PRODUCTS_SAGA })

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
