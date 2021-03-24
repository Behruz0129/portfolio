//Import Pages
import Home from './pages/Home';
//Global Style
import GlobalStyle from './components/GlobalStyle';
//data
import dataProject from './dataProjects';
import FooterSection from './components/FooterSection';

function App() {
  const dataP = dataProject();
  return (
    <div className='App'>
      <GlobalStyle />
      <Home dataP={dataP} />
      <FooterSection />
    </div>
  );
}

export default App;
