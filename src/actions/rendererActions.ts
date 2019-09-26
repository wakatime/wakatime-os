import {
  ON_MAIN_PROCESS_STATE,
  SYNC_MAIN_STATE,
  ENABLE_EDITORS
} from "../constants/rendererActionTypes";
import makeActionCreator, {
  makeActionWithMeta
} from "../utils/makeActionCreator";

export const setMainProcessState = makeActionCreator(
  ON_MAIN_PROCESS_STATE,
  "payload"
);

export const onRenderStoreCreated = makeActionWithMeta({
  forwardToMain: true
})(SYNC_MAIN_STATE);

export const enableEditors = makeActionCreator(ENABLE_EDITORS, "payload");
