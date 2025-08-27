import Image from "next/image";

export const Logo: React.FC = () => {
  return (
    <div className="flex items-center justify-center">
      <Image src="/images/logo.jpg" alt="Logo da aplicação." fill  className="object-contain h-10 w-auto" />
    </div>
  );
};
