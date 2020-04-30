import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import store from './store'
import { Provider } from 'react-redux'
import { GlobalStyle } from './style.js'
import { Iconfont } from './static/iconfont/iconfont'
import Header from './components/header/Header'
import Home from './pages/home/Home'
import Detail from './pages/detail/'


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <GlobalStyle />
          <Iconfont />
          <Header />
          <Route path='/' exact component={Home}></Route>
          <Route path='/detail' exact component={Detail}></Route>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
