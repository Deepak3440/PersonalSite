

import React from 'react';
import {AiOutlineDownload} from "react-icons/ai";
import './Download.css'
import Cv from '../assets/deepak.pdf';

function DownloadResume() {
  const handleDownload = () => {
    // Replace 'path_to_your_resume.pdf' with the actual path to your resume file
    const resumeFilePath = Cv;
    const link = document.createElement('a');
    link.href = resumeFilePath;
    link.download = 'DeepakSingh_Resume.pdf'; // Customize the downloaded file name
    link.click();
  };

  return (
    <div className="download-resume">
      <button onClick={handleDownload}>
        <AiOutlineDownload /> Download Cv
      </button>
    </div>
  );
}

export default DownloadResume;
