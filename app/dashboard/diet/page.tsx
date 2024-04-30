"use client"

import React, { useState } from 'react'
import { FaAppleAlt } from 'react-icons/fa';
import { FaBreadSlice, FaCandyCane, FaCubes, FaEgg } from 'react-icons/fa6';

interface DietPlan {
    protein: string;
    carbs: string;
    fats: string;
    sodium: number;
    sugar: number;
}

const Diet = () => {
    const [target, setTarget] = useState('');
    const [error, setError] = useState('');
    const [result, setResult] = useState<DietPlan | null>(null);


    const calculateDietPlan = () => {
        if (!target) {
            setError('Please enter a target calorie');
            return;
        }
        setError('');
        // Convert target calorie to number
        const targetCalorie = parseInt(target);

        // Formulas to calculate minimum amounts
        const minProtein = targetCalorie * 0.1 / 4; // 10% of calories from protein
        const minCarbs = targetCalorie * 0.45 / 4; // 45% of calories from carbs
        const minFats = targetCalorie * 0.25 / 9; // 25% of calories from fats
        const minSodium = 1500; // Recommended daily sodium intake in milligrams
        const minSugar = 25; // Recommended daily sugar intake in grams

        // Update the result state
        setResult({
            protein: minProtein.toFixed(2),
            carbs: minCarbs.toFixed(2),
            fats: minFats.toFixed(2),
            sodium: minSodium,
            sugar: minSugar
        });
    }

    return (
        <div className="mx-auto w-full max-w-7xl px-2 py-10 flex flex-col gap-2">
            <h1 className='text-4xl font-semibold mb-2'>Diet Plan</h1>

            <div className="items-start flex flex-col gap-4 py-4">
                <label htmlFor="target">Enter your calorie target</label>
                <div className='min-w-[60vw] flex gap-2 relative'>
                    <input
                        type="number"
                        name="target"
                        id="target"
                        className={`border focus:outline-none w-1/2 p-2 rounded-sm ${error ? "border-red-500 focus:outline-none bg-red-50" : "border-gray-400 bg-yellow-100"}`}
                        value={target}
                        onChange={(e) => setTarget(e.target.value)}
                    />
                    {error && (
                        <small className='absolute bottom-[-20px] left-0 text-xs text-red-500 '>{error}</small>
                    )}
                    <button
                        className="bg-black text-white hover:bg-yellow-400 outline-none border-none px-4 py-2 rounded-sm transition-all duration-200 ease-in-out"
                        onClick={calculateDietPlan}
                    >
                        Calculate
                    </button>
                </div>
            </div>

            {result && (
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="bg-white rounded-lg shadow-md p-4 flex items-center">
                        <FaEgg className="text-2xl text-yellow-500 mr-2" />
                        <div>
                            <h3 className="text-lg font-semibold">Protein</h3>
                            <p>{result.protein} grams</p>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-4 flex items-center">
                        <FaBreadSlice className="text-2xl text-yellow-500 mr-2" />
                        <div>
                            <h3 className="text-lg font-semibold">Carbs</h3>
                            <p>{result.carbs} grams</p>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-4 flex items-center">
                        <FaAppleAlt className="text-2xl text-red-500 mr-2" />
                        <div>
                            <h3 className="text-lg font-semibold">Fats</h3>
                            <p>{result.fats} grams</p>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-4 flex items-center">
                        <FaCubes className="text-2xl text-gray-500 mr-2" />
                        <div>
                            <h3 className="text-lg font-semibold">Sodium</h3>
                            <p>{result.sodium} milligrams</p>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-4 flex items-center">
                        <FaCandyCane className="text-2xl text-pink-500 mr-2" />
                        <div>
                            <h3 className="text-lg font-semibold">Sugar</h3>
                            <p>{result.sugar} grams</p>
                        </div>
                    </div>
                </div>
            )}

            {/* {result && (
                <div className="mt-4">
                    <h2 className="text-2xl font-bold mb-2">Recommended Daily Intake</h2>
                    <ul className="list-disc pl-5">
                        <li>Protein: {result.protein} grams</li>
                        <li>Carbs: {result.carbs} grams</li>
                        <li>Fats: {result.fats} grams</li>
                        <li>Sodium: {result.sodium} milligrams</li>
                        <li>Sugar: {result.sugar} grams</li>
                    </ul>
                </div>
            )} */}
        </div>
    )
}

export default Diet