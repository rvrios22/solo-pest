import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
} from "./ui/navigation-menu";

function NavMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuItem>
        <NavigationMenuLink asChild>
          <Link href="/">Home</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem className="list-none">
        <NavigationMenuLink asChild>
          <Link href="/why">Why SoloPest?</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
    </NavigationMenu>
  );
}

export default NavMenu;
