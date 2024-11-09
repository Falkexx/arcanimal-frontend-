import { PartnersProps } from "../../data/utils/PartnersTypes";
import petsRsLogo from "../../assets/img/ApoiadoresLogos/petsrs.png";
import gradLogo from "../../assets/img/ApoiadoresLogos/grad-logo.png";
import animalTag from "../../assets/img/ApoiadoresLogos/animaltag.png";
import rsGov from "../../assets/img/ApoiadoresLogos/gov.png";
import dogGoods from "../../assets/img/ApoiadoresLogos/doggoodslogo.png";
import Card from "../Card";

const ShowPartners = () => {
  const apoiadores: PartnersProps = {
    tipos: [
      {
        instituition: "PETS Rio Grande do Sul",
        description:
          "Portal criado por voluntários para ajudar no reencontro de pets.",
        imgUrl: petsRsLogo,
        tag: ["Divulgação", "Conexão"],
        width: null,
        height: null,
        linkUrl: "https://petsrs.com.br/",
      },
      {
        instituition: "GRAD",
        description:
          "Suporte técnico para o Estado através do Gabinete de Coordenação da Fauna.",
        imgUrl: gradLogo,
        tag: ["Suporte técnico"],
        width: null,
        height: null,
        linkUrl: "https://gradbrasil.org.br/",
      },
      {
        instituition: "Animal Tag",
        description:
          "Fornece um aplicativo para o cadastro dos animais microchipados.",
        imgUrl: animalTag,
        tag: ["Divulgação", "Conexão"],
        width: "12rem",
        height: "6rem",
        linkUrl: "https://www.animalltag.net/",
      },
      {
        instituition: "Governo do Estado do RS",
        description:
          "Coordena o Gabinete de Coordenação da Fauna através da SEMA",
        imgUrl: rsGov,
        tag: ["Suporte técnico"],
        width: null,
        height: null,
        linkUrl: "https://sosenchentes.rs.gov.br/assistencia-para-animais",
      },
      {
        instituition: "Dog Goods",
        description: "Fabricante e Distribuidor de Petiscos para Cães e Gatos",
        imgUrl: dogGoods,
        width: "10rem",
        height: "6rem",
        tag: ["Doação de petiscos"],
        linkUrl: "https://www.doggoods.com.br/",
      },
    ],
  };

  return (
    <>
      {apoiadores.tipos.map((apoiador) => (
        <div className="mb-4 mt-5 mx-2 flex-wrap " key={apoiador.instituition}>
          <Card
            maxWidth="360px"
            maxHeight="330px"
            hasBorder={true}
            borderColor="border-border-color"
            px="12px"
            py="32px"
            name={apoiador.instituition}
            content={apoiador.description}
            img={apoiador.imgUrl}
            linkUrl={apoiador.linkUrl}
            tags={apoiador.tag}
          />
        </div>
      ))}
    </>
    // <section className="w-[357px] h-[327px]">
    //   {Apoiadores.tipos.map((e) => {
    //     return (
    //       <article>
    //         <div>
    //           <h1>{e.Instituicao}</h1>
    //           <p>{e.Description}</p>
    //         </div>

    //         <div>
    //           <img src={e.imgUrl} className="w-24 h-24 object-fill" />
    //         </div>

    //         <div>
    //           {e.tag.map((e) => {
    //             return <div className="bg-blue-800">{e}</div>;
    //           })}
    //         </div>
    //       </article>
    //     );
    //   })}
    // </section>
  );
};

export default ShowPartners;
