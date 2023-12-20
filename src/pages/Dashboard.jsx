import React from 'react'
import './Dashboard.css'
import SiteData from '../components/SiteData/SiteData'
import Services from '../components/Services/Services'

const Dashboard = () => {
  return (
    <div className='container-dash'>
        <SiteData/>
        <Services/>
        {/* <Services/>
        <Services/> */}


    </div>
  )
}

export default Dashboard