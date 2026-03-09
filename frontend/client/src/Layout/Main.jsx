import { Outlet } from 'react-router-dom';
import HeaderStyle2 from '../Components/Header/HeaderStyle2';
import Footer from '../Components/Footer/Footer';
import Footer2 from '../Components/Footer/Footer2';

const Main = () => {
    return (
        <div className='main-page-area'>
            <HeaderStyle2></HeaderStyle2>
            <Outlet></Outlet>
            <Footer2></Footer2>
        </div>
    );
};

export default Main;


