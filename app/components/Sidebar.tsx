"use client"

import { Bean, Columns, HelpCircle } from 'lucide-react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';
import { CgGym } from 'react-icons/cg';
import { FiLogOut } from 'react-icons/fi';
import { GiHelp } from 'react-icons/gi';
import { toast } from 'sonner';

const adminMenu = [
    { label: 'Workouts', href: 'dashboard/workouts', icon: CgGym },
    { label: 'Diet', href: 'dashboard/diet', icon: Bean },
    { label: 'Blog', href: 'dashboard/blog', icon: Columns },
]

const Sidebar = () => {
    const pathname = usePathname();
    const router = useRouter();
    return (<>
        <aside className="sticky top-0 h-screen min-w-[200px] bg-yellow-50 py-10 px-4 flex flex-col justify-between">
            <div className="flex flex-col gap-2 overflow-y-hidden">
                {adminMenu.map(({ label, href, icon }) => (
                    <Link
                        key={href}
                        href={`/${href}`}
                        className={`flex items-center gap-2 px-4 py-2 rounded ${pathname === href ? "bg-yellow-200" : "bg-transparent"
                            } hover:bg-yellow-300 hover:gap-3 transition-all ease-in duration-200`}
                    >
                        {icon && React.createElement(icon, { size: 20 })}
                        <small className=" text-gray-500">{label}</small>
                    </Link>
                ))}
                <span className='py-3'>
                    <hr />
                    <Link
                        href="/dashboard/help"
                        className="mt-1 flex items-center gap-2 px-4 py-2 rounded hover:bg-yellow-300 hover:gap-3 transition-all ease-in duration-200">
                        <small className=" text-gray-500">Need Help</small>
                        <GiHelp size={16} />
                    </Link>
                </span>
            </div>
            <div
                className="cursor-pointer text-sm bg-yellow-100 hover:bg-yellow-200 hover:text-yellow-800 hover:gap-3 p-4 rounded transition-all ease-in-out duration-200 flex items-center gap-2"
                onClick={() => {
                    toast.success("Logout successful")
                    setTimeout(() => {
                        router.replace("/")
                    }, 500)
                }}
            >
                <FiLogOut size={20} />
                Logout
            </div>
        </aside>
    </>


    )
}

export default Sidebar