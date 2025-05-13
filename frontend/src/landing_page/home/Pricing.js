import React from 'react';

function Pricing() {
    return ( 
        <div className='container'>
            <div className='row'>
                <div className='col-4'>
                    <h1 className='mb-3 fs-2'>Competitive Pricing</h1>
                    <p>Investa introduces a new standard in affordable investing, with transparent, flat fees and no hidden charges. We believe in fair pricing to make investing accessible to everyone.</p>
                    <a href='' style={{textDecoration:"none"}}>See Pricing <i class="fa fa-arrow-right" aria-hidden="true"></i></a>
                </div>
                <div className='col-2'></div>
                <div className='col-6 mb-5'>
                    <div className='row text-center'>
                        <div className='col p-3 border'>
                            <h1 className='mb-3'>₹0</h1>
                            <p>Free equity delivery and direct mutual funds.</p>
                        </div>
                        <div className='col p-3 border'>
                            <h1 className='mb-3'>₹20</h1>
                            <p>Affordable pricing for intraday trading and F&O.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Pricing;