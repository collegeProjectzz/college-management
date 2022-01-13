import React from 'react';

export default function FourCards({ one, two, three, four }) {
    return (
        <div className="h-auto flex flex-row flex-wrap w-full justify-center items-center sm:m-4">
            <div className="flex items-center justify-center flex-col w-full sm:w-4/12 m-2">
                <div className="w-full p-2 bg-white rounded-lg cursor-pointer drop-shadow-xl hover:drop-shadow-2xl">
                    {one}
                </div>
            </div>
            <div className="flex items-center justify-center flex-col w-full sm:w-7/12 m-2">
                <div className=" w-full p-12  bg-white rounded-lg cursor-pointer drop-shadow-xl  hover:drop-shadow-2xl">
                    {two}
                </div>
            </div>
            <div className=" flex items-center justify-center flex-col w-full sm:w-7/12 m-2">
                <div className=" w-full p-12 bg-white rounded-lg cursor-pointer drop-shadow-xl hover:drop-shadow-2xl">
                    {three}
                </div>
            </div>
            <div className="flex items-center justify-center flex-col w-full m-4 sm:w-4/12 my-2">
                <div className=" w-full bg-white rounded-lg cursor-pointer drop-shadow-xl hover:drop-shadow-2xl">
                    {four}
                </div>
            </div>
        </div>
    );
}
