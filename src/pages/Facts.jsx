import { useState } from "react"

export default function Facts() {
    const [date, setDate] = useState("");
    const [events, setEvents] = useState([]);
    const [dataIsLoaded, setDataIsLoaded] = useState(false);

    async function fetchFacts() {
        const [year, month, day] = date.split("-")
        const url = await fetch(`https://byabbe.se/on-this-day/${month}/${day}/events.json`)
        const data = await url.json()
        setEvents(data.events)
        setDataIsLoaded(true)
    }

    return (
        <div className="flex flex-col place-content-center">
            <header>
                <h1 className="p-8 text-4xl text-center">Facts about your Birthday</h1>
            </header>

            <main>
                <div className="bg-[#3B55EB] rounded-4xl ml-auto mr-auto w-52 p-4 flex flex-row text-center content-center justify-center">
                    <input id="date" type="date" placeholder="DD/MM"></input>
                    <button id="fetch" className="pl-2">Fetch</button>
                </div>
            </main>
        </div>
    );
}