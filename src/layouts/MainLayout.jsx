import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/shared/Navbar';
import Footer from '../components/shared/Footer';
import ChatBot from 'react-simple-chatbot';

const MainLayout = () => {
  const steps = [
    {
      id: '1',
      message: 'Hi there! How can I help you today?',
      trigger: '2',
    },
    {
      id: '2',
      user: true,
      trigger: '3',
    },
    {
      id: '3',
      message: 'Thank you for reaching out. We will get back to you soon!',
      end: true,
    },
  ];

  return (
    <>
      <Navbar />
      <div className=''>
        <Outlet />
      </div>
      <Footer />

      {/* Chatbot positioned at bottom right */}
      <div style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 1000 }}>
        <ChatBot steps={steps} floating={true} />
      </div>
    </>
  );
};

export default MainLayout;
