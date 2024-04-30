import React from 'react'
import { FaHeart, FaUserCircle } from 'react-icons/fa'
import { FaLaptopCode } from 'react-icons/fa6'

const About = () => {
    return (
        <main className="container mx-auto px-4 py-8">
            {/* Mission Section */}
            <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                <p className="text-gray-700 leading-relaxed">
                    At Pure Motion, we believe that fitness is not just a physical pursuit but a way of life. Our mission is to empower individuals to embrace a healthier and more active lifestyle by providing them with cutting-edge technology and personalized guidance.
                </p>
            </section>

            {/* About the App Section */}
            <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">About Our App</h2>
                <p className="text-gray-700 leading-relaxed">
                    Pure Motion is a comprehensive fitness tracker app designed to help you stay motivated, track your progress, and achieve your fitness goals. With advanced features like activity tracking, personalized workout plans, and nutritional guidance, our app is your ultimate companion on your journey to a healthier and more fulfilling life.
                </p>
            </section>

            {/* Team Section */}
            <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Meet Our Team</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
                        <FaUserCircle className="text-6xl text-green-500 mb-4" />
                        <h3 className="text-xl font-bold mb-2">John Doe</h3>
                        <p className="text-gray-700 text-center">CEO & Founder</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
                        <FaHeart className="text-6xl text-red-500 mb-4" />
                        <h3 className="text-xl font-bold mb-2">Jane Smith</h3>
                        <p className="text-gray-700 text-center">Fitness Expert</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
                        <FaLaptopCode className="text-6xl text-blue-500 mb-4" />
                        <h3 className="text-xl font-bold mb-2">Michael Johnson</h3>
                        <p className="text-gray-700 text-center">Lead Developer</p>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default About