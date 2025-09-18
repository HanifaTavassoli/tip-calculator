import logo from "../../public/assets/images/logo.svg";
import Tip from "../components/Tip";
function Home() {
  return (
    <>
      <div className="min-h-screen flex flex-col justify-center items-center gap-16 bg-neutral-lighter font-monospace pt-10 pb-2">
        <div>
          <img src={logo} alt={`${logo} icon`} className="h-10" />
        </div>
        <Tip />
      </div>
    </>
  );
}

export default Home;
