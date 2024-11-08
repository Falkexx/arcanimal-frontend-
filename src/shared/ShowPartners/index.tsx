import { PartnersProps } from "../../data/utils/PartnersTypes";
import petsRsLogo from "../../assets/img/ApoiadoresLogos/petsrs.png";
import gradLogo from "../../assets/img/ApoiadoresLogos/grad-logo.png";
import animalTag from "../../assets/img/ApoiadoresLogos/animaltag.png";
import rsGov from "../../assets/img/ApoiadoresLogos/gov.png";
import dogGoods from "../../assets/img/ApoiadoresLogos/doggoodslogo.png";
import Card from "../Card";

function ShowPartners() {
  const Apoiadores: PartnersProps = {
    tipos: [
      {
        Instituicao: "PETS Rio Grande do Sul",
        Description:
          "Portal criado por voluntários para ajudar no reencontro de pets.",
        ImgUrl: petsRsLogo,
        tag: ["Divulgação", "Conexão"],
        width: null,
        height: null,
        LinkUrl: "https://petsrs.com.br/",
      },
      {
        Instituicao: "GRAD",
        Description:
          "Suporte técnico para o Estado através do Gabinete de Coordenação da Fauna.",
        ImgUrl: gradLogo,
        tag: ["Suporte técnico"],
        width: null,
        height: null,
        LinkUrl: "https://gradbrasil.org.br/",
      },
      {
        Instituicao: "Animal Tag",
        Description:
          "Fornece um aplicativo para o cadastro dos animais microchipados.",
        ImgUrl: animalTag,
        tag: ["Divulgação", "Conexão"],
        width: "12rem",
        height: "6rem",
        LinkUrl: "https://www.animalltag.net/",
      },
      {
        Instituicao: "Governo do Estado do RS",
        Description:
          "Coordena o Gabinete de Coordenação da Fauna através da SEMA",
        ImgUrl: rsGov,
        tag: ["Suporte técnico"],
        width: null,
        height: null,
        LinkUrl: "https://sosenchentes.rs.gov.br/assistencia-para-animais",
      },
      {
        Instituicao: "Dog Goods",
        Description: "Fabricante e Distribuidor de Petiscos para Cães e Gatos",
        ImgUrl: dogGoods,
        width: "10rem",
        height: "6rem",
        tag: ["Doação de petiscos"],
        LinkUrl: "https://www.doggoods.com.br/",
      },
    ],
  };

  return (
    <>
      {Apoiadores.tipos.map((apoiador) => (
        <div className="mr-4 mb-4 flex-wrap " key={apoiador.Instituicao}>
          <Card
            width="360px"
            height="330px"
            hasBorder={true}
            borderColor="border-border-color"
            px="12px"
            py="32px"
            name={apoiador.Instituicao}
            content={apoiador.Description}
            img={apoiador.ImgUrl}
            linkUrl={apoiador.LinkUrl}
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
    //           <img src={e.ImgUrl} className="w-24 h-24 object-fill" />
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
}

export default ShowPartners;
