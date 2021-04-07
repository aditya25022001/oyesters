import './App.css';
import { Header } from './Components/Header'
import { FrameOne } from './Components/FrameOne'
import { FrameTwo } from './Components/FrameTwo'
import { FrameThree } from './Components/FrameThree'
import { FrameFour } from './Components/FrameFour'
import { Footer } from './Components/Footer'

function App() {
  return (
    <div className="App">
      <Header/>
      <FrameOne/>
      <FrameTwo/>
      <FrameThree/>
      <FrameFour/>
      <Footer/>
    </div>
  );
}

export default App;
