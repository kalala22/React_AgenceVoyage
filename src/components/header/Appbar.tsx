import LogoHeader from "./LogoHeader";

interface AppBarList {
  id: number;
  title: string;
  style?: string;
}
export default function AppBar() {
  const appbars: AppBarList[] = [
    { id: 1, title: "Destinations", },
    { id: 2, title: "Hotels", },
    { id: 3, title: "Flights" , },
    { id: 4, title: "Bookings", },
    { id: 5, title: "Login" , },
    { id: 6, title: "Sign Up" , style: "border  px-4 py-2 rounded-sm hover:cursor-pointer hover:bg-primary hover:text-white hover:border-white transition duration-300" },
  ];
  const navItems = appbars.map((appbar) => (
    <li key={appbar.id}  className={appbar.style ? appbar.style : "hover:cursor-pointer hover:text-primary transition duration-300"}>
      {appbar.title}
    </li>
  ));
  return (
    <header>
      <nav className="p-4 flex justify-between items-center font-roboto text-lg">
       <div>
        <LogoHeader />
       </div>
       <div>
          <ul className="flex space-x-12 items-center ">
            {navItems}
          </ul>
       </div>
      </nav>
    </header>
  );
}  