import { useTheme } from "../hooks/useTheme";
import CategoriesNav from "./CategoriesNav";
import Container from "./Container";
import Footer from "./Footer";
import Header from "./Header";

type props = {
  children: React.ReactNode;
};

function Layout({ children }: props) {
  const { isLightTheme } = useTheme();
  return (
    <div className={`${isLightTheme ? " bg-white" : " bg-black"}`}>
      <Container>
        <Header />
        <main className="my-4">{children}</main>
        <Footer />
      </Container>
    </div>
  );
}

export default Layout;
