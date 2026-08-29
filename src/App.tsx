import { DigitalBoundaries } from './components/DigitalBoundaries'
import { FocusTimer } from './components/FocusTimer'
import { Header } from './components/Header'
import { Home } from './components/Home'
import { Manifesto } from './components/Manifesto'
import { Progress } from './components/Progress'
import { SoundScapes } from './components/SoundScape'
import { TheJourney } from './components/TheJourney'
import { Voices } from './components/Voices'

function App() {
  return (
    <div className="bg-background text-foreground min-h-screen w-full overflow-x-hidden">
      <Header />
      <main className="flex w-full flex-col">
        <Home />
        <Manifesto />
        <FocusTimer />
        <SoundScapes />
        <DigitalBoundaries />
        <Progress />
        <TheJourney />
        <Voices />
      </main>
    </div>
  )
}

export default App
