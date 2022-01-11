import React from 'react';

export default function RestContainer({ one, two, three, four }) {
    return (
        <div className="h-full flex flex-row flex-wrap w-full">
            <div className="flex items-center justify-center flex-col w-4/12 ">
                <div className="h-4/5 w-11/12   bg-white rounded-lg cursor-pointer drop-shadow-xl hover:drop-shadow-2xl">
                    {one}
                </div>
            </div>
            <div className="flex items-center justify-center flex-col w-8/12 p-2 ">
                <div className="h-4/5 w-11/12   bg-white rounded-lg cursor-pointer drop-shadow-xl  hover:drop-shadow-2xl">
                    {two}
                </div>
            </div>
            <div className="flex items-center justify-center flex-col w-8/12 ">
                <div className="h-4/5 w-11/12  bg-white rounded-lg cursor-pointer drop-shadow-xl hover:drop-shadow-2xl">
                    {three}
                </div>
            </div>
            <div className="flex items-center justify-center flex-col w-4/12 ">
                <div className="h-4/5 w-11/12 p-3  bg-white rounded-lg cursor-pointer drop-shadow-xl hover:drop-shadow-2xl">
                    {four}
                </div>
            </div>
        </div>
    );
}
