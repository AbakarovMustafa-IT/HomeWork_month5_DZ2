import { types } from "./types";

export function changeTitleAction() {
  return {
    type: types.MAIN_TITLE
  }
}

export function withParamsAction(title) {
  return {
    type: types.WITH_PARAMS,
    payload: title
  }
}

export function changeInputAction(name) {
  return {
    type: types.INPUT_VALUE,
    payload: name
  }
}

export function addUserAction(name) {
  return {
    type: types.ADD_USER,
    payload: name
  }
}

export const delAllUsers = () => {
  return {
    type: types.DEL_ALLUSERS
  }
}
