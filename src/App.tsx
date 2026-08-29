import { CallToAction } from './components/CallToAction'
import { DigitalBoundaries } from './components/DigitalBoundaries'
import { FocusTimer } from './components/FocusTimer'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Home } from './components/Home'
import { Manifesto } from './components/Manifesto'
import { Membership } from './components/Membership'
import { Progress } from './components/Progress'
import { Questions } from './components/Questions'
import { SoundScapes } from './components/SoundScape'
import { TheDifference } from './components/TheDifference'
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
        <TheDifference />
        <Membership />
        <Questions />
        <CallToAction />
      </main>
      <Footer />
    </div>
  )
}

export default App
