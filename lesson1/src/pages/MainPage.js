import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/Button";
import Show from "../components/Show";

const MainPage = () => {
    return (
        <div>
            <Header/>
            <div className='btn'> MainPage</div>

            <Button name={'Open'} color={'primary'}/>
            <Button name={'Close'} color={'error'}/>
            <Button name={'Save'} color={'secondary'}/>
            <Show text={'JavaScript'}/>
            <Footer/>
        </div>
    );
};

export default MainPage;