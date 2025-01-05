import Body from "./component/body/Body";
import NavBar from "./component/header/NavBar";
import Footer from "./component/footer/Footer";
// import CopyFigmaComponentButton from './component/body/CopyFigmaComponentButton';
// import copyFigmaToClipboard from './component/body/copyFigmaToClipboard'


export default function Home() {
  return (
    <div>
      <NavBar className='px-[]'/>
      <Body/>
      {/* <copyFigmaToClipboard/> */}
      <Footer/>
    </div>
  );
}
