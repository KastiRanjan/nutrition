import React from 'react'
import Banner from '../components/Banner'
import TopBrand from '../components/TopBrand'
import Shop from '../components/Shop'
import PlanAndPackages from '../components/PlanAndPackages'
import { Element } from 'react-scroll'
import Process from '../components/Process'


export default function Home() {
    return (
        <div>
            <Banner />
            <TopBrand />
            <Process />
            <Shop />
            <Element name="plansandpackage"><PlanAndPackages /></Element>
        </div>
    )
}
