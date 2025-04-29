const Banner = ({
  title,
  paragraph,
}: {
  title?: string;
  paragraph?: string;
}) => {
  return (
    <div className="relative w-full">
      <header className="grid !min-h-[24rem] bg-gradient px-8">
        <div className="container mt-16 mb:32 grid h-full w-full place-items-center lg:mt-14">
          <div>
            <h1 className="text-4xl text-center font-bold text-white mb-4">
              {title || "Your Perfect Sales Force Management System"}
            </h1>
            <p className="text-lg text-center text-white mb-7">
              {paragraph ||
                "Our app is here to empower you on your business for guarantee growth, anytime and anywhere."}
            </p>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Banner;
