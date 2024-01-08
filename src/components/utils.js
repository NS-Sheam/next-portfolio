import myimg from "../assets/images/my-img.jpg";
export const handleDownloadResume = () => {
  // Check if the code is running on the client side
  if (typeof window !== "undefined") {
    const url =
      "https://drive.google.com/u/0/uc?id=1XhOOmSn6iqDiaA-DNsgsBg3HS7YFNtfa&export=download";
    const fileName = "Nazmus-Sakib-Resume";
    const link = document.createElement("a");
    link.href = url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.download = fileName;
    link.click();
  }
};

export const generateMetaDatas = async (
  title,
  description,
  image = myimg,
  path,
  type,
) => {
  return {
    title: title ? "Nazmus Sakib|" + title : "Nazmus Sakib",
    description: description || "Welcome to the sky of Nazmus Sakib",
    image: image ? image : myimg,
    url: path ? "https://nazmus-sakib.me/" + path : "https://nazmus-sakib.me/",
    type: type ? "Nazmus Sakib" + type : "Nazmus Sakib",
    siteName: "Nazmus Sakib",
    facebook: "https://www.facebook.com/nazmus.sakib.sheam/",
    openGraph: {
      type: "website",
      locale: "en_IE",
      url: path
        ? "https://nazmus-sakib.me/" + path
        : "https://nazmus-sakib.me/",
      title: title ? "Nazmus Sakib|" + title : "Nazmus Sakib",
      description: description || "Welcome to the sky of Nazmus Sakib",
      images: [
        {
          url: image ? image.src : myimg.src,
        },
      ],
      site_name: "Nazmus Sakib",
    },
  };
};
