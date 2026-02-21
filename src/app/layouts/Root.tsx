import React from 'react';
import { Outlet } from "react-router";
import { Navbar } from "../components/Navbar.tsx";
import { Footer } from "../components/Footer.tsx";
import { WhatsAppButton } from "../components/WhatsAppButton.tsx";
import { Toaster } from "sonner";

export const Root = () => {
  return (
    <div className="min-h-screen bg-white selection:bg-logo-magenta selection:text-white font-sans">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
      <Toaster position="top-center" richColors />
    </div>
  );
};
