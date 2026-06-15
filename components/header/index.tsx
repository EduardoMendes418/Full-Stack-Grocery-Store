import { MainHeader } from "./main-header";
import { Navbar } from "./navbar";

export const Header = () => {
  return (
    <header className="w-full">
      <MainHeader />
      <Navbar />
    </header>
  );
};
