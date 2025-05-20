'use client';

import Image from 'next/image';

export default function Home() {
  const logos = [
    '/blackEye.png',
    '/bytes.png',
    '/yogaGirl.png',
    '/elev8.png',
    '/folklore.png',
  ];

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Desktop View */}
      <div className="hidden md:block absolute inset-0 z-0">
        <Image
          src="/landingImage.jpg"
          alt="Kreators Afrika"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>

      {/* Mobile View */}
      <div className="md:hidden absolute inset-0 z-10">
        {/* Mobile Background */}
        <Image
          src="/backgroundImage.png"
          alt="Kreators Afrika"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />

        {/* Overlayed Content */}
        <div className="relative z-10 flex flex-col justify-between h-full px-6 py-10">
          
          {/* Top: Logo + Spinner */}
          <div className="flex flex-col items-center space-y-6 mt-10">
            {/* Large Logo in a relative box */}
            <div className="w-[90vw] h-[180px] relative">
              <Image
                src="/kreatorsLogo.png"
                alt="Kreators Logo"
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>

            {/* Spinner */}
            <Image
              src="/loadingLogo.png"
              alt="Loading"
              width={200}
              height={36}
            />
          </div>

          {/* Middle: Our Ecosystem */}
          <div className="flex justify-center mt-auto mb-6">
            <Image
              src="/ourEcosystem.png"
              alt="Our Ecosystem"
              width={140}
              height={90}
            />
          </div>

          {/* Bottom: Carousel */}
          <div className="w-full overflow-hidden">
            <div className="flex gap-6 animate-slide whitespace-nowrap items-center w-max">
              {[...logos, ...logos].map((src, i) => (
                <div key={i} className="flex-shrink-0 w-28 h-20 relative">
                  <Image
                    src={src}
                    alt={`Logo ${i}`}
                    fill
                    style={{ objectFit: 'contain' }}
                  />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
