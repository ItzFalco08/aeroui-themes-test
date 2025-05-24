import ToggleTheme from "../components/ToggleTheme";
import Button from "../components/aeroui/button";

export default function Home() {
  return (
    <>
    <ToggleTheme />

    <Button variant="outline" >
      Hello world
    </Button>
    </>
  );
}
