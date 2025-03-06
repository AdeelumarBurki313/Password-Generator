import React, { useState, useCallback, useEffect, useRef } from 'react';

function PasswordGenerator() {
    const [password, setPassword] = useState('');
    const [length, setLength] = useState(8);
    const [numberAllowed, setNumberAllowed] = useState(false);
    const [charAllowed, setCharAllowed] = useState(false);

    const passwordGenerator = useCallback(() => {
        let pass = '';
        let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        if (numberAllowed) {
            str += '0123456789';
        }
        if (charAllowed) {
            str += '!@#$%^&*()';
        }
        for (let i = 0; i < length; i++) {
            let char = Math.floor(Math.random() * str.length);
            pass += str.charAt(char);
        }
        setPassword(pass);
    }, [length, numberAllowed, charAllowed]);
    const copyToClipBoard=useCallback(()=>{
window.navigator.clipboard.writeText(password);
alert('password copied');
console.log(password);
    },[password])

    useEffect(() => {
        passwordGenerator();
    }, [length, numberAllowed, charAllowed, passwordGenerator]);
   const passwordRef=useRef(null);

    return (
        <div className="min-h-screen bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 p-8 flex justify-center items-center">
            <div className="bg-white p-8 rounded-xl shadow-xl max-w-md w-full">
                <h1 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-green-500 mb-6">Password Generator</h1>
                <div className="mb-4">
                    <input
                        type="text"
                        value={password}
                        placeholder="Generated Password"
                        readOnly
                        className="w-full p-3 border-2 border-gray-300 rounded-md text-center text-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    ref={passwordRef}
                    />
                    <button onClick={copyToClipBoard} className="mt-4 w-full p-3 bg-gradient-to-r from-green-400 to-teal-500 text-white font-semibold rounded-md hover:opacity-80 focus:outline-none">
                        Copy
                    </button>
                </div>

                <div className="mb-4">
                    <div className="flex justify-between items-center">
                        <label htmlFor="lengthRange" className="text-lg font-semibold text-gray-700">Length: {length}</label>
                    </div>
                    <input
                        id="lengthRange"
                        type="range"
                        min="4"
                        max="100"
                        value={length}
                        className="w-full mt-2 cursor-pointer rounded-lg h-2 bg-gradient-to-r from-yellow-400 to-red-500"
                        onChange={(e) => setLength(Number(e.target.value))}
                    />
                </div>

                <div className="flex items-center mb-4">
                    <input
                        type="checkbox"
                        id="numberInput"
                        checked={numberAllowed}
                        onChange={() => setNumberAllowed(prev => !prev)}
                        className="mr-2"
                    />
                    <label htmlFor="numberInput" className="text-lg font-medium text-gray-700">Include Numbers</label>
                </div>

                <div className="flex items-center mb-4">
                    <input
                        type="checkbox"
                        id="characterInput"
                        checked={charAllowed}
                        onChange={() => setCharAllowed(prev => !prev)}
                        className="mr-2"
                    />
                    <label htmlFor="characterInput" className="text-lg font-medium text-gray-700">Include Special Characters</label>
                </div>
            </div>
        </div>
    );
}

export default PasswordGenerator;
