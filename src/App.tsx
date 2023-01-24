import { Route, Routes } from 'react-router-dom';

import { NavbarComponent } from './components/navbar/navbar.component';

import { AboutPage } from './pages/about/about.page';
import { HomePage } from './pages/home/home.page';
import { ContactUsPage } from './pages/contactus/contactus.page';

import './app.css';

function App() {
  return (
    <div className="app-container bg-light">
        <NavbarComponent />
        <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/about" element={<AboutPage />}></Route>
            <Route path="/contactus" element={<ContactUsPage />}></Route>
        </Routes>  
    </div>
  );
}

export default App;
