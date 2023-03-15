import { call, takeEvery, put } from "redux-saga/effects";
import { sagaActions } from "./sagaActions";
import getProducts from "./api";
import { IProduct } from "./types";
import { fetchProducts } from "./productSlice";

export function* fetchProductsSaga() {
  try {
    const result: IProduct[] = yield call(() => getProducts());
    yield put(fetchProducts(result));
  } catch (e) {
    yield put({ type: "PRODUCTS_FETCH_FAILED" });
  }
}

export default function* rootSaga() {
  yield takeEvery(sagaActions.FETCH_PRODUCTS_SAGA, fetchProductsSaga);
}