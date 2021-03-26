//Import Pages
import Nav from './components/Nav';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Terms from './pages/Terms';
import Privasy from './pages/Privasy';
import FooterSection from './components/FooterSection';
//Global Style
import GlobalStyle from './components/GlobalStyle';
//data
import dataProject from './dataProjects';
//router
import { Switch, Route } from 'react-router-dom';

function App() {
  const dataP = dataProject();
  return (
    <div className='App'>
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route path='/' exact>
          <Home dataP={dataP} />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/projects'>
          <Projects />
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>
        <Route path='/privacy'>
          <Privasy />
        </Route>
        <Route path='/terms'>
          <Terms />
        </Route>
      </Switch>
      <FooterSection />
    </div>
  );
}

export default App;
