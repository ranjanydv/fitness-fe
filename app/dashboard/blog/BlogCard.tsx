import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type BlogCardProps = {
    name: string
    description: string
    image?: string
    link: string
}

const BlogCard: React.FC<BlogCardProps> = ({ name, description, image, link }) => {
    return (
        <div className="rounded-md bg-white shadow-none hover:shadow-md border w-full flex flex-col justify-between transition-all duration-300 ease-in-out">
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
                <div className="p-2">
                    <h1 className="inline-flex items-center text-lg font-semibold leading-6">{name}</h1>
                    <p className="my-1 text-sm text-gray-600">
                        {description}
                    </p>
                </div>
            </span>
            <span>

                <div className="p-2 w-full flex items-stretch">
                    <Link
                        href={link ? link : "/blog/1"}
                        className="text-center w-full rounded-sm bg-black px-2 py-1.5 text-sm  text-white shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                        Read Blog ...
                    </Link>
                </div>
            </span>
        </div>
    )
}
export default BlogCard