import Navbar from "../../shared/navbar/navbar";
import ShowPartners from "../../shared/ShowPartners";

function Apoiadores() {
  return (
    <>
      <Navbar />
      <article className="PageContainer">
        <h1 className="text-primary ">Parceiros</h1>
        <h2 className="text-primary">Veja quem está nos apoiando</h2>
      </article>

      <section>
        <ShowPartners />
      </section>
    </>
  );
}

export default Apoiadores;
