import { useState } from "react"

export default function DayFacts() {
    const [date, setDate] = useState("");
    const [events, setEvents] = useState([]);
    const [dataIsLoaded, setDataIsLoaded] = useState(false);

    async function fetchDay() {
        const [year, month, day] = date.split("-")
        const url = await fetch(`https://byabbe.se/on-this-day/${parseInt(month)}/${parseInt(day)}/events.json`)
        const data = await url.json()
        setEvents(data.events)
        setDataIsLoaded(true)
    }

    return (
        <div className="flex flex-col place-content-center">
            <header>
                <h1 className="p-8 text-4xl text-center">On this Day</h1>
            </header>

            <main>
                <div className="bg-[#3B55EB] rounded-4xl ml-auto mr-auto w-52 p-4 flex flex-row text-center content-center justify-center">
                    <input id="date" type="date" value={date} onChange={e => setDate(e.target.value)}></input>
                    <button id="fetch" className="pl-2" onClick={fetchDay}>Fetch</button>
                </div>
            </main>

            <ul className="m-4">
                {events.map((event, i) => (
                    <li key={i}>
                        <h4 className="font-bold">{event.year}</h4>
                        <p>{event.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}