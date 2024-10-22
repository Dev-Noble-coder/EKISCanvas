import React, { useState, useEffect } from 'react';
import { DayOne } from './Events/DayOne';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';

const Events = () => {
  const [notes, setNotes] = useState({});
  const [inputValues, setInputValues] = useState({}); // Separate input values for each event
  
  // Handle input change for each event
  const handleInputChange = (event, eventId) => {
    setInputValues((prevInputValues) => ({
      ...prevInputValues,
      [eventId]: event.target.value, // Update input for the specific event
    }));
  };

  // Handle adding a new note
  const handleAddNote = (eventId) => {
    if (!inputValues[eventId]?.trim()) return; // Do nothing if input is empty

    setNotes((prevNotes) => ({
      ...prevNotes,
      [eventId]: [...(prevNotes[eventId] || []), inputValues[eventId]], // Append the new note to the event's notes
    }));

    setInputValues((prevInputValues) => ({
      ...prevInputValues,
      [eventId]: '', // Clear input after saving for the specific event
    }));
  };

  // Handle deleting a note
  const handleDeleteNote = (eventId, indexToDelete) => {
    setNotes((prevNotes) => ({
      ...prevNotes,
      [eventId]: prevNotes[eventId].filter((_, index) => index !== indexToDelete), // Remove the note at indexToDelete
    }));
  };

  return (
    <div className='py-10'>
      <div className='flex items-center justify-between mx-5 '>
        <h2 className="text-4xl sm:text-6xl font-bold opacity-90 border-l-8 border-red-400 pl-4 py-3 mb-2">
          Day 1
        </h2>
        <div>
          <button className="flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded-md">
            <ArrowDownTrayIcon className="h-5 w-5" />
            <span>Download</span>
          </button>
        </div>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 place-content-center place-items-center gap-10 px-5 mb-10'>
        {DayOne.map((item) => (
          <div key={item.id} className=" w-full p-4 mb-4 border border-black border-opacity-10">
            <div className="icons flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-2 mb-5">
              <div className="flex items-center justify-center gap-3 font-semibold">
                <FontAwesomeIcon icon={faCalendar} className="text-red-500 h-6 w-6" />
                <p>2nd <br /> November</p>
              </div>
              <div className="flex items-center justify-center gap-3 font-semibold">
                <FontAwesomeIcon icon={faLocationDot} className="text-red-500 h-6 w-6" />
                <p>Obafemi Awolowo Civic <br /> Center Ado-Ekiti</p>
              </div>
            </div>
          
            <h2 className="text-center text-2xl opacity-90 mb-4">{item.event}</h2>

            {/* To-Do / Notes Section */}
            <div className="mt-4">
              <label htmlFor={`note-${item.id}`} className="block text-sm font-medium text-gray-700">
                Add a note:
              </label>
              <div className="flex gap-2 mt-2">
                <input
                  type="text"
                  id={`note-${item.id}`}
                  value={inputValues[item.id] || ''} // Use the specific input value for this event
                  onChange={(e) => handleInputChange(e, item.id)} // Pass the event id
                  placeholder="Write your note here..."
                  required
                  className="p-2 flex-grow border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 focus:outline"
                />
                <button
                  onClick={() => handleAddNote(item.id)}
                  className="px-4 py-2 bg-blue-500 text-white rounded-md"
                >
                  Save
                </button>
              </div>
            </div>

            {/* Displaying the notes */}
            <div className="mt-4">
              <h3 className="text-lg font-semibold">Your Notes:</h3>
              <ul className="list-disc pl-5 mt-2 space-y-2">
                {notes[item.id] && notes[item.id].map((note, index) => (
                  <li key={index} className="flex justify-between items-center">
                    <span className="text-gray-700">{note}</span>
                    <button
                      onClick={() => handleDeleteNote(item.id, index)}
                      className="text-red-500 hover:text-red-700 text-sm"
                    >
                      Delete
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className='ml-5'>
        <h2 className="text-4xl sm:text-6xl font-bold opacity-90 border-l-8 border-red-400 pl-4 py-3 mb-2">
          Day 2
        </h2>
        
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 place-content-center place-items-center gap-10 px-5 '>
        {DayOne.map((item) => (
          <div key={item.id} className=" w-full p-4 mb-4 border border-black border-opacity-10">
            <div className="icons flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-2 mb-5">
              <div className="flex items-center justify-center gap-3 font-semibold">
                <FontAwesomeIcon icon={faCalendar} className="text-red-500 h-6 w-6" />
                <p>2nd <br /> November</p>
              </div>
              <div className="flex items-center justify-center gap-3 font-semibold">
                <FontAwesomeIcon icon={faLocationDot} className="text-red-500 h-6 w-6" />
                <p>Obafemi Awolowo Civic <br /> Center Ado-Ekiti</p>
              </div>
            </div>
          
            <h2 className="text-center text-2xl opacity-90 mb-4">{item.event}</h2>

            {/* To-Do / Notes Section */}
            <div className="mt-4">
              <label htmlFor={`note-${item.id}`} className="block text-sm font-medium text-gray-700">
                Add a note:
              </label>
              <div className="flex gap-2 mt-2">
                <input
                  type="text"
                  id={`note-${item.id}`}
                  value={inputValues[item.id] || ''} // Use the specific input value for this event
                  onChange={(e) => handleInputChange(e, item.id)} // Pass the event id
                  placeholder="Write your note here..."
                  required
                  className="p-2 flex-grow border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 focus:outline"
                />
                <button
                  onClick={() => handleAddNote(item.id)}
                  className="px-4 py-2 bg-blue-500 text-white rounded-md"
                >
                  Save
                </button>
              </div>
            </div>

            {/* Displaying the notes */}
            <div className="mt-4">
              <h3 className="text-lg font-semibold">Your Notes:</h3>
              <ul className="list-disc pl-5 mt-2 space-y-2">
                {notes[item.id] && notes[item.id].map((note, index) => (
                  <li key={index} className="flex justify-between items-center">
                    <span className="text-gray-700">{note}</span>
                    <button
                      onClick={() => handleDeleteNote(item.id, index)}
                      className="text-red-500 hover:text-red-700 text-sm"
                    >
                      Delete
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Events;
