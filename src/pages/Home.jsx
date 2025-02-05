import React from 'react'
import Carousel from '../components/Carousel'
import Yangiliklar from '../components/home/Yangiliklar'
import Elonlar from '../components/home/elenlar/Elonlar'
import Voqealar from '../components/home/Voqealar/Voqealar'
import Navigator from '../components/home/Navigator/Navigator'
import Olimlar from '../components/home/Olimlar/Olimlar'
import '../styles/index.css'

const Home = () => {
    return (
        <div className=''>
            <Carousel />
            <Yangiliklar />
            <Elonlar />
            <Voqealar />
            <Navigator />
            <Olimlar />
        </div>
    )
}

export default Home