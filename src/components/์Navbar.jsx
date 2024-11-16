import NavbarItem from "./NavbarItem";

export default function Navbar() {
  return (
    <div className="flex dark:bg-amber-600 bg-amber-100 justify-center p-4">

      <NavbarItem title="Trending" param="fetchTrading" />
      <NavbarItem title="Top Rated" param="fetchTopRated" />
    </div>
  );
}
