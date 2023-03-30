import localFont from "next/font/local";

const ogg = localFont({
  src: [
    {
      path: "./OggText-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./OggText-LightItalic.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "./OggText-Medium.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./OggText-MediumItalic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./OggText-Book.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./OggText-BookItalic.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "./OggText-Bold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./OggText-BoldItalic.otf",
      weight: "600",
      style: "italic",
    },
    {
      path: "./OggText-Extrabold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./OggText-ExtraboldItalic.otf",
      weight: "700",
      style: "italic",
    },
  ],
});

export default ogg;
