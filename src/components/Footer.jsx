import { Link } from "react-router-dom";
import Icon from "./Icon";
import { profile, socials } from "../data/site";

function Footer() {
  return (
    <footer className="mt-24 border-t border-line">
      <div className="shell flex flex-col items-center justify-between gap-6 py-10 sm:flex-row">
        <div className="text-center sm:text-left">
          <Link to="/" className="font-display text-lg font-bold">
            <span className="text-gradient">{profile.brand}</span>
            <span className="text-cyan">~</span>
          </Link>
          <p className="mt-1 text-sm">
            © {new Date().getFullYear()} {profile.firstName} {profile.lastName}. Designed
            &amp; built in {profile.location}.
          </p>
        </div>

        <ul className="flex items-center gap-3">
          {socials.map((s) => (
            <li key={s.name}>
              <a
                href={s.url}
                target={s.url.startsWith("mailto:") ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={s.name}
                className="icon-btn"
              >
                <Icon name={s.icon} size={18} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
