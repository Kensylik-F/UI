// import { Counter } from "./components/Counter/Counter"
import './App.styl'
import { Button } from './components/Button/Button'

function App() {

  return (
    <div className="App">
      <Button counter={true} onClick={() => console.log('hello')}>Что сделать</Button>
      {/* <Counter stroke={true} quantity={3} pulse={true} size={16} baseColor="secondary"/> */}
    </div>
    
  )
}

export default App
