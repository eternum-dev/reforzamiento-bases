import { Counter } from "./components/Counter"
import { CounterBy } from "./components/CounterBy"
import { CounterEffect } from "./components/CounterEffect"
import { CounterHook } from './components/CounterHook';
import { CounterReducerComponent } from "./components/CounterReducer";
import { CounterReducerDiferent } from "./counter-reducer/CounterReducer";


function App() {
  return (
    <>
      <h1>hola mundo</h1>
      <hr />

      <Counter initialValue={2} />
      <CounterBy />
      <CounterEffect />
      <CounterHook />
      <CounterReducerComponent />
      <CounterReducerDiferent />
    </>
  )
}

export default App
