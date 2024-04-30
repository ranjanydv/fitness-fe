import React from 'react'
import Sidebar from '../components/Sidebar'

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <section className='grid grid-cols-12 sm:grid-cols-1 md:grid-cols-12 w-screen gap-2'>
            <aside className='col-span-2'>
                <Sidebar />
            </aside>
            <main className='col-span-10 py-6 px-10'>
                {children}
            </main>
        </section>
    )
}

export default DashboardLayout