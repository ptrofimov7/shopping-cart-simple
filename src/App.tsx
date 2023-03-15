import { Provider } from "react-redux";
import { store } from './app/store'
import { sagaActions } from "./features/shopping-cart/sagaActions";

console.log(store.getState());

store.dispatch({type: sagaActions.FETCH_PRODUCTS_SAGA})

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        Fgg
      </div>
    </Provider>
  );
}

export default App;
