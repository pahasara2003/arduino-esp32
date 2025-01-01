"use client";
import { useState, useEffect } from "react";
import { Image, Skeleton } from "@nextui-org/react";

export default function Home() {
  const [encodedImage, setEncodedImage] = useState("");
  const [isLoaded, setLoad] = useState(false);

  useEffect(() => {
    setInterval(async () => {
      fetch(`https://arduino-esp32.vercel.app/api/imageCapture`)
        .then((res) => res.json())
        .then((data) => {
          setEncodedImage(`data:image/png;base64,${data.Image}`);
          setLoad(true);
        });
    }, 100);
  });

  return (
    <div className="h-screen flex items-center justify-center">
      <Skeleton className="rounded-lg" isLoaded={isLoaded}>
        <Image width={500} height={400} src={encodedImage} />
      </Skeleton>
    </div>
  );
}
