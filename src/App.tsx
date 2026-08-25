import { FocusTimer } from './components/FocusTimer'
import { Header } from './components/Header'
import { Home } from './components/Home'
import { Manifesto } from './components/Manifesto'
import { SoundScapes } from './components/SoundScape'

function App() {
  return (
    <div className="bg-background text-foreground min-h-screen w-full overflow-x-hidden">
      <Header />
      <main className="flex w-full flex-col">
        <Home />
        <Manifesto />
        <FocusTimer />
        <SoundScapes />
      </main>
    </div>
  )
}

export default App
