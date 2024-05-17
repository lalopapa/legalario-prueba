import React from "react";

export default function FinishProcessComponent(){

    return(
        <div className="w-full">
            <h2 className="text-center">4 de 4</h2>
            <div className="flex h-[calc(100svh-24px)] justify-center items-center">
                <div className="p-4">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded p-2 w-[120px" >Finalizar</button>
                </div>
            </div>
        </div>
    )
}