import Image from 'next/image';
import React from 'react';

const Chat = ({ chatData, bottomRef }) => {
    // console.log(chatData);
    return (
        <div className='px-3 overflow-auto no-scrollbar grow' ref={bottomRef}>
            {
                chatData.map((el, idx) => {

                    if (el.type === "chat") {
                        return (
                            <div key={idx} className="chat chat-start">
                                <div className="chat-bubble chat-bubble-accent">{el.message}</div>
                            </div>
                        )
                    } else if (el.type === "user") {
                        return (
                            <div key={idx} className="chat chat-end">
                                <div className="chat-bubble chat-bubble-info">{el.message}</div>
                            </div>
                        )
                    } else if (el.type === "API") {
                        return (
                            <div key={idx} className="chat chat-start">
                                <div className="chat-bubble chat-bubble-accent">
                                    <div className='flex justify-center items-center w-full'>
                                        <Image
                                            src={el.gambar}
                                            alt="Weather Image"
                                            width={50}
                                            height={50}
                                            className="rounded-xl"
                                        />
                                    </div>
                                    <div className='text-center'>
                                        <p className='font-bold text-3xl'>{el.suhu}°C</p>
                                        <p className='font-bold text-xl'>{el.kondisi}</p>
                                        <p>{el.location.kota}, {el.location.provinsi}, {el.location.negara}</p>
                                        <p>Kecepatan Angin : {el.angin} KM/Jam</p>
                                        <p className='italic text-xs'>Diperbarui : {el.last_update}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    }

                })
            }
        </div>
    );
}

export default Chat;
