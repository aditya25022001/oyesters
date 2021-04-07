import './App.css';
import { Header } from './Components/Header'
import { FrameOne } from './Components/FrameOne'
import { FrameTwo } from './Components/FrameTwo'
import { FrameThree } from './Components/FrameThree'

function App() {
  return (
    <div className="App">
      <Header/>
      <FrameOne/>
      <FrameTwo/>
      <FrameThree/>
    </div>
  );
}

export default App;
