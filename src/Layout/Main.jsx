import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import TakeHeader from '../Components/Take/TakeHeader';
import TakeFooter from '../Components/Take/TakeFooter';
import { markLeftHome } from '../Components/Take/scrollToSection';

const Main = () => {
    const { pathname } = useLocation();
    // remember that the visitor opened another page (Investors, Contact...): coming back to the
    // home page then opens on the video hero instead of the "What If" intro (a refresh starts over)
    useEffect(() => { if (pathname !== '/') markLeftHome(); }, [pathname]);
    return (
        <div className='main-page-area'>
            <TakeHeader />
            <Outlet></Outlet>
            <TakeFooter />
        </div>
    );
};

export default Main;
