"use client";

import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import AILab from "@/components/sections/AILab";
import YouTube from "@/components/sections/YouTube";
import NowBuilding from "@/components/sections/NowBuilding";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import Cursor from "@/components/ui/Cursor";

export default function Home() {
  return (
    <>
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Skills />
        <Projects />
        <AILab />
        <YouTube />
        <NowBuilding />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
