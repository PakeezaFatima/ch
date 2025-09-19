import Image from "next/image";

export default function HomePage() {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold mb-4">Welcome to My Boutique</h2>
      <p className="mb-6 text-gray-600">
        Discover exclusive fashion collections designed with love and elegance.
      </p>
      <div className="flex justify-center">
        <Image
          src="/boutique.jpg"
          alt="Boutique"
          width={500}
          height={300}
          className="rounded-xl shadow-lg"
        />
      </div>
    </div>
  );
}
