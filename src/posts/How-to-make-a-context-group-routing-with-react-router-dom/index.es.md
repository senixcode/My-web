---
title: "¿Cómo hacer un context en grupo de rutas con react router dom?"
description: "Te mostrare una solución a un problema que tuve con las rutas cuando solo necesite envolver algunas"
date: "2021-05-20"
image: "/posts/react-router-short.jpg"
---

Comenzaremos creando el context **src/globalContext.js**.

```javascript
import { createContext, useState } from "react"

export const GlobalContext = createContext(null)

export default function GlobalProvider({ children }) {
  const [test, setTest] = useState("")
  return (
    <GlobalContext.Provider value={{ test, setTest }}>
      {children}
    </GlobalContext.Provider>
  )
}
```

Vamos a crear un componente donde solo requieras envolver las rutas que necesites con el context.

```javascript
const RouteContextAboutUsers = () => (
  <Provider>
    <Route exact path="/about" component={About} />
    <Route exact path="/users" component={Users} />
  </Provider>
)
```

Aquí veremos la solución para entender fácilmente solo necesitamos saber que el tag **exact** se usa para que encuentre la ruta exacta.

```javascript
export default function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          // es necesario poner las rutas exactas arriba
          <Route exact path="/" component={Home} />
          <Route path="/" component={RouteContextAboutUsers} />
        </Switch>
      </div>
    </Router>
  )
}
```

Aquí el ejemplo completo solo necesita el context **src/globalContext**.

```javascript
import React, { useContext } from "react"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import Provider, { GlobalContext } from "./globalContext"
const Navbar = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/users">Users</Link>
      </li>
    </ul>
  </nav>
)
export default function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/" component={RouteContextAboutUsers} />
        </Switch>
      </div>
    </Router>
  )
}
const RouteContextAboutUsers = () => (
  <Provider>
    <Route exact path="/about" component={About} />
    <Route exact path="/users" component={Users} />
  </Provider>
)

function Home() {
  console.log(useContext(GlobalContext))
  return <h2>Home</h2>
}

function About() {
  console.log(useContext(GlobalContext))
  return <h2>About</h2>
}

function Users() {
  console.log(useContext(GlobalContext))
  return <h2>Users</h2>
}
```
