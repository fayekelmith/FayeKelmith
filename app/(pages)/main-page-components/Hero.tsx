import Image from "next/image";
import { Card } from "@/components/ui/card";
const Hero = () => {
  return (
    <header className="flex justify-center items-center min-w-full bg-slate-100 p-10 dark:bg-slate-900 dark:text-slate-200">
      <div className="mx-auto">
        <h1 className="py-4">Hello!</h1>
        <h2>
          I am <span className="hover:underline">Faye Kelmith</span>
        </h2>
        <h2>
          I write <code className="">Code</code> and <span>Essays</span>
        </h2>
      </div>
      <Card className="shadow-xl rounded-xl">
        <Image
          src="/images/kelmith.png"
          alt="Faye Kelmith"
          width={400}
          height={400}
          className="dark:bg-slate-800 dark:opacity-80 rounded-xl"
        />
      </Card>
    </header>
  );
};

export default Hero;
