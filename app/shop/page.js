// @react/client
"use client";
import React, { useEffect, useState } from "react";
import supabase from "/src/app/config/createClient"; // Adjust the path as necessary
import { CookingPot } from "lucide-react";
var ical2json = require("ical2json");
const { parseISO, format } = require("date-fns");
import ICalendarLink from "react-icalendar-link";

const Dashboard = () => {
  const [calendarFiles, setCalendarFiles] = useState([
    {
      title: "Breakfast - greek yoghurt",
      description: "My Description",
      startTime: "2018-10-07T10:30:00+10:00",
      endTime: "2018-10-07T12:00:00+10:00",
      location: "10 Carlotta St, Artarmon NSW 2064, Australia",
      attendees: ["Hello World <hello@world.com>", "Hey <hey@test.com>"]
    }
  ]);
  const [calendarEdit, setCalendarEdit] = useState([]);
  const [exampleCalendar, setExampleCalendar] = useState(null);

  const [jsonCal, setJsonCal] = useState([]);

  useEffect(() => {
    // const fetchCalendar = async () => {
    //   const response = await fetch("http://localhost:3000/api")
    //   const calendarData = await response.json()
    //   console.log(calendarData.text["VCALENDAR"][0].VEVENT)
    //   setExampleCalendar(calendarData.text["VCALENDAR"][0].VEVENT)
    // }
    // fetchCalendar()

    const fetchCalendarFiles = async () => {
      const { data } = await supabase.storage
        .from("calendar_files")
        .list("calendar_ics", {
          limit: 100,
          offset: 0,
          sortBy: { column: "name", order: "asc" }
        });

      if (data) {
        setCalendarFiles(data);
        console.log("ALL FILES", data);
      }
    };

    fetchCalendarFiles();
  }, []);

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="w-1/4 md:w-1/5 bg-gray-200 p-4 md:p-8 overflow-y-auto">
        <div className="p-4 flex-grow">
          <div className="sideBarNavigation flex items-center">
            <img
              className="w-12 md:w-16 mr-3.5"
              src="https://res.cloudinary.com/ryry/image/upload/v1706963703/vczsvivlij38qalzyap6.png"
              alt="Icon"
            />
            <p className="text-2xl font-semibold text-gray-700">Plan Matrix</p>
          </div>
        </div>

        <div className="sideBarNavigation rounded-lg p-4 flex-grow">
          <p className="my-5 text-gray-700 hover:text-blue-500 cursor-pointer">
            My Plans
          </p>
          <p className="my-5 text-gray-700 hover:text-blue-500 cursor-pointer">
            Apps
          </p>
          <p className="my-5 text-gray-700 hover:text-blue-500 cursor-pointer">
            Categories
          </p>
          <p className="my-5 text-gray-700 hover:text-blue-500 cursor-pointer">
            Settings
          </p>
          <p className="my-5 text-gray-700 hover:text-blue-500 cursor-pointer">
            Plan Matrix
          </p>

          {/* Move mt-4 code here */}
          <div className="mt-4"></div>
        </div>
      </div>
      <div className="flex-1 bg-white p-4 md:p-8 rounded-r-3xl shadow-xl">
        {/* Display calendar files */}
        <div className="m-4 bg-white rounded-lg shadow-lg p-4 flex-grow">
          <p className="text-2xl font-semibold text-gray-800">Plan Shop</p>
        </div>
        <div className="flex mx-auto">
          {/* Download cards in the sidebar */}
          {calendarFiles.map(calendar => (
            <div
              key={calendar.id}
              className="planCard p-4 m-4 bg-gray-300 hover:bg-gray-400 flex-col rounded-lg shadow-lg mb-4 h-32 flex text-left justify-between h-auto min-h-min cursor-pointer transition-transform transform hover:scale-105"
            >
              <p className="text-2xl m-2">{calendar.name}</p>
              <p className="text-sm m-2 text-gray-600">
                {calendar.description} Explore and download this calendar.
              </p>
              <a
                href={`https://scfcwyrvpqjevdueyjhc.supabase.co/storage/v1/object/public/calendar_files/calendar_ics/${calendar.name}`}
                download={calendar.name}
                className="bg-blue-500 hover:bg-blue-700 text-white m-2 text-center px-4 py-2 w-3/6 rounded-full transition duration-300 ease-in-out"
              >
                Download
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className=""></div>
    </div>
  );
};

export default Dashboard;
