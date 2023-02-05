import { Route, Routes } from 'react-router-dom';

import { NavbarComponent } from './components/navbar/navbar.component';

import { AboutPage } from './pages/about/about.page';
import { HomePage } from './pages/home/home.page';
import { ContactUsPage } from './pages/contactus/contactus.page';
import { StudentsPage } from './pages/students/students.page';
import { StudentPage } from './pages/student/student.page';

import './app.css';
import TodoPage from './pages/todo/todo.page';
import Ex1Page from './pages/ex1/ex1.page';

// ex. 1, 2
function App() {
    return (
        <div className="app-container bg-light">
            <NavbarComponent />
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/about" element={<AboutPage />}></Route>
                <Route path="/contactus" element={<ContactUsPage />}></Route>
                <Route path="/students" element={<StudentsPage />}></Route>
                <Route path="/student/:id" element={<StudentPage />}></Route>
                <Route path="/to-do-list" element={<TodoPage />}></Route>
                <Route path="/ex1" element={<Ex1Page />}></Route>
            </Routes>
        </div>
    );
}

export default App;
