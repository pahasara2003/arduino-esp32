"use client";
import { useState, useEffect } from "react";
import { Image } from "@nextui-org/react";
export default function Home() {
  const [encodedImage, setEncodedImage] = useState("");

  useEffect(() => {
    setInterval(async () => {
      fetch(`https://arduino-esp32.vercel.app/api/imageCapture`)
        .then((res) => res.json())
        .then((data) => {
          if (data.Image != "") {
            setEncodedImage(`data:image/png;base64,${data.Image}`);
          }
        });
    }, 1000);
  });

  return (
    <div className="h-screen flex items-center justify-center">
      <Image width={500} height={400} src={encodedImage} />
    </div>
  );
}
