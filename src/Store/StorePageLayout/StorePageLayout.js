import React from 'react'
import Footer from '../../main components/Footer/Footer'
import Header from '../../main components/Header/Header'
import { Link, Outlet } from 'react-router-dom'
import HeaderProfile from '../components/HeaderProfile/HeaderProfile'
import NavSections from '../components/NavSections/NavSections'

export default function StorePageLayout() {
    return (
        <>

            <Header />
            <HeaderProfile />
            <NavSections />

            <div className='section-component'>
            <Outlet/>

            </div>

            <Footer />

        </>
    )
}
