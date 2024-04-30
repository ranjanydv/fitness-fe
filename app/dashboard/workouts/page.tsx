import WorkoutCard from './WorkoutCard';

const Workouts = () => {
    const workouts = [
        {
            name: 'Apple',
            description: 'Ball',
        },
        {
            name: 'Apple',
            description: 'Ball',
            image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=3269&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            name: 'Apple',
            description: 'Ball',
            image: "https://plus.unsplash.com/premium_photo-1664109999449-82f58d6f7cf1?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            name: 'Apple',
            description: 'Ball',
            image: "https://images.unsplash.com/photo-1581009137042-c552e485697a?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            name: 'Apple',
            description: 'Ball',
            image: "https://images.unsplash.com/photo-1507398941214-572c25f4b1dc?q=80&w=3173&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            name: 'Apple',
            description: 'Ball',
            image: "https://images.unsplash.com/photo-1517343985841-f8b2d66e010b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8"
        },
        // {
        //     name: 'Apple',
        //     description: 'Ball',
        //     image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        // },
        // {
        //     name: 'Apple',
        //     description: 'Ball',
        //     image: "https://images.unsplash.com/photo-1519505907962-0a6cb0167c73?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTJ8MjU2ODgxOXx8ZW58MHx8fHx8"
        // },
    ];
    return (
        <div className="mx-auto w-full max-w-7xl px-2 py-10 flex flex-col gap-2 ">
            <h1 className='text-4xl font-semibold mb-2'>Workout Plans</h1>
            <div className="grid items-stretch space-y-4 md:grid-cols-3 md:gap-6 md:space-y-0">
                {workouts.map((item, i) => (
                    <span className='flex' key={i}>
                        <WorkoutCard name={item.name} description={item.description} image={item?.image} />
                    </span>
                ))}
            </div>
        </div>
    )
}

export default Workouts