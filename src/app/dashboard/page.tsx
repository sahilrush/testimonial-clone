import { buttonVariants } from '@/components/ui/button';
import React from 'react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import CreateProject from '@/components/dialog';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';

const Dashboard: React.FC = () => {
  return (

    <div className="flex h-screen bg-gray-900">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 shadow-md">
        <div className="p-4">
          <h2 className="text-xl font-bold text-white">Dashboard</h2>
        </div>
        <nav>
          <ul className="mt-6">
           
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold text-white">Dashboard Page</h1>
        <div className="mt-4">
          {/* Main content goes here */}
          <div>
          <CreateProject />

          </div>
        </div>
      </main>
    </div>
    
  );
};

export default Dashboard;
