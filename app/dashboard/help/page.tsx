"use client"

import React from 'react';
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'


const FAQs = [
    {
        question: "How should I warm up before a workout?",
        answer: "Proper warm-up is crucial to prevent injuries. Spend 5-10 minutes doing light cardio or dynamic stretches to increase blood flow and prepare your muscles for the workout."
    },
    {
        question: "What is the importance of cool-down exercises?",
        answer: "Cool-down exercises help your body gradually transition from an elevated state to a resting state. They aid in promoting flexibility, reducing muscle soreness, and preventing dizziness or nausea."
    },
    {
        question: "How should I warm up before a workout?",
        answer: "Proper warm-up is crucial to prevent injuries and prepare your body for the upcoming physical activity. An effective warm-up should consist of two parts: general warm-up and specific warm-up. The general warm-up should involve light cardiovascular exercises, such as jogging, jumping jacks, or cycling, for 5-10 minutes. This helps to increase your heart rate, body temperature, and blood flow to the muscles. The specific warm-up should target the muscles and joints that will be primarily used during your workout. This can include dynamic stretches, such as leg swings, arm circles, and torso rotations. Dynamic stretches help to increase flexibility and range of motion, which can improve performance and reduce the risk of injury."
    },
    {
        question: "How can I avoid overtraining and burnout?",
        answer: "Overtraining and burnout are common issues that can negatively impact your physical and mental well-being, as well as your fitness progress. To avoid overtraining and burnout, it's essential to incorporate rest and recovery into your fitness routine. Listen to your body and watch for signs of overtraining, such as persistent fatigue, decreased performance, disrupted sleep, mood changes, and increased risk of injury. Incorporate at least one or two rest days per week, where you engage in light activities or complete rest. Additionally, periodize your training by alternating periods of higher intensity with periods of lower intensity or active recovery. This allows your body to recover and adapt to the training stimulus. Proper nutrition and hydration are also crucial for recovery and preventing burnout. Ensure you're consuming enough calories, protein, and essential nutrients to support your training and recovery needs."
    },
    {
        question: "What are some common workout mistakes to avoid?",
        answer: "Common workout mistakes can lead to injuries, plateaus in progress, and frustration. One of the most common mistakes is improper form during exercises. Poor form can put unnecessary stress on your joints and muscles, increasing the risk of injury. Always prioritize proper technique over weight or intensity, and consider working with a certified personal trainer to ensure you're performing exercises correctly. Another mistake is lifting too much weight or pushing yourself too hard, too soon. This can lead to overuse injuries and burnout. Start with manageable weights and gradually increase the intensity as your fitness level improves. Neglecting warm-up and cool-down exercises is another mistake that can contribute to injuries and muscle soreness. Warm-ups prepare your body for the upcoming activity, while cool-downs help your body transition back to a rested state and promote recovery."
    },
    {
        question: "How can I prevent lower back pain during workouts?",
        answer: "Lower back pain is a common issue that many people experience during or after their workouts. To prevent lower back pain, it's essential to focus on strengthening your core muscles, which include your abdominal muscles, obliques, and lower back muscles. A strong core provides support and stability for your spine, reducing the risk of injury and pain. Incorporate exercises such as planks, bridges, and exercises that engage your core muscles into your routine. Additionally, maintaining proper form during exercises is crucial for preventing lower back pain. Avoid excessive arching or rounding of the lower back, especially during exercises that involve lifting weights or bending movements. If you experience lower back pain during a particular exercise, stop immediately and reassess your form. Incorporating lower back stretches and foam rolling can also help alleviate tightness and promote recovery."
    },
    {
        question: "How can I prevent shin splints?",
        answer: "Gradually increase your training intensity, wear proper shoes, and incorporate calf stretches and strengthening exercises into your routine. Avoid sudden increases in mileage or intensity."
    },
    {
        question: "What should I do if I experience muscle soreness?",
        answer: "Mild muscle soreness is normal after a workout. Apply ice, engage in light stretching, and consider taking an active recovery day to allow your muscles to recover."
    },
    {
        question: "How can I prevent lower back pain during workouts?",
        answer: "Strengthen your core muscles, maintain proper form during exercises, and avoid excessive arching or rounding of the lower back. Incorporate back-strengthening exercises into your routine."
    },
    {
        question: "What are some tips for preventing knee injuries?",
        answer: "Strengthen your quadriceps and hamstrings, avoid sudden changes in direction, and incorporate proper warm-up and cool-down exercises. Wear supportive shoes and consider knee braces if needed."
    },
    {
        question: "How can I prevent shoulder injuries?",
        answer: "Focus on proper form, especially during upper-body exercises. Incorporate rotator cuff strengthening exercises and avoid excessive weight or repetitions. Warm up the shoulders adequately before workouts."
    },
    {
        question: "What should I do if I sustain an injury?",
        answer: "Stop the activity immediately, apply first aid if needed, and seek medical attention if the injury is severe. Allow for proper rest and recovery before resuming your workout routine."
    }
]

const Help = () => {
    return (
        <div className="container mx-auto py-8">
            <h1 className="text-3xl font-bold mb-6 text-center">Help & FAQ</h1>
            <div className="w-full px-4">
                <div className="mx-auto w-full max-w-2xl rounded-2xl bg-white p-2">
                    {FAQs.map((faq) => (
                        <span className='py-2'>
                            <Disclosure>
                                {({ open }) => (
                                    <>
                                        <Disclosure.Button className="flex w-full my-2 justify-between rounded-lg bg-yellow-50 px-4 py-3 text-left text-sm font-medium text-gray-900 hover:bg-yellow-200 focus:outline-none focus-visible:ring focus-visible:ring-yellow-500/75">
                                            <span>{faq.question}</span>
                                            <ChevronUpIcon
                                                className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 text-black transition-all duration-200 ease-in-out`}
                                            />
                                        </Disclosure.Button>
                                        <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500 bg-gray-50 rounded-md">
                                            {faq.answer}
                                        </Disclosure.Panel>
                                    </>
                                )}
                            </Disclosure>
                        </span>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Help