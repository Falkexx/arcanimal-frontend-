import React from "react";
import { AnimalCardProps } from "../../data/@types/AnimalCard";
import { FaLocationDot } from "react-icons/fa6";
import Tags from "../Tags";

const formatPhoneNumber = (phone: string) => {
  return phone.replace(/\D/g, "").replace(/(\d{2})(\d{5})(\d{4})/, "+$1 $2-$3");
};

// Componente principal
const AnimalCard: React.FC<AnimalCardProps> = ({ animal }) => {
  const whatsappNumber = "554797219810";

  const animalTags = [
    `${animal.faixaEtaria}`,
    `${animal.porte}`,
    `${animal.sexo}`,
  ];

  // Converte o tipo de animal
  const convertAnimalType = (type: string): string => {
    return type === "Cão" ? "Cachorro" : type;
  };

  // Gera o link do WhatsApp
  const generateWhatsAppLink = (): string => {
    const petLink = `https://petsrs.com.br/pet/${animal.id}`;
    const message = `Gostaria de adotar este ${convertAnimalType(
      animal.tipo
    )}.\nCom id: ${animal.id}\nLocal: ${animal.cidade}\n${petLink}`;
    const phone =
      animal.idAbrigo === "221" || animal.idAbrigo === "250"
        ? whatsappNumber
        : animal.numeroAbrigo || whatsappNumber;
    return `https://wa.me/${formatPhoneNumber(phone)}?text=${encodeURIComponent(
      message
    )}`;
  };

  return (
    <div className="card shadow-lg rounded-lg p-4 bg-white w-[384px] m-auto md:min-w-sm md:w-full h-[600px] ">
      {/* Imagem do animal */}
      <div className="relative">
        {animal.fotoUrl && (
          <img
            className="w-full h-72 object-cover rounded-t-lg"
            src={animal.fotoUrl}
            alt={`Foto do animal ${animal.id}`}
          />
        )}
      </div>

      {/* Informações do animal */}
      <div className="p-4 flex flex-col justify-around h-1/2">
        <section>
          <h5 className="text-lg font-bold mb-2">Animal - {animal.id}</h5>

          <div className="flex items-center text-sm text-gray-500 mb-4">
            <i className="w-4 h-4 mr-2">{<FaLocationDot />}</i>
            <p>
              {animal.cidade} - {animal.nomeAbrigo}
            </p>
          </div>
        </section>

        {/* Tags */}
        <section className="my-3">
          <Tags content={animalTags} key={animal.id} />
        </section>

        {/* Botões */}
        <div className="flex flex-col gap-2">
          <a
            href={generateWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-default-blue text-white py-2 px-4 rounded-lg text-center transition"
          >
            Quero Adotar
          </a>
          <button
            type="button"
            className="bg-gray-100 border border-default-blue text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition"
            onClick={() => console.log("Abrir modal de detalhes")}
          >
            Detalhes
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnimalCard;
