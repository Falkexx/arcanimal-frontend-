import Navbar from "../../shared/navbar/navbar";
import LoginForms from "../../ui/components/LoginForms/index";

function page() {
  return (
    <>
      <Navbar />
      <section className="w-full h-[90vh] justify-center flex flex-col items-center ">
        <section className="w-2/4">
          <article className="flex flex-col gap-2 my-4 ">
            <h1 className="text-5xl">Login</h1>
            <p className="text-2xl">
              Faça o login para acessar e gerenciar informações
            </p>
          </article>

          <LoginForms />
        </section>
      </section>
    </>
  );
}

export default page;
