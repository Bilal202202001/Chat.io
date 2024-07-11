import React from 'react'

export default function InputField({ props, buttonText }) {
    return (
        <div className="space-y-4">
            {props.map((input, index) => (
                <>
                    {input.type === "button" ? <>
                        <button className="w-full h-10 font-bold bg-teal-600 text-white rounded hover:bg-teal-700" type='submit'>{input.name}</button></>
                        :
                        <input key={index} className="w-full h-10 border border-gray-300 rounded px-3 focus:outline-none focus:border-blue-500" type={input.type} name={input.name} placeholder={input.placeholder} required={input.required} />
                    }
                </>
            ))}
            {/* <button className="w-full h-10 font-bold bg-teal-600 text-white rounded hover:bg-teal-700" type='submit'>{buttonText}</button> */}
        </div>
    )
}
