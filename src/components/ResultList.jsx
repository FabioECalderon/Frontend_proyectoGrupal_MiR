import { useEffect, useState } from 'react';

import ResultCard from '../components/ResultCard';
import { getResults } from '../api/results';

export default function ResultList() {
  const [data, setData] = useState();

  useEffect(() => {
    const response = getResults;
    setData(response);
  }, []);

  return (
    <>
      {data.map(function (item, index) {
        return (
          <ResultCard
            key={index}
            name={item.name}
            specialty={item.specialty}
            location={item.location}
            photo={item.photo}
          />
        );
      })}
    </>
  );
}
