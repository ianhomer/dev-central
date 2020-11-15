import { all, fork } from "redux-saga/effects";

import jiraSaga from "../services/jira/saga";
import mockSaga from "./mockSaga";

export function* saga() {
  yield all([fork(jiraSaga), fork(mockSaga)]);
}
