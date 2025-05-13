import React from 'react';

function Stats() {
    return ( 
        <div className='container p-3'>
            <div className='row p-5'>
                <div className='col-6 p-5'>
                    <h1 className='fs-2 mb-5'>Trust with confidence</h1>

                    <h2 className='fs-4'>Customer-first always</h2>
                    <p className='text-muted'>That's why over 2 million users trust Investa with their investments, managing assets in multiple categories and contributing to a growing share of daily retail trading volumes in India.</p>
                    
                    <h2 className='fs-4'>No Gimmicks, No Spam</h2>
                    <p className='text-muted'>No unnecessary distractions, pop-ups, or fake incentives. Just a high-quality platform that lets you trade and invest at your own pace, the way you prefer.</p>
                    
                    <h2 className='fs-4'>The Investa Ecosystem</h2>
                    <p className='text-muted'>More than just a platform. Investa is a holistic ecosystem. With partnerships and investments in multiple fintech startups, we provide customized services tailored to your needs.</p>
                    
                    <h2 className='fs-4'>Empower Your Financial Growth</h2>
                    <p className='text-muted'>With tools like Smart Insights and Auto-Trade, Investa goes beyond transactions, helping you make better financial decisions and optimize your investments.</p>
                </div>
                <div className='col-6'>
                    <img src='media/images/ecosystem.png' style={{width:"90%"}}/>
                    
                    <div className='text-center'>
                        <a href='' className='mr-5' style={{textDecoration:"none"}}>Explore our products <i class="fa fa-arrow-right" aria-hidden="true"></i></a>
                        <a href='' style={{textDecoration:"none"}}>Try Kite demo <i class="fa fa-arrow-right" aria-hidden="true"></i></a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Stats;