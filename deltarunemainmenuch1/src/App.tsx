import './App.css'
import DeltaruneMenu from './components/DeltaruneMenu'
import bgMusic from './assets/soundeffects/mainmenu.mp3'
import { useEffect, useRef } from 'react'

function App() {
  const audioRef = useRef<HTMLAudioElement>(null);

  // Set the volume of the audio
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.2;
    }
  }, []);

  return (
    <>
      <div className="main-body">
        
        <audio ref={audioRef} src={bgMusic} autoPlay loop />
        <DeltaruneMenu/>

      </div>
    </>
  )
}

export default App
