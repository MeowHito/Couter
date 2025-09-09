import './App.css'
import CounterDec from './component/CouterDec'
import CounterInc from './component/Couterinc'
import CounterScore from './component/CouterScore'

function App() {
  return (
    <>
      <div>
        <CounterScore />
        <CounterInc />
        <CounterDec />
        
      </div>
    </>
  )
}

export default App
