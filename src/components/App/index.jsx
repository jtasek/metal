import React, { Component } from 'react'
import styles from './styles.css'
import { hot } from 'react-hot-loader'

const App = () => (
  <div className={styles.app}>
    <h1>Welcome to Metal!</h1>
  </div>
)

export default hot(module)(App)
