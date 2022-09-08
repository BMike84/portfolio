import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
    </>
  );
};

export default FooterSocial;
