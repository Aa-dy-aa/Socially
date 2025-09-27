import React, { useState } from "react";
import Image from "next/image";

const ImageEditor = ({ onClose, previewURL, settings, setSettings }) => {
  // localSettings is used for the current session in the modal
  const [localSettings, setLocalSettings] = useState(settings);

  const handleChangeSensitive = () => {
    setLocalSettings((prev) => ({
      ...prev,
      sensitive: !prev.sensitive,
    }));
  };

  const handleChangeType = (newType) => {
    setLocalSettings((prev) => ({
      ...prev,
      type: newType,
    }));
  };

  const handleSave = () => {
    // THIS LINE IS CRUCIAL: It sends the updated settings back to the parent.
    setSettings(localSettings); 
    onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-[rgba(6,9,15,0.75)] z-50 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="bg-black w-[600px] rounded-xl p-12 flex flex-col gap-4 max-w-[650px]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <svg
              width={32}
              viewBox="0 0 24 24"
              onClick={onClose}
              className="cursor-pointer"
            >
              <path
                fill="#e7e9ea"
                d="M7.414 13l5.043 5.04-1.414 1.42L3.586 12l7.457-7.46 1.414 1.42L7.414 11H21v2H7.414z"
              />
            </svg>
            <h1 className="font-bold text-xl text-white">Media Settings</h1>
          </div>
          <button
            className="py-2 px-4 rounded-full bg-white text-black font-bold"
            onClick={handleSave}
          >
            Save
          </button>
        </div>
        
        {/* IMAGE CONTAINER */}
        <div className="w-[500px] h-[600px] flex items-center justify-center bg-white">
          <Image
            src={previewURL}
            alt=""
            width={600}
            height={600}
            className={`w-full ${
              localSettings.type === "original"
                ? "h-full object-contain"
                : localSettings.type === "square"
                ? "aspect-square object-cover object-center" // Centering fix applied
                : "aspect-video object-cover"
            }`}
          />
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 text-white">
            <div
              className={`flex items-center gap-2 cursor-pointer ${
                localSettings.type === "original" ? "text-blue-400" : "text-white"
              }`}
              onClick={() => handleChangeType("original")}
            >
              <svg width={24} viewBox="0 0 24 24">
                <rect
                  x="3"
                  y="3"
                  width="18"
                  height="18"
                  fill="none"
                  stroke={
                    localSettings.type === "original" ? "#3b82f6" : "#e7e9ea"
                  }
                  strokeWidth="2"
                />
              </svg>
              <span>Original</span>
            </div>
            <div
              className={`flex items-center gap-2 cursor-pointer ${
                localSettings.type === "square" ? "text-blue-400" : "text-white"
              }`}
              onClick={() => handleChangeType("square")}
            >
              <svg width={24} viewBox="0 0 24 24">
                <rect
                  x="3"
                  y="3"
                  width="18"
                  height="18"
                  fill="none"
                  stroke={
                    localSettings.type === "square" ? "#3b82f6" : "#e7e9ea"
                  }
                  strokeWidth="2"
                />
              </svg>
              <span>Square</span>
            </div>
            <div
              className={`flex items-center gap-2 cursor-pointer ${
                localSettings.type === "wide" ? "text-blue-400" : "text-white"
              }`}
              onClick={() => handleChangeType("wide")}
            >
              <svg width={24} viewBox="0 0 24 24">
                <rect
                  x="2"
                  y="6"
                  width="20"
                  height="12"
                  fill="none"
                  stroke={localSettings.type === "wide" ? "#3b82f6" : "#e7e9ea"}
                  strokeWidth="2"
                />
              </svg>
              <span>Wide</span>
            </div>
          </div>
          <div
            className={`cursor-pointer py-1 px-4 rounded-full text-black ${
              localSettings.sensitive ? "bg-red-500" : "bg-white"
            }`}
            onClick={handleChangeSensitive}
          >
            Sensitive
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageEditor;
