import React from 'react';

function FooterRight() {
  return (
    <>
        <div className='footer-right-header'>
            <h5>Today’s schedule</h5>
            <p>See All</p>
        </div>
        <div className='footer-right-items'>
            <div className='task'>
                <h5 className='task-header'>Meeting with suppliers from Kuta Bali</h5>
                <p>14:00-15:00</p>
                <p>at Sunset Road, Kuta, Bali</p>
            </div>
            <div className='task'>
                <h5 className='task-header'>Check operation at Giga Factory 1</h5>
                <p>18:00-20:00</p>
                <p>at Central Jakarta</p>
            </div>
        </div>
    </>
  )
}

export default FooterRight