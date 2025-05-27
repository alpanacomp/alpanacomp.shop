import { Player } from "@lottiefiles/react-lottie-player";
import loaderAnimation from "../assets/hero.json";

function Loader() {
  return (
    <div className="fixed inset-0 z-[9999] bg-white dark:bg-gray-900 flex items-center justify-center">
      <Player
        autoplay
        loop
        src={loaderAnimation}
        style={{ height: "320px", width: "320px" }}
      />
    </div>
  );
}

export default Loader;
