import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

let postsState = [
  { id: 1, message: 'I learn React', likeCount: 3 },
  { id: 2, message: 'Next i will learn Node.js', likeCount: 25 },
  { id: 3, message: 'Node.js it is platform for javascript', likeCount: 1000 },
  { id: 4, message: 'I like codding', likeCount: 4000 }
]

const messagesState = [
  { message: "Hi", id: 1 },
  { message: "How are you?", id: 2 },
  { message: "what are you doing?", id: 3 },
]
const dialogState = [
  { name: 'Vanya', id: 1 },
  { name: 'Arsen', id: 2 },
  { name: 'Dima', id: 3 }
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App posts={postsState} message={messagesState} dialog={dialogState}/>
    </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
