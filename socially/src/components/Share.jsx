"use client";

import React, { useState, useRef } from "react";
import {
  upload,
  ImageKitAbortError,
  ImageKitInvalidRequestError,
  ImageKitUploadNetworkError,
  ImageKitServerError,
} from "@imagekit/next";
import CustomImage from "./Image";
import { GrEmoji, GrLocation } from "react-icons/gr";
import { CgOptions } from "react-icons/cg";
import {
  MdOutlineAddPhotoAlternate,
  MdOutlineGifBox,
  MdOutlineFormatItalic,
} from "react-icons/md";
import NextImage from "next/image";
import { LuCalendarClock } from "react-icons/lu";
import { BiBold } from "react-icons/bi";
import { shareAction } from "./actions.jsx";
import ImageEditor from "./ImageEditor";

const Share = () => {
  const [progress, setProgress] = useState(0);
  const fileInputRef = useRef(null);
  const [desc, setDesc] = useState("");
  const [uploading, setUploading] = useState(false);
  const [media, setMedia] = useState(null);
  const [isEditorOpen, setIsEditorOpen] = useState(false);

  const [settings, setSettings] = useState({
    type: "original", 
    sensitive: false,
  });

  const authenticator = async () => {
    try {
      const response = await fetch("/api/upload-auth");
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(
          `Authentication request failed with status ${response.status}: ${errorText}`
        );
      }
      const data = await response.json();
      const { signature, expire, token, publicKey } = data;
      return { signature, expire, token, publicKey };
    } catch (error) {
      console.error("Authentication error during file upload:", error);
      throw new Error("Failed to get upload authentication parameters.");
    }
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    setUploading(true);
    setProgress(0);

    const file = fileInputRef.current?.files[0];
    if (!file) {
      setUploading(false);
      return;
    }

    try {
      const authParams = await authenticator();
      const { signature, expire, token, publicKey } = authParams;

      const uploadResponse = await upload({
        file,
        fileName: file.name,
        token,
        expire,
        signature,
        publicKey,
        onProgress: (evt) => {
          setProgress((evt.loaded / evt.total) * 100);
        },
      });

      const formData = new FormData();
      formData.append("file", file);
      formData.append("desc", desc);

      await shareAction(formData, settings);

      setDesc("");
      setMedia(null);
      setSettings({
        type: "original",
        sensitive: false,
      });
      if (fileInputRef.current) fileInputRef.current.value = "";
    } catch (err) {
      if (err instanceof ImageKitAbortError) {
        console.error("Upload aborted:", err.reason);
      } else if (err instanceof ImageKitInvalidRequestError) {
        console.error("Invalid upload request:", err.message);
      } else if (err instanceof ImageKitUploadNetworkError) {
        console.error("Network issue during upload:", err.message);
      } else if (err instanceof ImageKitServerError) {
        console.error("ImageKit server error:", err.message);
      } else {
        console.error("Unknown upload error:", err);
      }
    } finally {
      setUploading(false);
    }
  };

  const previewURL = media ? URL.createObjectURL(media) : null;

  return (
    <form onSubmit={handleUpload} className="p-4 flex gap-4">
      <div className="relative w-10 h-10 rounded-full overflow-hidden">
        <CustomImage
          src="/image.jpg"
          alt="User Profile"
          w={100}
          h={100}
          tr={true}
          priority
        />
      </div>

      <div className="flex-1 flex flex-col gap-4">
        <input
          type="text"
          name="desc"
          placeholder="What is happening?!"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          className="bg-transparent outline-none placeholder:text-gray-400 text-xl"
        />

        {previewURL && (
  <div className="relative w-[500px] h-[600px] rounded-xl overflow-hidden bg-gray-100 flex items-center justify-center">
    <NextImage
      src={previewURL}
      alt="Preview"
      width={600}
      height={600}
      className={`w-full ${
        settings.type === "original"
          ? "h-full object-contain"
          : settings.type === "square"
          ? "aspect-square object-cover object-center"
          : "aspect-video object-cover"
      }`}
    />
    <div
      onClick={() => setIsEditorOpen(true)}
      className="absolute top-2 right-2 bg-black opacity-75 text-white py-1 px-4 rounded-full font-bold text-sm cursor-pointer"
    >
      Edit
    </div>
  </div>
)}


        {isEditorOpen && previewURL && (
          <ImageEditor
            onClose={() => setIsEditorOpen(false)}
            previewURL={previewURL}
            settings={settings}
            setSettings={setSettings}
          />
        )}

        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div className="flex gap-4 flex-wrap">
            <input
              ref={fileInputRef}
              type="file"
              id="file"
              className="hidden"
              onChange={(e) => setMedia(e.target.files[0])}
            />
            <label htmlFor="file" className="cursor-pointer">
              <MdOutlineAddPhotoAlternate className="w-5 h-5 cursor-pointer text-purple-600" />
            </label>
            <MdOutlineGifBox className="w-5 h-5 cursor-pointer text-purple-600" />
            <CgOptions className="w-5 h-5 cursor-pointer text-purple-600" />
            <GrEmoji className="w-5 h-5 cursor-pointer text-purple-600" />
            <LuCalendarClock className="w-5 h-5 cursor-pointer text-purple-600" />
            <GrLocation className="w-5 h-5 cursor-pointer text-purple-600" />
            <BiBold className="w-5 h-5 cursor-pointer text-purple-600" />
            <MdOutlineFormatItalic className="w-5 h-5 cursor-pointer text-purple-600" />
          </div>

          <button
            type="submit"
            className="bg-white text-black font-bold rounded-full py-2 px-4"
            disabled={uploading}
          >
            {uploading ? `Uploading... ${Math.round(progress)}%` : "Post"}
          </button>
        </div>

        {uploading && (
          <progress value={progress} max={100} className="w-full mt-2" />
        )}
      </div>
    </form>
  );
};

export default Share;


