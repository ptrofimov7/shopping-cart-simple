import { call, takeEvery, put } from "redux-saga/effects";
import getProducts from "./api";
import { IProduct } from "./types";
import { fetchProductsSuccess, fetchProductsFailure } from "./productSlice";
import { sagaActions } from "./sagaActions";

export function* fetchProductsSaga() {
  try {
    const result: IProduct[] = yield call(() => getProducts());
    yield put(fetchProductsSuccess(result));
  } catch (e) {
    yield put(fetchProductsFailure('Error with fetching products'));
  }
}

export default function* rootSaga() {
  yield takeEvery(sagaActions.FETCH_PRODUCTS_SAGA, fetchProductsSaga);
}