// import { Counter } from "./components/Counter/Counter"
import './App.styl'
import { Button } from './components/Button/Button'

function App() {

  return (
    <div className="App">
      <Button counter={true} focused={false} onClick={() => console.log('hello')}>Что сделать</Button>
      {/* <Counter  quantity={5} size={16} baseColor="primary"/> */}
    </div>
    
  )
}

export default App
