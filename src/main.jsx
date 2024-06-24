import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { store } from './store/Store.js'
import { Provider } from 'react-redux'
import TodoList from './TodoList.jsx'
import Debug from './Debug.jsx'
import SelectList from './SelectList.jsx'
// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <Provider store={store}>
//     {/* <App /> */}
//     <TodoList/>
//     </Provider>
    
//   </React.StrictMode>,
// )

// import Landingpage from './Command Palette/Landingpage.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
  <App/>
  </React.StrictMode>
)

//i change the root for a diffierent project so if you want to use main.jsx again go and set script src directory in index.html 




// import { createBrowserRouter ,RouterProvider } from 'react-router-dom'

// const router = createBrowserRouter([
//     {
//         path: "/",
//         element:<App/>
//     },
//     {
//         path: "/home",
//         element:<Landingpage/>
//     },
//     {
//         path: "/about",
//         element:<Landingpage/>
//     },
//     {
//         path: "/contact",
//         element:<Landingpage/>
//     }
// ])

// ReactDOM.createRoot(document.getElementById("root")).render(
//     <React.StrictMode>
//         <RouterProvider router={router}/>
//     </React.StrictMode>
// )
