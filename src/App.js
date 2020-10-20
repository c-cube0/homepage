import React from 'react';
import logo from './logo.svg';
import './App.css';
import image from './topimage.jpg';

function App() {
  return (
    <div className="App">

      <header className="App-header">
        <h1 className="titllename">Nariya Kinjyou</h1>
      </header>
      <div className="mainvisual">
        <h2 className="profile">プロフィール</h2>
        <div className="profileitems">
          <h3>氏名</h3><h2>金城　功弥</h2>
          <h3>年齢</h3><h3>36才</h3>
          <h3>住所</h3><h3>埼玉県</h3>
          <h3>趣味</h3><h3>海外ドラマ、ゲーム</h3>
        </div>
        <div className="workhistory">

        </div>
      </div>
    </div>
  );
}

export default App;
