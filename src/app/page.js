'use client';

export default function Home() {
  return (
    <div className="w-screen h-screen overflow-hidden relative">

      {/* Desktop video */}
      <video
        className="hidden md:block absolute inset-0 w-full h-full object-cover"
        src="/underConstructionDesk.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Mobile video */}
      <video
        className="block md:hidden absolute inset-0 w-full h-full object-cover"
        src="/underConstructionMob.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

    </div>
  );
}
