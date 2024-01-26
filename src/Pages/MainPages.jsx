import { useContext } from 'react';
import MovieList from "../cine/MovieList";
import { ThemContext } from '../context/Index';
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";
const MainPages = () => {
    const { darkMode } = useContext(ThemContext)

    return (
        <div className={` h-full w-full ${darkMode ? 'dark' : ''}`}>
            <Header />
            <main>
                <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
                    <Sidebar />
                    <MovieList />
                </div>
            </main >
            <Footer />
        </div>
    );
};

export default MainPages;