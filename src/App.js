import React from 'react';
import logo from './logo.svg';
import './App.css';
import image from './topimage.jpg';

function App() {
  const getAge = (year, month, day) => {
    const birthday = new Date(year, month - 1, day);
    const today = new Date();
    const thisYearBirthday = new Date(today.getFullYear(), birthday.getMonth(), birthday.getDate());
    const age = today.getFullYear() - birthday.getFullYear();
    return (today < thisYearBirthday) ? age - 1 : age;
  }

  return (
    <div className="App">

      <header className="App-header">
        <h1 className="titllename">Nariya Kinjyou</h1>
      </header>
      <div className="mainvisual">
        <h2 className="profile">プロフィール</h2>
        <div className="profileitems">
          <h2>金城　功弥</h2>
          <h3>{getAge(1984, 4, 28)}才</h3>
          <h3>住所</h3><h3>埼玉県</h3>
          <h3>趣味</h3><h3>海外ドラマ、ゲーム</h3>
        </div>
        <div className="workhistory">
          <h2>職歴</h2>
          <h3>html css 学習開始</h3>
          <h3></h3>
          <h3></h3>
          <h3></h3>
          <h3></h3>
        </div>
      </div>
    </div>
  );
}

export default App;
