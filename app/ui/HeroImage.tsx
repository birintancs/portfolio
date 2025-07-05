import Image from 'next/image';

export default function HeroImage() {
  return (
    <div className="relative group flex-shrink-0 w-60 h-60 md:w-72 md:h-72 lg:w-80 lg:h-80">

      {/* Border / hover background */}
      <div className="hidden lg:block absolute top-3 left-3 w-full h-full bg-bg2 rounded-none transition duration-100 border-4 border-primary" />

      {/* Image container */}
      <div className="relative w-full h-full border-4 border-bg3 rounded-full lg:rounded-none overflow-hidden">
        <Image
          src="/1000007715.jpg"
          alt="Birintan Kandasamy Headshot"
          fill
          className="object-cover transition duration-100 rounded-full lg:rounded-none"
        />
      </div>
    </div>
  );
}
