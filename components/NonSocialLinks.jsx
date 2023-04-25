import { getLinksLinks } from "../utils/data";
const NonSocialLinks = () => {
  const socialLinks = getLinksLinks(1);

  return (
    <>
      <div className="flex flex-col items-center gap-y-11">
        {socialLinks.map((link) => {
          return (
            <>
              <div className="box-border border-4 border-black w-80 h-13 bg-[#F2C00F] box-shadow-[0_4px_4px_4px_rgba(0,0,0,0)]">
                <p className=" text-center text-4xl leading-10 align-middle">
                  {link.title}
                </p>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default NonSocialLinks;
