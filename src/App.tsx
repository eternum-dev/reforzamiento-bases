import { Counter } from "./components/Counter"
import { CounterBy } from "./components/CounterBy"
import { CounterEffect } from "./components/CounterEffect"
import { CounterHook } from './components/CounterHook';


function App() {
  return (
    <>
      <h1>hola mundo</h1>
      <hr />

      <Counter initialValue={2} />
      <CounterBy />
      <CounterEffect />
      <CounterHook />
    </>
  )
}

export default App
