import React from "react";
import "./App.css";
import Features from "./components/features";
import Header from "./components/header";
import Hero from "./components/heroSection";
import Story from "./components/story";
import Footer from "./components/footer";

function App() {
  return (
    <>
      {/* Header Component - Displays the navigation bar */}
      <Header />
      
      {/* Main Content Section */}
      <main>
        {/* Hero Section - Showcases the main highlight of the site */}
        <Hero />
        
        {/* Features Section - Highlights key features or offerings */}
        <Features />
        
        {/* Story Section - Displays user or community stories */}
        <Story />
      </main>
      
      {/* Footer Component - Displays footer information */}
      <Footer />
    </>
  );
}

export default App;
