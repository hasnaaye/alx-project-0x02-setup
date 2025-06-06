import Header from "@/components/layout/Header";
import Card from '@/components/common/Card';
import React from 'react';

const Home = () => {
  return (
    <div className="p-4">
      <Card title="Welcome" content="This is a simple card component." />
       <Header />
    </div>
  );
};

export default App;
