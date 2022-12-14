import Logo from "./Logo";
import { RiFacebookFill } from "react-icons/ri";
import { AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";
import { ImLinkedin2 } from "react-icons/im";
import SocialLink from "./SocialLink";
import { useTheme } from "../hooks/useTheme";

function Footer() {
  const { isLightTheme } = useTheme();
  return (
    <footer>
      <div
        className={`flex flex-col justify-center gap-2 md:flex-row md:items-center md:justify-between h-[80px] border-t ${
          !isLightTheme && "border-t-gray-800"
        }`}
      >
        <div className="flex items-center justify-between  gap-3">
          <div className="border-r-none md:border-r pr-3">
            <Logo inFooter />
          </div>
          <span className="text-sm font-medium">
            2022 Coder&apos;s blog - @coderBlog&apos;s
          </span>
        </div>
        <div className="flex justify-center gap-2">
          <SocialLink icon={<RiFacebookFill size={20} />} />
          <SocialLink icon={<AiOutlineTwitter size={20} />} />
          <SocialLink icon={<AiFillInstagram size={20} />} />
          <SocialLink icon={<ImLinkedin2 size={20} />} />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
