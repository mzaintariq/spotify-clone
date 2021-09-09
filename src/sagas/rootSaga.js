import { fork, all } from "redux-saga/effects";

import { authSaga } from "./auth";
import { newReleasesSaga } from "./newreleases";
import { featuredSaga } from "./featured";
import { userDataSaga } from "./user";
import { playlistSaga } from "./playlist";
import { getMoreSaga } from "./playlist_loadmore";
import { searchResultSaga } from "./search";
import { albumSaga } from "./album";
import { artistSaga } from "./artist";
import { librarySaga } from "./library";
import { getMoreLibraryTracksSaga } from "./library_loadmore";
import { userTopSaga } from "./userTop";
import { categoryListSaga } from "./categoryList";
import { categoryDataSaga } from "./category";

export function* watcherSaga() {
  yield all([
    fork(authSaga),
    fork(newReleasesSaga),
    fork(featuredSaga),
    fork(userDataSaga),
    fork(playlistSaga),
    fork(getMoreSaga),
    fork(searchResultSaga),
    fork(albumSaga),
    fork(artistSaga),
    fork(librarySaga),
    fork(getMoreLibraryTracksSaga),
    fork(userTopSaga),
    fork(categoryListSaga),
    fork(categoryDataSaga),
  ]);
}
