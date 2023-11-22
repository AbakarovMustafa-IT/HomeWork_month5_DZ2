import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeTitleAction, withParamsAction } from "../../redux/actions";

function MainPage() {
  const { title } = useSelector(state => state.titleReducer)
  const dispatch = useDispatch()

  const changeTitle = () => {
    dispatch(changeTitleAction())
  }

  const changeTitleWithParans = () => {
    dispatch(withParamsAction("Hello Geeks!"))
  }
  return (
    <div>
      <h1>{title}</h1>
      <button onClick={changeTitle}>change title</button>
      <button onClick={changeTitleWithParans}>with params</button>
    </div>
  )
}

export default MainPage;