import Link from "next/link";
import Image from "next/image";

export const Logo = () => {
  return (
    <Link href="/" className="inline-flex items-center">
      <Image 
        src="/img/logo.svg" 
        alt="BoroBazar" 
        width={131} 
        height={42} 
        priority
        className="w-auto h-8 lg:h-10"
      />
    </Link>
  );
};
