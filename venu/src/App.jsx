
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import Skills from './Components/Skills'
import Experience from './Components/Experience'
import Education from './Components/Education'
import Testimonial from './Components/Testimonial'
import Contact from './Components/Contact'
import Projects from './Components/Project'


const App = () => {

  return (
    <main className='mx-auto max-w-7xl overflow-x-hidden antialiased'>
      <div className='bg-image fixed inset-0 bg-cover bg-fixed bg-center' ></div>
      <div className='relative z-10'>
        <Navbar/>
        <Hero/>
        <Projects/>
        <Skills/>
        <Experience />
        <Education/>
        <Testimonial/>
        <Contact/>
      </div>
    </main>
  )
}
 
export default App
