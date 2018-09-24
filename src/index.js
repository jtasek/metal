import React from 'react'
import { render } from 'react-dom'
import App from './components/App'
// import { AppContainer } from 'react-hot-loader'

const element = document.getElementById('app')

render(<App />, element)

// const renderComponent = Component => {
//   render(
//     <AppContainer>
//       <Component />
//     </AppContainer>,
//     element
//   )
// }

// renderComponent(App)

// // Hot Module Replacement API
// if (module.hot) {
//   module.hot.accept('./components/App', () => {
//     renderComponent(App)
//   })
// }
