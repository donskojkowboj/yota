import './styles/App.scss'
import qr from './assets/images/qr.png'
function App() {

  return (
    <>
        <div className="starting-point">
            Hello World
          
        </div>
        <img className="random-img" src={qr} alt="qr" />
    </>
  )
}

export default App
