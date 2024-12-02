import { useState, useEffect } from "react";
import { AnimalDto, AnimalService } from "../services/animal.service";

export default function useAnimals(filters = {}, page = 1, pageSize = 21) {
  const [animals, setAnimals] = useState<AnimalDto[]>([]);
  const [totalItems, setTotalItems] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    console.log('pegguei os filtros', filters)
    setLoading(true);
    AnimalService.getAnimals(page, pageSize, filters)
      .then((response) => {
        setAnimals(response.animals);
        setTotalItems(response.pagination.total);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to fetch animals");
        setLoading(false);
      });
  }, [filters, page, pageSize]); // Adicione 'filters' como dependência

  return { animals, totalItems, loading, error };
}
