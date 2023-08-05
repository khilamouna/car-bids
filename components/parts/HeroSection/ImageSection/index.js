import Image from "next/image";

const Index = () => {
  return (
    <div className="hero__image-container">
      <div className="hero__image">
        <Image src="/hero.png" alt="hero" fill className="object-contain" />
      </div>

      <div className="hero__image-overlay" />
    </div>
  );
};
export default Index;
