import { useEffect, useState } from "react";
import shuffle from "lodash/shuffle";

const useLevel = (level) => {
  const [loading, setLoading] = useState(false);
  const [cards, setCards] = useState([]);
  const shuffleCards = () => {
    setCards((prev) => shuffle(prev));
  };

  useEffect(() => {
    setLoading(true);
    fetch(`https://breakingbadapi.com/api/character/random?limit=${level * 4}`)
      .then((resp) => resp.json())
      .then((data) => setCards(data))
      .catch((e) => console.error(e))
      .finally(() =>
        setTimeout(() => {
          setLoading(false);
        }, 1000)
      );
  }, [level]);

  return [cards, loading, shuffleCards];
};

export default useLevel;
