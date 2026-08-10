import Locale from "./Locale";
import { ReactComponent as SoundIcon } from "../assets/icons/sound-on.svg";
import { ReactComponent as NightMode } from "../assets/icons/night-mode.svg";

export default function Header({ musicPlaying, setMusicPlaying }) {

  const onSoundIconClick = () => {
    setMusicPlaying(!musicPlaying);
  }
  return (
    <header className="App-header">
      <Locale />
      <SoundIcon onClick={onSoundIconClick} />
      <NightMode />
    </header>
  );
}
