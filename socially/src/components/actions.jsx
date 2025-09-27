"use server";

export const shareAction = async (formData, settings) => {
  const file = formData.get("file");
  const desc = formData.get("desc");

  if (!file) {
    throw new Error("No file found in formData");
  }
  const transformation = `w-600,${
    settings.type === "square"
      ? "ar-1-1"
      : settings.type === "wide"
      ? "ar-16-9"
      : ""
  }`;
};