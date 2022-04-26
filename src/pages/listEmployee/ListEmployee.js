// import Table from 'components/DataTable/DataTable';
import React from 'react';
import MuidataTable from '../../components/muidataTable/MuidataTable';
import Header from "../../components/header/Header"
import Footer from '../../components/footer/Footer';
import "./ListEmployee.css"

const ListEmployee = () => {
    return (
        <section className='wrapper'>
            <Header />
            <div className='headerForm'>
                <h1>CURRENT EMPLOYEE</h1>
            </div>
            <div className="boxTable">
                <MuidataTable />
            </div>
            <Footer />
        </section>
    );
};

export default ListEmployee;
