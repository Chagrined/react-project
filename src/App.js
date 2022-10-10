import { Route, Routes } from 'react-router-dom';
import './App.css';

import Dialogs from './components/Pages/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import News from './components/Pages/News/News';
import Profile from './components/Pages/Profile/Profile';
import Music from './components/Pages/Music/Music';
import Settings from './components/Pages/Settings/Settings';
import DialogsContainer from './components/Pages/Dialogs/DialogsContainer';


function App(props) {


  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className='content'>
        <Routes>
          <Route path='/*' element={<Profile />} />
          <Route path='/dialogs/*' element={<DialogsContainer />} />
          <Route path='/news/' element={<News />} />
          <Route path='/music/' element={<Music />} />
          <Route path='/settings/' element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
