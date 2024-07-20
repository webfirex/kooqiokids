import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="w-full min-h-screen flex justify-center items-center">
      <img src="1.jpg" className="w-full max-w-[600px]" alt="image" />
    </main>
  );
}
