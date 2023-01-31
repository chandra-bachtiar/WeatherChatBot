import React from 'react';

const Footer = ({ handleInputChange, inputData, handleClick, inputRef, handleKeyDown }) => {
    // console.log(inputData);
    return (
        <div className='w-full h-[10%] flex-none bg-[#f5f5f5] rounded-b-xl p-2'>
            <div className="flex h-full w-full gap-2">
                <div className="grow w-full h-full">
                    <input type="text" ref={inputRef} onKeyDown={handleKeyDown} placeholder="Ketik Disini . . ." className="input w-full h-[90%]" value={inputData} onChange={handleInputChange} />
                </div>
                <div className="flex justify-center items-center h-full w-[20%] md:w-[15%]">
                    <button className="btn btn-info btn-sm h-[90%]" onClick={handleClick}>Send</button>
                </div>
            </div>
        </div>
    );
}

export default Footer;
