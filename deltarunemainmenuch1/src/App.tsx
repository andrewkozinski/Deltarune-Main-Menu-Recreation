import './App.css'
import DeltaruneMenu from './components/DeltaruneMenu'
import music from './assets/soundeffects/mainmenu.mp3'

function App() {

  console.log(music)

  return (
    <>
      <div className="main-body">
        
        <audio autoPlay loop>
            <source src={music} type="audio/mpeg"/>
            Your browser does not support the audio element.
        </audio>
        

        <DeltaruneMenu/>

      </div>
    </>
  )
}

export default App
