import React from 'react'
import AdminSideNav from '../components/AdminSideNav/AdminSideNav'
import './AdminPageLayout.scoped.css'
import OrdersSection from '../components/OrdersSection/OrdersSection'
import UserSection from '../components/UserSection/UserSection'

export default function AdminPageLayout() {
    return (
        <>

            <div>
                <AdminSideNav />
            </div>

            <main className="main-wrap">
                <UserSection />
            </main>


        </>
    )
}
