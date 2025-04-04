
import Background from "./component/Background";
import Blogs from "./component/Blogs";
import Contact from "./component/Contact";
import Feature from "./component/Feature";
import Footer from "./component/Footer";
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
      <Blogs />
      <Memories />
      <Contact />
      <SendLove />
      <IconButton />
      <Footer />
    </>
  );
}
