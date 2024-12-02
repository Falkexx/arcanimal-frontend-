import Navbar from "../../shared/navbar/navbar";
import ShowPartners from "../../shared/ShowPartners";

const Apoiadores = () => {
  return (
    <>
      <div>
        <div className="md:px-4 lg:px-container">
          <h1 className="font-medium leading-10 text-2xl-custom text-default-blue">
            Parceiros
          </h1>
          <h2 className="leading-7 text-xl text-default-blue my-[14px] font-medium ">
            Veja quem está nos apoiando
          </h2>
        </div>
        <section className="flex-custom lg:px-container">
          <ShowPartners />
        </section>
      </div>
    </>
  );
};

export default Apoiadores;
