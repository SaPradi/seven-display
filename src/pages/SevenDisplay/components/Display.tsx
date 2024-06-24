import { FC, useEffect, useState } from "react";
import valuesSegments from "../../../static/valuesSegment";
import '../styles/display.css';

interface DisplayProps {
    num: number;
}

const Display: FC<DisplayProps> = ({num}) => {

    
    const [display, setDisplay] = useState([
        // X  a      b      c 
        [false, false, false],
        // Y   a     b    c   d
        [false, true, false, true]
    ])
    // Metodo para calcular num
    const calNumerDisplay = (value: number) => {
        const newDisplay = valuesSegments[value] || [
            [false, false, false],
            [false, false, false, false]
        ];
        setDisplay(newDisplay);
    };


    useEffect(() => {
        calNumerDisplay(num);
    }, [num])

    return (
        <div className="flex flex-col gap-2 items-center justify-center ">
            {/* segmento 1 */}
            <div className="flex items-center justify-center">
                {/* X A */}
                <div className={`
                segment-x-a
                h-6 w-12
                relative
                ${display[0][0] 
                    ? 'bg-red-700  after:border-l-red-700  before:border-r-red-700 drop-shadow-brillito ' 
                    : 'bg-[#1a1a1a] after:border-l-[#1a1a1a] before:border-r-[#1a1a1a] '
                }`
                }></div>
            </div>

            {/* segmento 2 */}
            <div className="w-28 flex justify-between">
                {/* Y A */}
                <div className={`
                    segment-y-a 
                    relative 
                    h-12 w-6 
                    ${display[1][0] 
                        ? 'bg-red-700 after:border-t-red-700 before:border-b-red-700 drop-shadow-brillito ' 
                        : 'bg-[#1a1a1a] after:border-t-[#1a1a1a] before:border-b-[#1a1a1a] '
                    }`
                    }></div>
                {/* Y B */}
                <div className={`
                    segment-y-b 
                    relative 
                    h-12 w-6  
                    ${display[1][1] 
                        ? 'bg-red-700 after:border-t-red-700 before:border-b-red-700  drop-shadow-brillito' 
                        : 'bg-[#1a1a1a] after:border-t-[#1a1a1a] before:border-b-[#1a1a1a] '
                    }`
                    }></div>
            </div>

            {/* segmento 3 */}
            <div className="flex items-center justify-center">
                {/* X B */}
                <div className={`
                    segment-x-b 
                    relative 
                    h-6 w-12 
                    ${display[0][1] 
                        ? 'bg-red-700 after:border-l-red-700 before:border-r-red-700 drop-shadow-brillito' 
                        : 'bg-[#1a1a1a] after:border-l-[#1a1a1a] before:border-r-[#1a1a1a] '
                    }`
                    }></div>
            </div>

            {/* segmento 4 */}
            <div className="w-28 flex justify-between">
                {/* Y C */}
                <div className={`
                    segment-y-c 
                    relative 
                    h-12 w-6  
                    ${display[1][2] 
                        ? 'bg-red-700 after:border-t-red-700 before:border-b-red-700 drop-shadow-brillito' 
                        : 'bg-[#1a1a1a] after:border-t-[#1a1a1a] before:border-b-[#1a1a1a]'
                    }`
                    }></div>
                {/* Y D */}
                <div className={`
                    segment-y-d 
                    relative 
                    h-12 w-6 
                    ${display[1][3] 
                        ? 'bg-red-700 after:border-t-red-700 before:border-b-red-700 drop-shadow-brillito' 
                        : 'bg-[#1a1a1a] after:border-t-[#1a1a1a] before:border-b-[#1a1a1a]'
                    }`
                    }></div>
            </div>

            {/* segmento 5 */}
            <div className="flex items-center justify-center">
                {/* X C */}
                <div className={`
                    segment-x-c 
                    relative 
                    h-6 w-12  
                    ${display[0][2] 
                        ? 'bg-red-700 after:border-l-red-700 before:border-r-red-700 drop-shadow-brillito' 
                        : 'bg-[#1a1a1a] after:border-l-[#1a1a1a] before:border-r-[#1a1a1a]'
                    }`
                    }></div>
            </div>
        </div>
    )
}

export default Display
