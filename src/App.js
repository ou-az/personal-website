import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Benefits from './components/Benefits';
import Contact from './components/Contact';
import Footer from './components/Footer';

const MainLayout = () => (
  <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
    <Navbar />
    <Hero />
    <Services />
    <Benefits />
    <Contact />
    <Footer />
  </div>
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
