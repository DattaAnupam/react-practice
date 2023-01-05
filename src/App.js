import { Routes, Route } from 'react-router-dom';
import Home from './components/Home.js';
import PageOne from './components/PageOne.js';
import PageThree from './components/PageThree.js';
import PageTwo from './components/PageTwo.js';

function App() {
  return (
    <div ClassName="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='pageone' element={<PageOne/>} />
        <Route path='pagetwo' element={<PageTwo/>} />
        <Route path='pagethree' element={<PageThree/>}/>
      </Routes>
    </div>
  )
}

export default App;
