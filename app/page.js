"use client"
import MainMenu from "../src/components/ui/mainmenu.jsx"
import HeroSection from "@/components/ui/HeroSection.jsx"
import Features from "@/components/ui/Features.jsx"
import Pricing from "@/components/Pricing.jsx"
import { useEffect, useState } from "react"
import supabase from "../src/app/config/createClient.js"

export default function Home() {

  const [calendars, setCalendars] = useState(null)
  const [fetchError, setFetchError] = useState(null)
  const [calendarFiles, setCalendarFiles] = useState([])

  console.log(supabase)

  useEffect(() => {

    //fetch calendar records
    // const fetchCalendars = async () => {
    //   const { data, error } = await supabase
    //     .from("calendarFiles")
    //     .select()

    //   if (error) {
    //     setFetchError("Could not fetch Calendars")
    //     setCalendars(null)
    //     console.log(error)
    //   }
    //   if (data) {
    //     setCalendars(data)
    //     setFetchError(null)
    //     console.log(data)
    //   }

    //   //fetch calendar files from storage


    // }

    // const fetchCalendarFiles = async () => {
    //   const { data } = supabase
    //     .storage
    //     .from('calendar_files')
    //     .getPublicUrl('myevents.ics', {
    //       download: true,
    //     })

    //   if (data) {
    //     setCalendarFiles(data)
    //     console.log("ALL FILES", data)
    //   }

    // }
    const fetchCalendarFiles = async () => {
      const { data } = await supabase
        .storage
        .from('calendar_files')
        .list('calendar_ics', {
          limit: 100,
          offset: 1,
          sortBy: { column: 'name', order: 'asc' },
        })


      if (data) {
        setCalendarFiles(data)
        console.log("ALL FILES", data)
      }

    }


    // fetchCalendars()
    fetchCalendarFiles()
  }, [])

  return (
    <main className="max-h-screen">
      <MainMenu />
      <HeroSection />
      <Features />
      <Pricing />
      {fetchError && (<p>{fetchError}</p>)}

      {calendarFiles && (<div>
        {calendarFiles.map(calendar => (
          <div className="flex gap-3">

            <p key={calendar.id}>{calendar.name}</p>
            <a href={`https://scfcwyrvpqjevdueyjhc.supabase.co/storage/v1/object/public/calendar_files/calendar_ics/${calendar.name}`} download="proposed_file_name">Download</a>
          </div>
        ))}
      </div>)
      }


    </main >
  )
}
