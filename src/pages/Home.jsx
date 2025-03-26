import React from 'react'
import Carousel from '../components/Carousel'
import Yangiliklar from '../components/home/Yangiliklar'
import Elonlar from '../components/home/elenlar/Elonlar'
import Voqealar from '../components/home/Voqealar/Voqealar'
// import Navigator from '../components/home/Navigator/Navigator'
import Olimlar from '../components/home/Olimlar/Olimlar'
import '../styles/index.css'
import UzbMap from '../components/home/Navigator/UzbMap'

const Home = () => {
    return (
        <div className=''>
            <Carousel />
            <Yangiliklar />
            <Elonlar />
            <Voqealar />
            {/* <Navigator /> */}
            < UzbMap onSelectedRegion={(val) => {
                console.log(val);
            }} />
            <Olimlar />
        </div>
    )
}

export default Home