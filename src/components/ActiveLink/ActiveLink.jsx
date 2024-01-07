import Link from "next/link";
import { usePathname } from "next/navigation";

const ActiveLink = ({ href, children, exact = false }) => {
  const pathName = usePathname();
  const isActive = exact ? pathName === href : pathName.startsWith(href);


  return (
    <Link
      href={href}
      className={
        isActive
          ? "text-bandYellow no-underline "
          : "text-white hover:text-bandYellow no-underline"
      }
    >
      {children}
    </Link>
  );
};

export default ActiveLink;
