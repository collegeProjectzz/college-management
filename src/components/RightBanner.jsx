import React from 'react';
import Lottie from 'react-lottie';

export default function RightBanner({ text, data }) {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: data,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    return (
        <>
            <div className="flex-col w-full md:w-1/2 bg-blue-500">
                <div className="flex-col p-9">
                    <div class="m-1 font-black text-3xl lg:text-5xl md:text-4xl lg:m-3">
                        <span class="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-pink-100">
                            {text}
                        </span>
                    </div>
                    <Lottie
                        options={defaultOptions}
                    />
                </div>
            </div>
        </>
    );
}
