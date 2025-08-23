"use client";
import React from "react";



function PPTDownload() {
  
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "https://drive.google.com/uc?export=download&id=1ZuqXFre4yOvITff_XOK_fKxVI5k2u6lv"; 
    link.download = "SmartDataX.pptx";
    link.click();

  };

  return (
    <div className="flex justify-center items-center p-6">
      <button
        onClick={handleDownload}
        className="px-6 py-3 bg-green-600 text-white rounded-2xl shadow-md hover:bg-green-700 transition"
      >
        📥 Download PPT
      </button>
    </div>
  );
}

export default PPTDownload;
