import Link from "next/link";

export default function MenuItem({ title, address, Icon }) {
  return (
    <Link href={address}>
      <Icon className="lg:hidden" />
      <p className="uppercase hidden sm:inline text-sm">{title}</p>
    </Link>
  );
}
