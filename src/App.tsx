import { FocusTimer } from './components/FocusTimer'
import { Header } from './components/Header'
import { Home } from './components/Home'
import { Manifesto } from './components/Manifesto'

function App() {
  return (
    <div className="min-h-screen w-full bg-background text-foreground overflow-x-hidden">
      <Header />
      <main className="flex flex-col w-full">
        <Home />
        <Manifesto />
        <FocusTimer />
      </main>
    </div>
  )
}

export default App
