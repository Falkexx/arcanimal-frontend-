import Card from "../../shared/Card";
import Navbar from "../../shared/navbar/navbar";
import ShowPartners from "../../shared/ShowPartners";

function Apoiadores() {
  return (
    <>
      <Navbar />
      <div className="px-container">
        <article>
          <h1 className="font-medium leading-10 text-2xl-custom text-default-blue">
            Parceiros
          </h1>
          <h2 className="leading-7 text-xl text-default-blue my-[14px] ">
            Veja quem está nos apoiando
          </h2>
        </article>
        <section className="">
          <ShowPartners />
        </section>
      </div>
    </>
  );
}

export default Apoiadores;
