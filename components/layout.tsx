import Footer from "./footer";
import Header from "./header";

const Layout = ({ children }: WithChildren) => {
  return (
    <main className="w-full">
      <Header className="drop-shadow-md" />
      {children}
      <Footer className="bottom-0 w-full" />
    </main>
  );
};

export default Layout;
