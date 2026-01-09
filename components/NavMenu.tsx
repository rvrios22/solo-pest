import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
} from "./ui/navigation-menu";

function NavMenu() {
  return (
    <NavigationMenu className="sticky top-0 w-full max-w-screen border-b border-slate-300 bg-slate-100 py-4 shadow-sm md:block">
      <div className="flex">
        <NavigationMenuItem className="list-none">
          <NavigationMenuLink asChild className="text-lg">
            <Link href="/">Home</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem className="list-none">
          <NavigationMenuLink asChild className="text-lg">
            <Link href="/why">Why SoloPest?</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </div>
    </NavigationMenu>
  );
}

export default NavMenu;
