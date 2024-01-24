"use client"
import React, { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"


const index = () => {
    const [messages, setMessages] = useState([])
    const [messageInput, setMessageInput] = useState("")

    const sendMessage = (messageInput) => {
        setMessages([...messages, messageInput])
        setMessageInput("")


    }

    const handleInputChange = (e) => {
        setMessageInput(e.target.value)

    }
    return (
        <div className="bg-slate-600">
            <div className="relative h-screen">
                <h2 className="text-center text-2xl font-semibold">Chat responses</h2>
                {messages.length > 0 && (<div className="w-1/2 mx-auto">
                    {messages.map(message => (
                        <p key={Math.random(100)} className="text-black">{message}</p>
                    ))}
                </div>)}
                <div className="mx-auto absolute inset-x-0 bottom-12 flex gap-3 w-1/2">
                    <Textarea className="bg-slate-400 min-h-10" placeholder="how can I help" value={messageInput} onChange={e => handleInputChange(e)} />
                    <Button className="w-24" onClick={() => sendMessage(messageInput)}> Send </Button>
                </div>
            </div>
        </div>
    )
}

export default index