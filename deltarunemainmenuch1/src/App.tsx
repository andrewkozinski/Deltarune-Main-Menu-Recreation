import './App.css'
import DeltaruneMenu from './components/DeltaruneMenu'
import music from './assets/soundeffects/mainmenu.mp3'
import bgMusic from './assets/soundeffects/mainmenu.mp3'
import { useEffect } from 'react'

function App() {

  useEffect(() => {
    const audio = new Audio(bgMusic);
    audio.loop = true;
    audio.volume = 0.5; // Adjust volume as needed
    audio.play().catch((error) => console.error("Audio play failed", error));

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

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
