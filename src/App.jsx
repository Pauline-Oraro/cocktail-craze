import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () =>{

  return (
    <div>
      <h1 className="bg-red-500 text-3xl">cocktail craze</h1>
    </div>
  )
    
}

export default App
