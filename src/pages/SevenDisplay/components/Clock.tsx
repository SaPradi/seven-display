import { FC, useEffect, useState } from "react";
import Display from "./Display";

const Clock: FC = () => {

    const [hour, setHour] = useState(1);
    const [hourTwo, setHourTwo] = useState(0);

    const [minutes, setMinutes] = useState(5);
    const [minutesTwo, setMinutesTwo] = useState(2);

    const [seconds, setSeconds] = useState(0);
    const [secondsTwo, setSecondsTwo] = useState(0);


    const updateClock = () => {
        /**
         * Math.floor(hours / 10) Obtiene el primer digito 
         * hours % 10             Obtiene el segundo digito
         * 
         * esto es para dividir todo por 1 digito
         */

        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();


        setHour(Math.floor(hours / 10));
        setHourTwo(hours % 10);

        setMinutes(Math.floor(minutes / 10));
        setMinutesTwo(minutes % 10);

        setSeconds(Math.floor(seconds / 10));
        setSecondsTwo(seconds % 10);
    };


    useEffect(() => {
        
        const intervalId = setInterval(updateClock, 1000);
        // llamada el metodo inmediatamente
        updateClock(); 
        // Limpia el intervalo al desmontar el componente
        return () => clearInterval(intervalId); 
    }, []);
    return (
        
            <>
                <h1 className=" text-slate-200 text-3xl">Level #3</h1>
                <div className="flex gap-4 items-center justify-center">

                    {/* Hours */}
                    <div className="flex gap-4">
                        <Display num={hour} />
                        <Display num={hourTwo} />
                    </div>
                    <div className=" flex items-center flex-col gap-10">
                        <div className="bg-red-700 rounded-full h-4 w-4"></div>
                        <div className="bg-red-700 rounded-full h-4 w-4"></div>
                    </div>
                    {/* Minutes */}
                    <div className="flex gap-4">
                        <Display num={minutes} />
                        <Display num={minutesTwo} />
                    </div>
                    <div className=" flex items-center flex-col gap-10">
                        <div className="bg-red-700 rounded-full h-4 w-4"></div>
                        <div className="bg-red-700 rounded-full h-4 w-4"></div>
                    </div>
                    {/* Seconds */}
                    <div className="flex gap-4">
                        <Display num={seconds} />
                        <Display num={secondsTwo} />
                    </div>
                </div>
            </>

    );
};

export default Clock;