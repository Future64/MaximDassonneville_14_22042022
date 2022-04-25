// import Form from 'components/Form/Form';
import React from 'react';
import Form from '../../components/form/Form';
import Header from '../../components/header/Header';
import './CreateEmployee.css'

const CreateEmployee = () => {
    return (
        <main className='main'>
            <Header />
            <h1>CREATE EMPLOYEE</h1>
            <Form />
        </main>
    );
}

export default CreateEmployee;