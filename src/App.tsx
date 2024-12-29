import Rota from "../src/routes/index";
import Footer from "./shared/Footer";
import Navbar from "./shared/navbar/navbar";

function app() {
  return (
    <>
      <Rota />
      <Footer />
    </>
  );
}

export default app;
