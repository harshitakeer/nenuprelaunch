import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Projects } from './components/Projects';
import confetti from 'canvas-confetti';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8"/>
        <title>nenu</title>
        <link rel="canonical" href="https://nenuprelaunch.vercel.app"/>
      </Helmet>
      <NavBar />
      <Banner />
      <Projects />
    </div>
  );
}

export default App;
