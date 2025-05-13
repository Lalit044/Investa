import React from 'react';

function Education() {
    return ( 
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6'>
                    <img src='media/images/education.svg' style={{width:"70%"}}/>
                </div>

            <div className='col-6'>
                <h1 className='mb-3 fs-2'>Free and open market education</h1>
                <p>Investa Academy offers comprehensive stock market education, from beginner to advanced levels, making learning accessible for everyone.</p>
                <a href='' style={{textDecoration:"none"}}>Varsity <i class="fa fa-arrow-right" aria-hidden="true"></i></a>

                <p className='mt-5'>Our active forum, Investa Q&A, connects traders and investors across India, offering expert insights and discussions on all things market-related.</p>
                <a href='' style={{textDecoration:"none"}}>TraingQ&A <i class="fa fa-arrow-right" aria-hidden="true"></i></a>

            </div>

            </div>
            
        </div>
     );
}

export default Education;