import { Calendar } from 'lucide-react';
import Image from 'next/image';

const SingleBlog = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold mb-4">Unlock Your Fitness Potential: The Importance of Workouts and Diet</h1>
                <div className="flex items-center mb-6 text-sm">
                    <Calendar size={16} className="text-gray-500 mr-2" />
                    <span className="text-gray-500">today</span>
                </div>
                <p className='pb-2 text-gray-600'>In our fast-paced, modern lives, maintaining a healthy lifestyle can often take a backseat. However, prioritizing fitness and nutrition should be at the forefront of our daily routines. Regular exercise and a balanced diet not only contribute to physical well-being but also have a profound impact on our mental health and overall quality of life.</p>
                <img
                    src="/images/fitness-1.jpg"
                    alt="Blog Post Image"
                    className="w-full h-[400px] object-cover mb-6"
                />
                <div className="max-w-none mb-6">
                    <h2 className='text-2xl font-semibold pt-4 pb-2'>
                        The Power of Proper Workouts
                    </h2>
                    <p>
                        Exercise is a powerful tool that offers countless benefits. Regular physical activity can improve cardiovascular health, strengthen muscles, and boost endurance. It also plays a crucial role in weight management, reducing the risk of obesity and related health issues such as diabetes, heart disease, and certain types of cancer.
                    </p>
                    <p>
                        Incorporating a variety of exercises into your routine is key to achieving well-rounded fitness. Strength training, whether through weightlifting or bodyweight exercises, helps build lean muscle mass and increase metabolic rate, enabling your body to burn more calories even at rest. Cardiovascular exercises, such as running, cycling, or swimming, improve heart health and endurance, while also aiding in weight loss and stress relief.
                    </p>
                    <p>
                        Flexibility and balance exercises, like yoga or Pilates, promote mobility, prevent injuries, and enhance overall body awareness. Finding activities you enjoy can make exercising a sustainable and enjoyable part of your lifestyle.
                    </p>
                    <h2 className='text-2xl font-semibold pt-4 pb-2'>
                        The Importance of a Balanced Diet
                    </h2>
                    <p>
                        While exercise is crucial, it's only one piece of the puzzle. A balanced and nutrient-rich diet is equally important for optimal health and fitness. Proper nutrition provides the fuel your body needs to perform at its best during workouts and supports recovery and muscle growth afterward.
                    </p>
                    <p>
                        A well-rounded diet should include a variety of whole, unprocessed foods from all food groups. Lean proteins, such as chicken, fish, and plant-based sources like legumes and tofu, are essential for building and repairing muscle tissue. Complex carbohydrates from whole grains, fruits, and vegetables provide sustained energy, while healthy fats from sources like avocados, nuts, and olive oil support various bodily functions.
                        Staying hydrated is also paramount for overall health and exercise performance. Aim to drink enough water throughout the day and replenish fluids lost during exercise.
                    </p>
                    <h2 className='text-2xl font-semibold pt-4 pb-2'>The Synergy of Workouts and Diet</h2>
                    <p>
                        When combined, regular exercise and a balanced diet create a powerful synergy that maximizes fitness gains and overall well-being. Consistent workouts coupled with proper nutrition can lead to increased muscle tone, improved endurance, better sleep quality, and a boosted immune system.
                    </p>
                    <p>
                        Moreover, maintaining a healthy lifestyle can have a profound impact on mental health. Exercise has been shown to reduce stress, anxiety, and depression by releasing endorphins and improving mood. A nutrient-rich diet also supports cognitive function and emotional well-being.
                    </p>
                    <p>
                        Embarking on a fitness journey can seem daunting, but small, consistent steps can lead to significant progress over time. Start by incorporating simple exercises into your daily routine, such as brisk walking, bodyweight exercises, or following online workout videos. Gradually increase the intensity and duration as you become more comfortable.
                    </p>
                    <p>
                        When it comes to your diet, focus on making gradual, sustainable changes. Swap processed snacks for nutrient-dense alternatives like fresh fruits and vegetables, and experiment with new recipes that incorporate a variety of whole foods.
                    </p>
                    <p>
                        Remember, fitness is a lifelong journey, and consistency is key. Celebrate small victories along the way, and don't be discouraged by setbacks. With dedication and perseverance, you can unlock your full fitness potential and experience the countless benefits of a healthy, active lifestyle.
                    </p>
                </div>

            </div>
        </div>
    );
};


export default SingleBlog