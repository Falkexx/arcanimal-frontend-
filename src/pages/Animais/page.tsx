import { AbrigoService, AbrigoDto } from "../../data/services/abrigos.service";
import { useEffect, useState, useMemo } from "react";
import useAnimals from "../../data/hooks/useAnimals";
import AnimalsFilter from "../../shared/AnimalsFilter";
import Navbar from "../../shared/navbar/navbar";
import AnimalCard from "../../shared/AnimalCard";
import Loading from "../../shared/Loading";

function Page() {
  const animalTypes = ["Cachorro", "Gato"];
  const sexos = ["Macho", "Fêmea"];
  const portes = ["Pequeno", "Médio", "Grande"];
  const idades = ["Filhote", "Adulto", "Sênior"];
  const cores = ["Branco", "Preto", "Marrom", "Cinza", "Amarelo", "Mesclado"];
  const cidades = ["Canoas", "Porto Alegre", "Novo Hamburgo", "São Leopoldo"];

  const [abrigos, setAbrigos] = useState<AbrigoDto[]>([]);
  const abrigoService = useMemo(() => new AbrigoService(), []);
  const [filters, setFilters] = useState({});
  const { animals, totalItems, loading, error } = useAnimals(filters);

  useEffect(() => {
    abrigoService.getAbrigos().then((data) => {
      const formattedAbrigos = data.map((abrigo) => ({
        ...abrigo,
        nome: abrigo.Nome ?? "",
      }));
      setAbrigos(formattedAbrigos);
    });
  }, [abrigoService]);

  const handleFilterChange = (newFilters: any) => {
    setFilters(newFilters);
  };

  return (
    <section>
      <section className="p-4 w-7xl max-w-7xl m-auto">
        <div className="w-full">
          <AnimalsFilter
            animalTypes={animalTypes}
            sexos={sexos}
            portes={portes}
            idades={idades}
            cores={cores}
            cidades={cidades}
            abrigos={abrigos} 
            onFilterChange={handleFilterChange}
          />
        </div>

        {loading && <Loading />}
        {error && <p>{error}</p>}
        <div className="grid w-full  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {animals.map((animal) => (
            <AnimalCard key={animal.id} animal={animal} />
          ))}
        </div>
      </section>
    </section>
  );
}

export default Page;
