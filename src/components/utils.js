export const handleDownloadResume = () => {
  const url =
    "https://drive.google.com/u/0/uc?id=1XhOOmSn6iqDiaA-DNsgsBg3HS7YFNtfa&export=download";
  const fileName = "Nazmus-Sakib-Resume";
  const link = document.createElement("a");
  link.href = url;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.download = fileName;
  link.click();
};
