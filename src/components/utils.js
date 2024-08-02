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
  const defaultImageUrl = "https://i.ibb.co/RDyqbJB/nazmus-sakib.png";

  const imageUrl = image?.src || defaultImageUrl;

  return {
    title: title ? "Nazmus Sakib | " + title : "Nazmus Sakib",
    description: description || "Welcome to the portfolio of Nazmus Sakib",
    image: imageUrl,
    url: path ? "https://nazmussakib.dev/" + path : "https://nazmussakib.dev/",
    type: type ? "Nazmus Sakib " + type : "Nazmus Sakib",
    siteName: "Nazmus Sakib",
    facebook: "https://www.facebook.com/nazmus.sakib.sheam/",
    openGraph: {
      type: "website",
      locale: "en_IE",
      url: path
        ? "https://nazmussakib.dev/" + path
        : "https://nazmussakib.dev/",
      title: title ? "Nazmus Sakib | " + title : "Nazmus Sakib",
      description: description || "Welcome to the portfolio of Nazmus Sakib",
      images: [
        {
          url: imageUrl,
        },
      ],
      site_name: "Nazmus Sakib",
    },
  };
};
