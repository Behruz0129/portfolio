//Import Pages
import Nav from './components/Nav';
import Home from './pages/Home';
import FooterSection from './components/FooterSection';
//Global Style
import GlobalStyle from './components/GlobalStyle';
//data
import dataProject from './dataProjects';


function App() {
  const dataP = dataProject();
  return (
    <div className='App'>
      <GlobalStyle />
      <Nav />
      <Home dataP={dataP} />
      <FooterSection />
    </div>
  );
}

export default App;
