import { MainHeader } from "./main-header";
import { Navbar } from "./navbar";
import { MobileNavigation } from "./mobile-navigation";

export const Header = () => {
  return (
    <header className="w-full">
      <MainHeader />
      <Navbar />
      <MobileNavigation />
    </header>
  );
};
