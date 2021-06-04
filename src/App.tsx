import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { initialStateType } from './reducers/news';
import {fetchUsers, setUsers} from "./store/users/actions";
import { AppDispatch } from '.';
import {useAppDispatch, useAppSelector} from './hooks/redux';

type iniType = {
  type: string
}
const initi = (): iniType => ({type: "bac"})

console.log(initi())

function App() {

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers())
  }, []);

  const {
    news,
  } = useAppSelector((state) => ({
    news: state.news
  }));

console.log("news", news);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
