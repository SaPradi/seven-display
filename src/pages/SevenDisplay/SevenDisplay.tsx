import { FC, useState } from "react";
import Display from "./components/Display";
import Clock from "./components/Clock";

const SevenDisplay: FC = () => {

    const [count, setCount] = useState(0);

    const counter = () => {
        if (count === 9) {
            setCount(0)
            return
        }
        setCount(count + 1)
    }

    return (
        <main className=" flex flex-col  gap-6 h-screen  justify-center items-center bg-neutral-900 ">
            <div className="flex gap-12">
                {/* Level 1 */}
                <section className="flex flex-col items-center gap-3">
                    <h1 className=" text-slate-200 text-3xl">Level #1</h1>
                    <Display num={1} />
                </section>

                {/* Level 2 */}
                <section className="flex flex-col items-center gap-3">
                    <h1 className=" text-slate-200 text-3xl">Level #2</h1>
                    <Display num={count} />
                    <button onClick={counter} className=" bg-red-700 rounded-lg text-slate-200 w-16 py-1"> Click </button>
                </section>
            </div>
            {/* Level 3 */}
            <section className="flex flex-col items-center gap-3">
                <Clock/>
            </section>
        </main>
    );
};

export default SevenDisplay;