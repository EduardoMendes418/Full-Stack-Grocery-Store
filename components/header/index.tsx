import { TopBar } from "./top-bar";
import { MainHeader } from "./main-header";
import { Navbar } from "./navbar";

export const Header = () => {
  return (
    <header className="w-full">
      <TopBar />
      <MainHeader />
      <Navbar />
    </header>
  );
};
