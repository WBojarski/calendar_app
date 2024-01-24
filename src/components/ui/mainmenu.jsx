"use client"
import React, { useEffect, useState } from 'react'


import supabase from "../../app/config/createClient"
import { Button } from "@/components/ui/button"



const mainmenu = () => {

    const [user, setUser] = useState(null)

    useEffect(() => {
        const session = supabase.auth.getSession()
        setUser(session?.user)

        const { subscription } = supabase.auth.onAuthStateChange((event, session) => {
            console.log(event)
            switch (event) {
                case "SIGNED_IN":
                    setUser(session?.user)
                    break
                case "SIGNED_OUT":
                    setUser(null)
                    break
            }
        })
        return () => {
            subscription?.unsubscribe()
        }
    }, [])

    const login = async () => {
        await supabase.auth.signInWithOAuth({
            provider: "google"
        })
    }
    const logout = async () => {
        await supabase.auth.signOut()
    }

    return (
        <div>
            {user ? (
                <Button onClick={logout}>Logout</Button>

            ) :
                <Button onClick={login}>Login</Button>
            }

        </div>
    )
}

export default mainmenu