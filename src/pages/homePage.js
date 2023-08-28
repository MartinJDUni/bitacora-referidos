import React from 'react';
import Header from '@/components/header'; 
import TableHome from '@/components/tablehome';

const data = [
    { dato1: 'Hacer planeamientos' },
    { dato1: 'Hacer planeamientos' },
    { dato1: 'Hacer planeamientos' },
    { dato1: 'Hacer planeamientos' },
]

function HomePage() {
    return (
        <div>
            <Header />
            <br></br>
            <div className='container-homepage'>
                <div className='grafico'>
                    <img src="./image/grafico.png" alt="grafico" />
                </div>
                <div className="table-homepage">
                    <TableHome datos={data} />
                </div>
            </div>
        </div>
    );
}

export default HomePage;
