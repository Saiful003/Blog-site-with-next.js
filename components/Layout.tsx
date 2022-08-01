import CategoriesNav from "./CategoriesNav";
import Container from "./Container";
import Footer from "./Footer";
import Header from "./Header";

type props = {
  children: React.ReactNode;
};

function Layout({ children }: props) {
  return (
    <Container>
      <Header />
      <CategoriesNav />
      <main className="my-4">{children}</main>
      <Footer />
    </Container>
  );
}

export default Layout;
