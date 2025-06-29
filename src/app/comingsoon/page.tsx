import Image from "next/image";

export default function ComingSoon() {
  return (
    <main className="relative flex items-center justify-center min-h-screen overflow-hidden bg-neutral">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="https://www.w3schools.com/howto/rain.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 w-full h-full bg-card-background/40 backdrop-blur-sm" />
      <div className="relative z-10 max-w-md w-full mx-4 p-8 text-center rounded-3xl border border-border-dimmed bg-card-background/70 backdrop-blur-md shadow-xl">
        <Image
          src="/images/logo.svg"
          alt="Yellow Chilli logo"
          width={200}
          height={60}
          className="mx-auto mb-6"
        />
        <p className="text-3xl font-semibold text-text-primary mb-2">Opening July 2025</p>
        <p className="text-text-secondary">We're putting the finishing touches on our new menu. Stay tuned!</p>
      </div>
    </main>
  );
}
