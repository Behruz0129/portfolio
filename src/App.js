//Import Pages
import Home from './pages/Home';
//data
import dataProject from './dataProjects';
import FooterSection from './components/FooterSection';

function App() {
  const dataP = dataProject();
  return (
    <div className='App'>
      <Home dataP={dataP} />
      <FooterSection />
    </div>
  );
}

export default App;
