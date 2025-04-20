import React, { useState, useEffect } from "react";

const Content = () => {
  const contentData = [
    {
      title: "Design Your Dream Outfit",
      description: "Create stunning outfits with our easy-to-use customization tools. From fabrics to fittings, you are in charge!",
      image: "https://img.freepik.com/free-photo/back-view-woman-posing-ethereal-environment_23-2151113614.jpg?t=st=1743396590~exp=1743400190~hmac=91c3c601881ef78ce6b7f7d834aa27ae54cf9c5fce8585ec2992eff32843b268&w=1380",
      titleColor: "text-orange-400",
      descriptionColor: "text-white",
    },
    {
      title: "Exclusive Handloom Collection",
      description: "Explore our premium handloom fabrics directly sourced from skilled artisans across the country.",
      image: "https://t4.ftcdn.net/jpg/01/62/04/69/360_F_162046939_PAuzExo1n74QN6njyCfb7Bj5gjZNs8u7.jpg",
      titleColor: "text-yellow-200",
      descriptionColor: "text-white",
    },
    {
      title: "Personalized Styling Advice",
      description: "Get expert recommendations on styles that suit your personality and preferences.",
      image: "https://www.yellowbrick.co/wp-content/uploads/2023/08/fashion_blog_personal-stylist-min-1024x576.png",
      titleColor: "text-yellow-500",
      descriptionColor: "text-white",
    },
  ];

  const [currentContent, setCurrentContent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentContent((prevContent) => (prevContent + 1) % contentData.length);
    }, 6000); // Change content every 6 seconds

    return () => clearInterval(interval);
  }, [contentData.length]);

  return (
    <main className="h-screen overflow-hidden">
      <div
        className="h-full w-full bg-cover bg-center flex flex-col justify-center items-center text-white"
        style={{ backgroundImage: `url(${contentData[currentContent].image})` }}
      >
        <h1 className={`text-5xl font-bold mb-4 ${contentData[currentContent].titleColor}`}>
          {contentData[currentContent].title}
        </h1>
        <p className={`text-lg ${contentData[currentContent].descriptionColor}`}>
          {contentData[currentContent].description}
        </p>
      </div>
    </main>
  );
};

export default Content;
