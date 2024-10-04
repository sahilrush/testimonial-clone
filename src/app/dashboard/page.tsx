import React from 'react';
import CreateProject from '@/components/dialog';
import Sidebar from '@/components/sidebar';

const Dashboard: React.FC = () => {
  return (


    <div className="flex h-screen bg-gray-900">
      <aside className="w-64 bg-gray-800 shadow-md">
        <div className='p-4'>
        <Sidebar />
        </div>
      </aside>



      <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold text-white">Dashboard Page</h1>
        <div className="mt-4">


          <div>
          <CreateProject />

          </div>
        </div>
      </main>
    </div>
    
  );
};

export default Dashboard;
