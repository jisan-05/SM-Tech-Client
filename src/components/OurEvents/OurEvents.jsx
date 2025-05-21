import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FaCalendarAlt, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const OurEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/events`);
        setEvents(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching events:', error);
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#07a698]"></div>
      </div>
    );
  }

  // Format date to be more readable
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Upcoming Events</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join our interactive learning sessions and boost your tech skills
          </p>
        </div>

        {events.length === 0 ? (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium text-gray-700">No upcoming events at the moment</h3>
            <p className="text-gray-500 mt-2">Check back later for new events</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <div 
                key={event._id} 
                className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.headline}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                    <div>
                      <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-white uppercase bg-[#07a698] rounded-full">
                        Upcoming
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center text-gray-500 text-sm mb-2">
                    <FaCalendarAlt className="mr-2 text-[#07a698]" />
                    <span>{formatDate(event.date)}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">{event.headline}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{event.subHeadline}</p>
                  
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center text-gray-500 text-sm">
                      <FaMapMarkerAlt className="mr-1 text-[#07a698]" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center text-gray-500 text-sm">
                      <FaClock className="mr-1 text-[#07a698]" />
                      <span>{event.time}</span>
                    </div>
                  </div>
                  
                  {/* <Link 
                    to={`/events/${event._id}`} 
                    className="mt-6 inline-flex items-center px-4 py-2 bg-[#07a698] text-white rounded-md hover:bg-[#058b7d] transition-colors duration-300"
                  >
                    Learn More
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </Link> */}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default OurEvents;