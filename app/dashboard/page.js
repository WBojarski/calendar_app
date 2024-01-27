// @react/client
"use client";
import React, { useEffect, useState } from "react";
import Sidebar from "/src/components/ui/sidebar";
import Topnav from "/src/components/ui/topnav";
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
      <div className="flex-1 bg-gray-100 p-8">
        <Topnav />
        {/* Display calendar files */}
        <div className="bg-white rounded-lg shadow-lg p-4 flex-grow">
          <p>Add your plans in here...</p>
        </div>
      </div>
      <div className="w-1/4 bg-gray-200 p-4 overflow-y-auto">
        {/* Download cards in the sidebar */}
        {calendarFiles.map(calendar => (
          <div
            key={calendar.id}
            className="bg-white rounded-lg shadow-lg p-4 mb-4 h-32 flex items-center justify-between space-x-4"
          >
            <p className="text-xl font-semibold">{calendar.name}</p>
            <a
              href={`https://[your-supabase-project-ref].supabase.co/storage/v1/object/public/calendar_files/calendar_ics/${calendar.name}`}
              download={calendar.name}
              className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-full transition duration-300 ease-in-out"
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
