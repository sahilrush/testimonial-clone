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
import Sidebar from '@/components/sidebar';

const Dashboard: React.FC = () => {
  return (

    <div className="flex h-screen bg-gray-900">
      <aside className="w-64 bg-gray-800 shadow-md">
        <div className='p-4'>
        <Sidebar />

        </div>

     
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
