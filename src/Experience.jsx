import { Physics, Debug } from "@react-three/rapier";
import useGame from "./stores/useGame.jsx";
import Lights from "./components/Lights/Lights.jsx";
import { Level } from "./components/Level/Level.jsx";
import Player from "./components/Player/Player.jsx";
import Effects from "./components/Effect/Effects.jsx";

export default function Experience() {
  const blocksCount = useGame((state) => state.blocksCount);
  const blocksSeed = useGame((state) => state.blocksSeed);

  return (
    <>
      <color args={["#252731"]} attach="background" />

      <Physics>
        {/* <Debug /> */}
        <Lights />
        <Level count={blocksCount} seed={blocksSeed} />
        <Player />
      </Physics>

      <Effects />
    </>
  );
}