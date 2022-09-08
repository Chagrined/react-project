import { Route, Routes } from 'react-router-dom';
import './App.css';

import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';

function App(props) {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className='content'>
        <Routes>
          <Route path='/' element={<Profile posts={props.posts} />} />
          <Route path='/dialogs/*' element={<Dialogs message={props.message} dialog={props.dialog} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
