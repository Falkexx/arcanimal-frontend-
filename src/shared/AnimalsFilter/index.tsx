import React, { useState } from "react";
import { AnimalsFilterProps, Filters } from "../../data/@types/AnimalsFilter";


const AnimalsFilter: React.FC<AnimalsFilterProps> = ({
  animalTypes,
  sexos,
  portes,
  idades,
  abrigos,
  onFilterChange,
}) => {
  const [filters, setFilters] = useState<Filters>({
    animalType: "",
    sexo: "",
    porte: "",
    idade: "",
    castrado: "",
    abrigo: "",
    cidade: "",
    cor: "",
  });

  const handleChange = (key: keyof Filters, value: string) => {
    const updatedFilters = { ...filters, [key]: value };
    setFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };

  return (
    <div className=" mb-4 w-full ">
      <div className="grid grid-cols-2 min-w-full  gap-3 lg:grid-cols-6 ">
        {/* Tipo de Animal */}
        <div>
          <label htmlFor="animalType" className="form-label text-base lg:text-lg">
            Tipo de Animal
          </label>
          <select
            id="animalType"
            className="form-select w-full p-2 border rounded"
            value={filters.animalType}
            onChange={(e) => handleChange("animalType", e.target.value)}
          >
            <option value="">Todos</option>
            {animalTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        {/* Sexo */}
        <div>
          <label htmlFor="sexo" className="form-label text-base lg:text-lg">
            Sexo
          </label>
          <select
            id="sexo"
            className="form-select w-full p-2 border rounded"
            value={filters.sexo}
            onChange={(e) => handleChange("sexo", e.target.value)}
          >
            <option value="">Todos</option>
            {sexos.map((sexo) => (
              <option key={sexo} value={sexo}>
                {sexo}
              </option>
            ))}
          </select>
        </div>

        {/* Porte */}
        <div>
          <label htmlFor="porte" className="form-label text-base lg:text-lg">
            Porte
          </label>
          <select
            id="porte"
            className="form-select w-full p-2 border rounded"
            value={filters.porte}
            onChange={(e) => handleChange("porte", e.target.value)}
          >
            <option value="">Todos</option>
            {portes.map((porte) => (
              <option key={porte} value={porte}>
                {porte}
              </option>
            ))}
          </select>
        </div>

        {/* Idade */}
        <div>
          <label htmlFor="idade" className="form-label text-base lg:text-lg">
            Idade
          </label>
          <select
            id="idade"
            className="form-select w-full p-2 border rounded"
            value={filters.idade}
            onChange={(e) => handleChange("idade", e.target.value)}
          >
            <option value="">Todos</option>
            {idades.map((idade) => (
              <option key={idade} value={idade}>
                {idade}
              </option>
            ))}
          </select>
        </div>

        {/* Castrado */}
        <div>
          <label htmlFor="castrado" className="form-label text-base lg:text-lg">
            Castrado
          </label>
          <select
            id="castrado"
            className="form-select w-full p-2 border rounded"
            value={filters.castrado}
            onChange={(e) => handleChange("castrado", e.target.value)}
          >
            <option value="">Todos</option>
            <option value="Sim">Sim</option>
          </select>
        </div>

        {/* Abrigo */}
        <div>
          <label htmlFor="abrigo" className="form-label text-base lg:text-lg">
            Abrigo
          </label>
          <select
            id="abrigo"
            className="form-select w-full p-2 border rounded"
            value={filters.abrigo}
            onChange={(e) => handleChange("abrigo", e.target.value)}
          >
            <option value="">Todos</option>
            {abrigos
              .filter((abrigo) => abrigo.id !== 231)
              .map((abrigo) => (
                <option key={abrigo.id} value={abrigo.id}>
                  {abrigo.Nome}
                </option>
              ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default AnimalsFilter;
