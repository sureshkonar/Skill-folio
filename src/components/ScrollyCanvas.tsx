"use client";

import { useRef, useEffect, useState } from "react";
import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";

const FRAME_COUNT = 120;
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function ScrollyCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);

  // Preload images
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new Image();
      const frameIndex = i.toString().padStart(3, "0");
      img.src = `${basePath}/sequence/ezgif-frame-${frameIndex}.png`;
      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

  const drawFrame = (index: number) => {
    if (images.length === 0) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = images[index];

    if (img && img.complete) {
      // Draw image ensuring object-fit: cover logic
      const hRatio = canvas.width / img.width;
      const vRatio = canvas.height / img.height;
      const ratio = Math.max(hRatio, vRatio);

      const centerShift_x = (canvas.width - img.width * ratio) / 2;
      const centerShift_y = (canvas.height - img.height * ratio) / 2;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(
        img,
        0, 0, img.width, img.height,
        centerShift_x, centerShift_y, img.width * ratio, img.height * ratio
      );

      // Mask the "veo" logo seamlessly using a localized blur effect 
      // instead of a hard dark box which looks jarring on colorful frames.
      const maskWidth = 140;
      const maskHeight = 60;
      const maskX = canvas.width - maskWidth;
      const maskY = canvas.height - maskHeight;

      ctx.save();

      // Create a clip region for just the bottom right corner
      ctx.beginPath();
      ctx.rect(maskX, maskY, maskWidth, maskHeight);
      ctx.clip();

      // Apply a strong blur filter
      ctx.filter = "blur(20px)";

      // Redraw the image slightly larger within the clipped region 
      // to let the blurred colors bleed and obscure the sharp "Veo" text
      const blurScale = 1.05;
      const bw = img.width * ratio * blurScale;
      const bh = img.height * ratio * blurScale;
      const bx = (canvas.width - bw) / 2;
      const by = (canvas.height - bh) / 2;

      ctx.drawImage(img, 0, 0, img.width, img.height, bx, by, bw, bh);

      ctx.restore();
    }
  };

  useMotionValueEvent(frameIndex, "change", (latest) => {
    const index = Math.min(FRAME_COUNT - 1, Math.max(0, Math.floor(latest)));
    drawFrame(index);
  });

  // Handle Resize & Initial Draw
  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const index = Math.min(FRAME_COUNT - 1, Math.max(0, Math.floor(frameIndex.get())));
      drawFrame(index);
    };

    // Check if images are loaded to draw first frame
    if (images.length > 0) {
      images[0].onload = () => handleResize();
      handleResize();
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [images]);

  return (
    <div ref={containerRef} className="relative h-[500vh] w-full bg-[#121212]">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas ref={canvasRef} className="h-full w-full block" />
      </div>
    </div>
  );
}
