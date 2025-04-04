
import Background from "./component/Background";
import Contact from "./component/Contact";
import Feature from "./component/Feature";
import IconButton from "./component/GameIcon";
import Memories from "./component/Memories";
import Products from "./component/Products";
import SendLove from "./component/Sendlove";

export default function Home() {
  return (
    <>
      <Background />
      <Feature />
      <Products />
      <Memories />
      <Contact />
      <SendLove />
      <IconButton />
    </>
  );
}
