import { Player } from "@lottiefiles/react-lottie-player";
import loaderAnimation from "../assets/hero.json";

function Loader() {
  return (
    <div className="fixed inset-0 z-[9999] bg-white dark:bg-gray-900 flex items-center justify-center">
      <Player
        autoplay
        loop
        src={loaderAnimation}
        style={{ height: "420px", width: "420px" }}
      />
    </div>
  );
}

export default Loader;
