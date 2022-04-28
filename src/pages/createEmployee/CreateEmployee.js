// import Form from 'components/Form/Form';
import React from 'react';
import Form from '../../components/form/Form';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import './CreateEmployee.css'
import ModalPlugin from '../../components/modalPlugin/ModalPlugin';

const CreateEmployee = () => {
    return (
        <>
        <main className='main'>
            <Header />
            <h1>CREATE EMPLOYEE</h1>
            <Form />
            <ModalPlugin />
            <Footer />
        </main>
        </>
    );
}

export default CreateEmployee;