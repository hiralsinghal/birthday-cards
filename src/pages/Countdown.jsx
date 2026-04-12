
export default function Countdown() {
    return (
        <>
            <header>
                <h1 className="p-8 text-4xl text-center">Countdown</h1>
            </header>

            <main>
                <div className="bg-[#3B55EB] rounded-4xl ml-auto mr-auto w-52 p-4 flex flex-row text-center">
                    <input id="date" type="date"></input>
                    <button id="show" className="pl-2">Show</button>
                </div>
            </main>
        </>
    )
}