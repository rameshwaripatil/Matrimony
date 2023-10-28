import React, { useRef, useEffect } from 'react';

const WatermarkedImage = ({ imageUrl }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const img = new Image();
    img.src = imageUrl;
    img.onload = () => {
      canvas.width = 280;
      canvas.height = 280;

      // Draw image as the background
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      // Calculate hypotenuse length
      const hypotenuseLength = Math.sqrt(canvas.width ** 2 + canvas.height ** 2);

      // Calculate position for the watermark text along the hypotenuse
      const xPosition = canvas.width / 2;
      const yPosition = canvas.height / 2;

      // Draw watermark text along the hypotenuse
      ctx.font = '24px Arial';
      ctx.fillStyle = 'rgba(255, 0, 0, 0.5)';
      const watermarkText = 'Royal Marriage Bureau';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(watermarkText, xPosition, yPosition);
    };
  }, [imageUrl]);

  return <canvas ref={canvasRef} />;
};

export default WatermarkedImage;
