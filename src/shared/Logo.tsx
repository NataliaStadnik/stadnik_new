import { Link } from "react-router-dom";
import { PATHS } from "../services/routes/path";

const Logo = () => {
  return (
    <Link
      to={PATHS.HOME}
      className="text-2xl font-serif font-bold text-zen-text dark:text-zen-dark-text relative z-50 transition-colors"
    >
      Dr.<span className="text-zen-soft pl-1.5">Stadnik</span>
    </Link>
  );
};

export default Logo;
