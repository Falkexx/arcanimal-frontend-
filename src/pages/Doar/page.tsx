import Navbar from "../../shared/navbar/navbar";
import ShowGraadQRCode from "../../shared/ShowGraadQRCode";

function page() {
  return (
    <>
      <Navbar />

      <section className="px-5 BaseFont w-full">
        {/*Sessão falando sobre a Grad */}
        <section className="flex flex-row w-full items-center my-10">
          <article className="w-2/4 flex flex-col gap-4">
            <h1 className="font-bold text-black text-4xl">Ajude a Grad</h1>
            <p className="leading-6">
              O Grupo de Resposta a Animais em Desastres (GRAD) é um grupo de
              voluntários composto por mais de 80 membros, de diferentes áreas
              de atuação e estados Brasileiros, com objetivo de promover ajuda
              humanitária aos animais e pessoas em circunstâncias de
              vulnerabilidade em desastres e comunidades isoladas, com equipe
              técnica qualificada e capacitada para atuar em diferentes
              situações.
            </p>
          </article>

          <article className="w-2/4 flex justify-center">
            <h1 className="text-center">Aqui vai ir a Logo</h1>
          </article>
        </section>

        {/*Sessão de QRCode */}
        <section>
            <ShowGraadQRCode/>
        </section>
      </section>
    </>
  );
}

export default page;
