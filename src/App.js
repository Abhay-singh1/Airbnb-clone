import './App.css';
import Header from './Components/Header';
import Chips from './Components/Chips';
import Experience from './Components/Experience';
import Cards from './Components/Cards';
import styled from 'styled-components'

function App() {
  return (
    <div className="App">
      <Header />
      <Experience />
      <Chips />
      <Cards />
    </div>
  );
}

export default App;
