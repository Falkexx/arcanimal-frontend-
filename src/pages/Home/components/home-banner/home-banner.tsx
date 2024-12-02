import "./home-banner.scss";
import { Link, NavLink } from "react-router-dom";

function homerBanner() {
  return (
    <main className="flex flex-wrap flex-row content-end padding-x lg:content-center banner-container items-center relative overflow-x-hidden dog py-12">
      <section className="lg:w-2/4 sm:w-2/3 text-lg-left lg:pr-5 mt-5 lg:pt-0 extra-padding">
        <h1 className="title-color font-family font-bold text-4xl pb-2 title-size text-blue-500 block">
          Ajudando animais em
          <br /> emergência a encontrar
          <br />
          um novo lar.
        </h1>
      </section>

      <section className="flex flex-col md:flex-row sm:w-full gap-3">
        <section className="flex flex-col gap-3 p-12 border rounded shadow">
          <article>
            <p>Para sua familia que deseja um novo amigo</p>
          </article>
          <Link to="/animais">
            <a
              target="_blank"
              className="btn-orange text-white rounded-full px-4 py-2 text-xl h-13 flex justify-center width=[100]"
            >
              Quero adotar
            </a>
          </Link>
        </section>
        <section className="flex flex-col gap-3 p-12 border rounder shadow">
          <article>
            <p className="fs-1">Para você que perdeu seu animalzinho</p>
          </article>
          <div>
            <a
              href="https://petsrs.com.br/"
              target="_blank"
              rel="noreferrer"
              className="bg-color items-center text-center text-white text-xl flex justify-center h-13 width=[100] rounded-full px-4 py-2"
            >
              Encontrar meu pet
            </a>
          </div>
        </section>
      </section>
    </main>
  );
}

export default homerBanner;
