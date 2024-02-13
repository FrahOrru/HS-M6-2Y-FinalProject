import './App.css'
import AboutScreen from './components/about'
import HomeScreen from './components/home'

function App() {
  return (
    <div className="bg-general">
      <HomeScreen></HomeScreen>
      <AboutScreen></AboutScreen>
    </div>
  )
}

export default App
