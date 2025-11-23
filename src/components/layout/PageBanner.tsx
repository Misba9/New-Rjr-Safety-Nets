interface PageBannerProps {
  title: string;
  imageUrl: string;
}

const PageBanner = ({ title, imageUrl }: PageBannerProps) => {
  return (
    <div 
      className="h-48 md:h-64 lg:h-80 bg-cover bg-center relative"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="absolute inset-0 bg-brand-dark-blue/70 flex items-center justify-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center px-4">{title}</h1>
      </div>
    </div>
  );
};

export default PageBanner;
