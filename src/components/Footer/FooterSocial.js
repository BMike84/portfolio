import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SiUpwork } from "react-icons/si";

const FooterSocial = () => {
  return (
    <>
      <a href="https://github.com/BMike84" target="blank">
        <span>
          <FontAwesomeIcon icon="fa-brands fa-github" />
        </span>
        GitHub
      </a>
      <a
        href="https://linkedin.com/in/michael-buffone-072a4723a"
        target="blank"
      >
        <span>
          <FontAwesomeIcon icon="fa-brands fa-linkedin" />
        </span>
        Linkedin
      </a>
      <a
        href="https://www.upwork.com/freelancers/~017b7de11424dccba0"
        target="blank"
      >
        <span>
          <SiUpwork />
        </span>
        Upwork
      </a>
    </>
  );
};

export default FooterSocial;
