import { FaHeart, FaHeartbeat, FaRunning, FaWeightHanging } from "react-icons/fa";
import { FaDumbbell, FaPlus, FaUtensils } from "react-icons/fa6";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center w-[90vw] min-h-screen max-w-[95vw] p-24">
      {/* <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center"> */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Pure Motion
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Where progress meets passion
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div className="pt-6">
            <div className="flow-root bg-gray-100 rounded-lg px-6 pb-8">
              <div className="-mt-6">
                <div>
                  <span className="inline-flex items-center justify-center rounded-md bg-black p-3 shadow-lg">
                    <FaRunning className="h-6 w-6 text-white" />
                  </span>
                </div>
                <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                  Running
                </h3>
                <p className="mt-5 text-base text-gray-500">
                  Explore running routes and track your progress.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-6">
            <div className="flow-root bg-gray-100 rounded-lg px-6 pb-8">
              <div className="-mt-6">
                <div>
                  <span className="inline-flex items-center justify-center rounded-md bg-black p-3 shadow-lg">
                    <FaWeightHanging className="h-6 w-6 text-white" />
                  </span>
                </div>
                <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                  Strength Training
                </h3>
                <p className="mt-5 text-base text-gray-500">
                  Find workout routines and track your progress.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-6">
            <div className="flow-root bg-gray-100 rounded-lg px-6 pb-8">
              <div className="-mt-6">
                <div>
                  <span className="inline-flex items-center justify-center rounded-md bg-black p-3 shadow-lg">
                    <FaHeart className="h-6 w-6 text-white" />
                  </span>
                </div>
                <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                  Wellness
                </h3>
                <p className="mt-5 text-base text-gray-500">
                  Track your sleep, nutrition, and other wellness metrics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}

      {/* Program Section */}
      <section className="container mx-auto py-20">
        <h2 className="text-gray-900 text-4xl font-bold mb-8">Explore Our Program</h2>
        <div className="grid grid-cols-4 justify-between gap-2">
          <div className="col-span-1 bg-gray-700 hover:bg-yellow-500 transition-all duration-200 ease-linear p-8 rounded-lg max-w-sm">
            <FaDumbbell className="text-white mb-4" />
            <h3 className="text-white font-bold text-xl mb-2">Cardio Strength</h3>
            <p className="text-gray-500">
              Combine cardiovascular exercise with strength training for a comprehensive workout that boosts both health and muscle.
            </p>
          </div>
          <div className="col-span-1 bg-black p-8 rounded-lg max-w-sm hover:bg-yellow-500 transition-all duration-200 ease-linear">
            <FaUtensils className="text-white mb-4" />
            <h3 className="text-white font-bold text-xl mb-2">Fat Loss</h3>
            <p className="text-white">
              Reduce body fat by burning more calories than you consume through a combination of exercise and nutrition.
            </p>
          </div>
          <div className="col-span-1 bg-gray-700 hover:bg-yellow-500 transition-all duration-200 ease-linear p-8 rounded-lg max-w-sm">
            <FaDumbbell className="text-white mb-4" />
            <h3 className="text-white font-bold text-xl mb-2">Muscle Gain</h3>
            <p className="text-gray-500">
              Build muscle by engaging in strength training exercises and incorporating a balanced diet rich in protein.
            </p>
          </div>
          <div className="col-span-1 bg-gray-700 hover:bg-yellow-500 transition-all duration-200 ease-linear p-8 rounded-lg max-w-sm">
            <FaUtensils className="text-white mb-4" />
            <h3 className="text-white font-bold text-xl mb-2">Nutrition</h3>
            <p className="text-gray-500">
              Learn about proper nutrition and meal planning to fuel your body and support your fitness goals.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
