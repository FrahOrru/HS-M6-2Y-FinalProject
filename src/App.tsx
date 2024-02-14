import './App.css'
import ResearchScreen from './components/research'
import HomeScreen from './components/home'
import PicturesScreen from './components/pictures'

function App() {
  return (
    <div className="bg-general">
      <HomeScreen></HomeScreen>
      <ResearchScreen></ResearchScreen>
      <PicturesScreen></PicturesScreen>
    </div>
  )
}

export default App
