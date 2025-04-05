import Background from "./component/Background";
import Blogs from "./component/Blogs";
import Contact from "./component/Contact";
import Feature from "./component/Feature";
import Footer from "./component/Footer";
import IconButton from "./component/GameIcon";
import Memories from "./component/Memories";
import Products from "./component/Products";
import SendLove from "./component/Sendlove";
import UserUpload from "./component/Userupload";

const API_BASE_URL = "https://detthocamcham.onrender.com"; // Backend's deployed URL
// Use this base URL for all API calls in the frontend

export default function Home() {
  return (
    <>
      <Background />
      <Feature />
      <Products />
      <Blogs />
      <Memories />
      <UserUpload />
      <Contact />
      <SendLove />
      <IconButton />
      <Footer />
    </>
  );
}
