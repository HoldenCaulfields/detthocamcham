
import Background from "./component/Background";
import Contact from "./component/Contact";
import Feature from "./component/Feature";
import Language from "./component/Language";
import Memories from "./component/Memories";
import Navbar from "./component/Navbar";
import Products from "./component/Products";
import SendLove from "./component/Sendlove";

export default function Home() {
  return (
    <>
      <Navbar />
      <Background />
      <Feature />
      <Products />
      <Memories />
      <Contact />
      <SendLove />
    </>
  );
}
