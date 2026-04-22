import About from "./components/About"
import Hero from "./components/Hero"
import Navigation from "./components/Navigation"

function App() {
  

  return (
    <div className="bg-[#20323E] text-[#e8eaed] overflow-x-hidden relative">
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Layered gradient atmosphere */}
        <div className="absolute inset-0 bg-linear-to-b from-secondary/20 via-[#223550] to-secondary/20"></div>
        
        {/* Subtle red glow accents */}
        <div className="absolute top-0 right-1/4 w-125 h-125 bg-secondary/10 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-1/4 left-1/4 w-125 h-125 bg-[#0b192c]/20 rounded-full blur-[150px]"></div>
        
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: 'radial-gradient(1px 1px at 20% 30%, #e8eaed, transparent), radial-gradient(1px 1px at 60% 70%, #e8eaed, transparent), radial-gradient(1px 1px at 50% 50%, #e8eaed, transparent), radial-gradient(1px 1px at 80% 10%, #D75E5E, transparent), radial-gradient(1px 1px at 90% 60%, #e8eaed, transparent), radial-gradient(1px 1px at 33% 80%, #e8eaed, transparent)',
          backgroundSize: '200% 200%'
        }}></div>
      </div>

      <Navigation />
      <main className="relative">
        <Hero />
        <About />
      </main>
    </div>
  )
}

export default App
