import React from 'react'

import './Featured.css'

import House1 from '../../assets/house1.jpg'
import Bed1 from '../../assets/bed1.jpg'
import Bed2 from '../../assets/bed2.jpg'
import Kitchen from '../../assets/kitchen.jpg'
import Bathroom from '../../assets/bath1.jpg'

import House2 from '../../assets/house2.jpg'
import Bed3 from '../../assets/bed3.jpg'
import Bed4 from '../../assets/bed4.jpg'
import Livingroom from '../../assets/living-room.jpg'
import Bathroom2 from '../../assets/bath2.jpg'

const Featured = () => {
    return (
        <div className='featured'>
            <h1 className='featured-text'>Top Featured Listings</h1>
            <p className='featured-text'>Selected listings by City, State & Zip based on views.</p>

            {/* --------------------\\\\\  FIRST SECTION  /////-------------------- */}

            <div className='container'>
                <img className='span-3 image-grid-row-2' src={House1} alt='House 1' />
                <img src={Bed1} alt='Bedroom 1' />
                <img src={Bed2} alt='Bedroom 2' />
                <img src={Kitchen} alt='Kitchen' />
                <img src={Bathroom} alt='Bathroom 1' />
                <div className='span-3 img-details'>
                    <div className='top'>
                        <h2>123 Acme St. Dallas, TX</h2>
                        <p>House For Sale</p>
                        <p className='price'>$2,499,000</p>
                    </div>
                    <div className='info-grid'>
                        <div>
                            <div className='info'>
                                <p className='bold'>Bedrooms:</p><p>5</p>
                            </div>
                            <div className='info'>
                                <p className='bold'>Bathrooms:</p><p>7</p>
                            </div>
                        </div>
                        <div>
                            <div className='info'>
                                <p className='bold'>Square Feet:</p><p>8,650</p>
                            </div>
                            <div className='info'>
                                <p className='bold'>Est Payment</p><p>$14,600/mo</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='span-2 right-img-details'>
                    <p>A beautiful modern day home in the city with a full-size pool. Spacious and luxurious home located in Texas. Including media room, workout facility, and built-in sauna.</p>
                    <button className='btn'>View Listing</button>
                </div>
            </div>

            {/* --------------------\\\\\  SECOND SECTION  /////-------------------- */}

            <div className='container'>
                <img className='order-2' src={Bed3} alt='Bedroom 3' />
                <img className='order-3' src={Bed4} alt='Bedroom 4' />

                <img className='span-3 image-grid-row-2 order-1' src={House2} alt='House 2' />

                <img className='order-4' src={Bathroom2} alt='Bathroom 2' />
                <img className='order-5' src={Livingroom} alt='Livingroom' />
                <div className='span-2 right-img-details order-7'>
                    <p>A beautiful modern day home in the city with a full-size pool. Spacious and luxurious home located in Texas. Including media room, workout facility, and built-in sauna.</p>
                    <button className='btn'>View Listing</button>
                </div>
                <div className='span-3 img-details order-6'>
                    <div className='top'>
                        <h2>123 Acme St. Dallas, TX</h2>
                        <p>House For Sale</p>
                        <p className='price'>$2,499,000</p>
                    </div>
                    <div className='info-grid'>
                        <div>
                            <div className='info'>
                                <p className='bold'>Bedrooms:</p><p>5</p>
                            </div>
                            <div className='info'>
                                <p className='bold'>Bathrooms:</p><p>7</p>
                            </div>
                        </div>
                        <div>
                            <div className='info'>
                                <p className='bold'>Square Feet:</p><p>8,650</p>
                            </div>
                            <div className='info'>
                                <p className='bold'>Est Payment</p><p>$14,600/mo</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured