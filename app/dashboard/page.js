// @react/client
"use client";
import React, { useEffect, useState } from "react";
import supabase from "/src/app/config/createClient"; // Adjust the path as necessary

const Dashboard = () => {
  const [calendarFiles, setCalendarFiles] = useState([]);

  useEffect(() => {
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
    <div className="flex h-screen flex-row-reverse">
      <div className="flex-1 bg-sky-950		 p-8">
        {/* Display calendar files */}
        <div className="bg-white rounded-lg shadow-lg p-4 flex-grow">
          <p>Add your plans in here...</p>
        </div>
      </div>
      <div className="w-1/4 bg-sky-900  p-4 overflow-y-auto">
        <div className=" rounded-lg shadow-lg  p-4 flex-grow">
          <div className="sideBarNavigation flex">
            <img
              className="w-8 mr-3.5	"
              src="https://res.cloudinary.com/ryry/image/upload/v1706963703/vczsvivlij38qalzyap6.png"
              alt="Icon"
            />
            <p className="justify-center align-center flex text-slate-400	">
              Plan Matrix
            </p>
          </div>
        </div>

        <div className="sideBarNavigation rounded-lg  p-4 flex-grow">
          <p className="my-5 text-slate-400 hover:text-slate-200 pointer-events-auto			">
            My Plans
          </p>
          <p className="my-5 text-slate-400	hover:text-slate-200 pointer-events-auto		">
            Apps
          </p>
          <p className="my-5	text-slate-400 hover:text-slate-200	pointer-events-auto	">
            Categories
          </p>
          <p className="my-5	text-slate-400 hover:text-slate-200	pointer-events-auto	">
            Settings
          </p>
          <p className="my-5	text-slate-400 hover:text-slate-200	pointer-events-auto	">
            Plan Matrix
          </p>
        </div>
        {/* Download cards in the sidebar */}
        {calendarFiles.map(calendar => (
          <div
            key={calendar.id}
            className="bg-sky-800 hover:bg-sky-700	flex-col rounded-lg shadow-lg p-4 mb-4 h-32 flex text-left  justify-between h-auto	min-h-min"
          >
            <p className="text-xl m-2 text-slate-200 ">{calendar.name}</p>
            <p className="text-sm	 m-2 text-slate-400 ">
              {calendar.description}Omnivorous Diet: Includes a wide variety of
              foods, both plant-based and animal-based. This is the most common
              diet worldwide.
            </p>
            <a
              href={`https://[your-supabase-project-ref].supabase.co/storage/v1/object/public/calendar_files/calendar_ics/${calendar.name}`}
              download={calendar.name}
              className="bg-blue-500 hover:bg-blue-700 text-white m-2	text-center		px-4 py-2 w-3/6	rounded-full transition duration-300 ease-in-out"
            >
              Download
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
