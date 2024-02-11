import React from 'react'
import Accordion from './Accordian'

export default function FeedBackQuestion() {
    const suggestions = [
        {
            "question": "What should I do on my first trip to Rome?",
            "answer": "Rome offers a plethora of attractions for first-time visitors. You can start by visiting iconic landmarks such as the Colosseum, Roman Forum, and Vatican City. Don't miss exploring the historic streets of the city center, indulging in authentic Italian cuisine, and taking leisurely strolls along the Tiber River."
        },
        {
            "question": "What are some hidden gems to see in Rome?",
            "answer": "Rome is packed with hidden gems. If you love art, don't miss the Galleria Doria Pamphilj or Palazzo Barberini. The Museo Barracco is a free museum and well worth a quick visit. If you love the ancient stuff, don't miss the Domus Romana at Palazzo Valentini, the Domus Aurea, and the Baths of Caracalla. For even more hidden gems, take a tour of Trastevere, a fascinating neighborhood full of history and ambiance."
        },
        {
            "question": "How much time should I spend in Rome?",
            "answer": "The amount of time you should spend in Rome depends on your interests and priorities. However, to fully experience the city's main attractions and immerse yourself in its culture and history, it's recommended to spend at least 3-4 days in Rome. This duration allows you to visit major landmarks, explore neighborhoods, and savor local cuisine at a leisurely pace."
        },
        {
            "question": "What food is Rome known for?",
            "answer": "Rome is renowned for its delicious and diverse cuisine. Some of the must-try dishes include pasta dishes such as Carbonara, Cacio e Pepe, and Amatriciana. Don't miss tasting Roman-style pizza, supplì (fried rice balls), and traditional Roman street food like panini and porchetta. Additionally, indulge in classic Italian desserts such as Tiramisu and Gelato."
        },
        {
            "question": "What is the best way to get around Rome?",
            "answer": "Rome offers various transportation options for getting around the city. The most convenient way to explore Rome is by using its extensive public transportation network, including buses, trams, and the metro. Alternatively, you can navigate the city on foot or rent a bike to explore at your own pace. For longer distances or day trips, consider using trains or taxis."
        }
    ]


    return (
        <div>
            {
                suggestions.map((ele) => (
                    <Accordion title={ele.question} children={ele.answer} />

                ))
            }
        </div>
    )
}
