---
title: "How to make a routing group context with react router dom?"
description: "I'll show you a solution to a problem I had with the routes when I only needed to wrap a few of them"
date: "2021-05-20"
image: "/posts/react-router-short.jpg"
---

We will start by creating the context **src/globalContext.js**.

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

We are going to create a component where you only need to wrap the routes you need with context.

```javascript
const RouteContextAboutUsers = () => (
  <Provider>
    <Route exact path="/about" component={About} />
    <Route exact path="/users" component={Users} />
  </Provider>
)
```

Here we will see the solution to undestand easily we just need to know that **exact** tag is used to find the exact path.

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

Here the complete example only needs the context **src/globalContext**

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
