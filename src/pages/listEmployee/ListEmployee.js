// import Table from 'components/DataTable/DataTable';
import React from 'react';
import MuidataTable from '../../components/muidataTable/MuidataTable';

const ListEmployee = () => {
    return (
        <section className='wrapper'>
            <div className='headerForm'>
                <h1>CURRENT EMPLOYEE</h1>
            </div>
            <span className='lineForm'/>
            <MuidataTable />
        </section>
    );
};

export default ListEmployee;
