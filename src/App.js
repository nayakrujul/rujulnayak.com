import gh from './gh.svg';
import pt from './pt-logo.svg';
import csrn from './csrn-logo.png';
import demo from './demo.svg';
import logo from './logo.png';
import misc from './misc-logo.png';
import potg from './potg-logo.svg';
import vtp6 from './vtp6-logo.png';
import python from './python-logo.svg';
import thunno from './thunno-logo.png';
import balance from './balance-logo.svg'
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PTR from './PeriodicTable';

function Description({str}) {
  return (
    <div className="desc">
      <span>{str}</span>
    </div>
  );
}

function LogoName() {
  return (
    <div className="logoname">
      <img className="logo" src={logo} alt="RN"></img>
      <h1 className="name">Rujul Nayak</h1>
    </div>
  );
}

function Links() {
  return (
    <div className="links">
      <a href="https://github.com/nayakrujul" className="link">
        <img className="icon" src={gh} alt="GitHub"></img>
      </a>
      {/* Add LinkedIn when I set it up */}
    </div>
  );
}

function Header() {
  return (
    <div className="header">
      <LogoName></LogoName>
      <Description str="Student studying CompSci, Maths, Further&nbsp;Maths & Physics"></Description>
      <Links></Links>
    </div>
  );
}

function Button({img, link, colour}) {
  return (
    <a href={link} className="button" style={{backgroundColor: colour}}>
      <img src={img} className="btnimg" alt="Button"></img>
    </a>
  );
}

function Project({name, img, year, desc, src, lnk=null}) {
  return (
    <div className="project">
      <h1 className="title">{name}</h1>
      <img src={img} className="projimg" alt="VTP6"></img>
      <p>{desc}, <i>{year}</i></p>
      <div className="buttonbar">
        <Button img={gh} link={src} colour="#27ae60"></Button>
        {lnk && <Button img={demo} link={lnk} colour="#c0392b"></Button>}
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="content">
      <Project
        name="VTP6" img={vtp6} year={2023} desc="Website to make learning a language easier for students"
        src="https://github.com/vtp6/vtp6.github.io/" lnk="https://vtp6.rujulnayak.com/"
      ></Project>
      <Project
        name="Thunno 2" img={thunno} year={2023} desc="Concise code-golfing programming language"
        src="https://github.com/Thunno/Thunno2/" lnk="https://thunno2.rujulnayak.com/"
      ></Project>
      <Project
        name="CS.RN" img={csrn} year={2024} desc="Online revision guide for CS students"
        src="https://github.com/nayakrujul/CompSci/" lnk="https://cs.rujulnayak.com/"
      ></Project>
      <Project
        name="Miscellaneous" img={misc} year={2024} desc="Miscellaneous HTML/JS projects"
        src="https://github.com/nayakrujul/misc/" lnk="https://misc.rujulnayak.com/"
      ></Project>
      <Project
        name="Balance Equation" img={balance} year={2024} desc="Balance chemical reaction equations easily"
        src="https://github.com/nayakrujul/balance-equation/" lnk="https://misc.rujulnayak.com/Balance-Equation/"
      ></Project>
      <Project
        name="Periodic Table" img={pt} year={2024} desc="Interactive online periodic table"
        src="https://github.com/nayakrujul/periodic-table/" lnk="https://rujulnayak.com/periodic-table/"
      ></Project>
      <Project
        name="Plot On The Go" img={potg} year={2022} desc="Python library for plotting graphs of data"
        src="https://github.com/nayakrujul/plot-on-the-go/"
      ></Project>
      <Project
        name="Python Scripts" img={python} year={2022} desc="Collection of small Python programs"
        src="https://github.com/nayakrujul/python-scripts/"
      ></Project>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/periodic-table" element={<PTR />} />
        <Route
          path="/*"
          element={
            <div className="app">
              <Header />
              <Content />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}


export default App;
