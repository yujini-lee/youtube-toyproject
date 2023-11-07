import {Reset} from 'styled-reset'
import "./App.css";
import Header from "./components/Header";
import List from "./components/List";
import SideBar from './components/SideBar';

function App() {
  return (
    <>
      <Reset/>
      <Header />
      <SideBar/>
      <List />
    </>
  );
}

export default App;
