import { Counter } from "./components/Counter/Counter"
import './App.styl'

function App() {

  return (
    <div className="App">
      <Counter stroke={true} quantity={3} pulse={true} size={12} baseColor="secondary"/>
    </div>
    
  )
}

export default App
