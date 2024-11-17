function ShowGraadQRCode() {
  return (
    <section className="w-full md:w-3/4 m-auto flex flex-col h-screen justify-evenly">

      <article className="m-auto text-center flex flex-col gap-3 my-6 w-full">
        <h1 className="text-black text-4xl font-bold ">Ajude com qualquer valor</h1>
        <h2 className="text-2xl">Escaneie o QR Code para efetuar doação</h2>
      </article>

      <section className="w-full justify-center items-center flex-col gap-6 ">

        <div className="">
          <img className="" src="https://arcanimal.com.br/assets/img/donation-code.svg" alt="PIX QRCODE" />
        </div>

        <article className="flex flex-col gap-5">
          <h1>
            <span className="text-default-blue font-bold">Chave:</span> doe@gradbrasil.org.brdoe@gradbrasil.org.br
          </h1>
          <h2>
            Todas as doações serão feitas diretamente na conta do GRAD Brasil
          </h2>
        </article>

        <div className="w-full">
          <button className="w-full bg-default-blue text-white py-3 border rounded-lg ">Copiar código PIX</button>
        </div>
      </section>

      <article className="flex flex-col gap-3 my-8">
        <h1 className="text-default-blue text-4xl font-bold ">Pix com QR Code, como fazer?</h1>
        <hr className="text-default-blue"/>
        <p>
          Aponte a câmera do seu celular para o QR Code e faça um Pix no app do
          seu banco. Se for no banco Inter, você também pode baixar essa imagem
          e buscar o QR Code na sua galeria.
        </p>
      </article>
    </section>
  );
}

export default ShowGraadQRCode;
