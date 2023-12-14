'use client';

import React, { useState, ChangeEvent } from 'react';

const DemoFile: React.FC = () => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
      if (event.target.files && event.target.files.length > 0) {
        const file = event.target.files[0];
        setSelectedFile(file);
      }
    };
  
    const openLocalFile = () => {
      if (selectedFile) {
        const filePath = URL.createObjectURL(selectedFile);
        window.open(filePath, '_blank');
      } else {
        alert('Please select a file first.');
      }
    };
  
    return (
      <div className='flex flex-col items-center w-full'>
        <input type="file" onChange={handleFileChange} />
        <button onClick={openLocalFile}>Open Local File</button>
      </div>
    );
};

export default DemoFile;
