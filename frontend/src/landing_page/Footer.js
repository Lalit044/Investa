import React from 'react';

function Footer() {
    return ( 
        <footer style={{backgroundColor:"rgb(240,240,240"}}>
        <div className='container border-top mt-5'>
            <div className='row mt-5'>
                <div className='col'>
                    <img src="media/images/logo.svg" style={{width:"50%"}}/>
                    <p>
                        &copy; 2024-2025, Not Zerodha Broking Ltd. All rights reserved.
                    </p>
                </div>
                <div className='col'>
                    <p>Company</p>
                    <a href="" className='text-decoration-none'>About</a><br/>
                    <a href="" className='text-decoration-none'>Products</a><br/>
                    <a href="" className='text-decoration-none'>Pricing</a><br/>
                    <a href="" className='text-decoration-none'>Referral programme</a><br/>
                    <a href="" className='text-decoration-none'>Careers</a><br/>
                    <a href="" className='text-decoration-none'>Investa.tech</a><br/>
                    <a href="" className='text-decoration-none'>Open source</a><br/>
                    <a href="" className='text-decoration-none'>Press & media</a><br/>
                    <a href="" className='text-decoration-none'>Investa Cares (CSR)</a><br/>
                </div>
                <div className='col'>
                    <p>Support</p>
                    <a href="" className='text-decoration-none'>Contact us</a><br/>
                    <a href="" className='text-decoration-none'>Support portal</a><br/>
                    <a href="" className='text-decoration-none'>Investa blog</a><br/>
                    <a href="" className='text-decoration-none'>List of charges</a><br/>
                    <a href="" className='text-decoration-none'>Downloads & resources</a><br/>
                    <a href="" className='text-decoration-none'>Videos</a><br/>
                    <a href="" className='text-decoration-none'>Market overview</a><br/>
                    <a href="" className='text-decoration-none'>How to file a complaint?</a><br/>
                    <a href="" className='text-decoration-none'>Status of your complaints</a><br/>
                </div>
                <div className='col'>
                    <p>Account</p>
                    <a href="" className='text-decoration-none'>Open an account</a><br/>
                    <a href="" className='text-decoration-none'>Fund transfer</a><br/>
                </div>
            </div>
            
            <div className='mt-5 text-muted' style={{fontSize:"16px"}}>
            <p>Investa Broking Ltd.: Member of NSE, BSE & MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Investa Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Investa Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238 Registered Address: Investa Broking Ltd., [Your Address Here], Bengaluru - [Pin Code], Karnataka, India. For any complaints pertaining to securities broking, please write to complaints@investa.com, for DP related issues to dp@investa.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>
            <p>Procedure to File a Complaint on SEBI SCORES: Register on the SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective communication, speedy redressal of grievances.</p>
            <p>Investments in securities markets are subject to market risks; read all related documents carefully before investing.</p>
            <p>Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non-allotment, the funds will remain in your bank account. As a business, we don’t give stock tips and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Investa and offering such services, please create a ticket here.</p>            
            <p>"Prevent unauthorized transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information on your transactions directly from the Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is a one-time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund, etc.), you need not undergo the same process again when you approach another intermediary."</p>
        </div>
    </div>
        </footer>
     );
}

export default Footer;