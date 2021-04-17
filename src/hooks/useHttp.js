// I've used in other projects but found the core of the logic in a youtube about creating custom hooks
import { useEffect, useState } from 'react';


export const useHttp= (url, dependencies ) => {
  const [isLoading, setIsLoading] = useState(false);
  const [fetchData, setFetchedData] = useState(false);
  const [ resultCount, setResultCount ] = useState(0)

  useEffect(() => {
    if (!url || url === '') return ;
    setIsLoading(true);
    setFetchedData([])
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch.');
        }
        return response.json()
      })
      .then(data => {
        console.log(data)
        setResultCount(data.total_count)
        return data
      })
      .then(async data => {
        await Promise.all(data.items.map(user => {
          return fetch(`https://api.github.com/users/${user.login}`)
            .then(response => {
              if (!response.ok) {
                if (response.status === 403) {
                  throw new Error('Probably rate limited :o')
                }
                throw new Error('Failed to fetch user');
              }
              return response.json()
            })
            .then(data => {
              console.log(data)
              setFetchedData(prevState => [...prevState, data])
            })
        }));
        setIsLoading(false);
      })
      .catch(error => {
        console.log(error);
        setIsLoading(false);
      });
  }, dependencies)

  return [isLoading, fetchData, resultCount];
};