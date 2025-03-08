import { useState, useEffect } from "react";
import heartImage from "../assets/images/soul.png"; // Undertale/Deltarune soul image
import bgMusic from "../assets/soundeffects/mainmenu.mp3"; // Main menu background music

const DeltaruneMenu = () => {
  const [selectedSlot, setSelectedSlot] = useState(0);
  const slots = ["EMPTY", "EMPTY", "EMPTY"];
  const slotDetails = ["___________", "___________", "___________"];
  const slotTimes = ["--:--", "--:--", "--:--"];

  // Background music
  useEffect(() => {
    const audio = new Audio(bgMusic);
    audio.loop = true;
    audio.volume = 0.2; // Adjust volume as needed
    audio.play().catch((error) => console.error("Audio play failed", error));

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "ArrowUp") {
      setSelectedSlot((prev) => (prev > 0 ? prev - 1 : slots.length - 1));
    } else if (e.key === "ArrowDown") {
      setSelectedSlot((prev) => (prev < slots.length - 1 ? prev + 1 : 0));
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-green-400 font-DeterminationMono">
      {slots.map((slot, index) => (
        <div key={index} className="border border-green-400 p-4 w-125 mb-2 flex items-center relative">
          <div className="absolute left-1.6 top-1/2 transform -translate-y-1/2 flex items-center">
            {selectedSlot === index && <img src={heartImage} alt="Heart" className="w-5 h-5 mr-2" />} 
          </div>
          <div className="flex flex-col w-full pl-8">
            <div className="flex justify-between">
              <span>[{slot}]</span>
              <span>{slotTimes[index]}</span>
            </div>
            <div className="text-green-400">{slotDetails[index]}</div>
          </div>
        </div>
      ))}
      <div className="mt-4 flex gap-22 text-green-400">
        <span>COPY</span>
        <span>ERASE</span>
        <span>JAPANESE</span>
      </div>
    </div>
  );
};

export default DeltaruneMenu;