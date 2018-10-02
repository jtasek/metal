import React, { Component } from 'react'
import styles from './styles.css'
import { hot } from 'react-hot-loader'

const App = () => (
  <div className={styles.app}>
    <h1>
      Welcome to Metal! To get started, edit src/components/App/index.jsx and
      save to reload.
    </h1>
  </div>
)

export default hot(module)(App)
