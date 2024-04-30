import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type WorkoutCardProps = {
    name: string
    description: string
    image?: string
}

const WorkoutCard: React.FC<WorkoutCardProps> = ({ name, description, image }) => {
    return (
        <div className="rounded-md bg-white shadow-none hover:shadow-md border w-full flex flex-col justify-between transition-all duration-200 ease-in-out">
            <span>

                <Image
                    alt={name}
                    src={
                        image
                            ? image
                            : "/images/fitness-1.jpg"
                    }
                    width={370} height={200}
                    className="aspect-[16/9] object-cover rounded-md md:h-[200px] lg:h-[200px]"
                />
                {/* <img
                src={image
                    ? image
                    : "https://images.unsplash.com/photo-1588099768523-f4e6a5679d88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHwxMTM4MTU1NXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"}
                    alt="Laptop"
                    className="aspect-[16/9] object-cover rounded-md md:h-[200px] lg:h-[200px]"
                /> */}
                <div className="p-2">
                    <h1 className="inline-flex items-center text-lg font-semibold">{name}</h1>
                    <p className="my-1 text-sm text-gray-600">
                        {description}
                    </p>
                </div>
            </span>
            <span>
                <div className="p-2 w-full flex items-stretch">
                    <Link
                        href="#"
                        className="text-center w-full rounded-sm bg-black px-2 py-1.5 text-sm  text-white shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                        View Details
                    </Link>
                </div>
            </span>
        </div>
    )
}
export default WorkoutCard