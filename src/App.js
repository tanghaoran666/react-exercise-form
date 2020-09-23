import React from 'react';
import './App.less';
import MyProfile from "./components/MyProfile";

const App = () => {
  return (
    <div className='App'>
      <div><h1>My Profile</h1></div>
      <MyProfile/>
    </div>
  );
};

export default App;