import { useEffect, useState } from 'react';
import { notifications } from '@mantine/notifications';

import { Api, Mappers, Types } from 'modules/dashboard';

export const useList = () => {
  const [state, setState] = useState<Types.IQuery.Movie.List>({
    isLoading: true,
    movie: [],
    movies: {
      count: 0,
      next: '',
      previous: '',
      results: []
    }
  });

  useEffect(() => {
    const request = async () => {
      try {
        const { data } = await Api.Movie.List({ page: 1, pageSize: 10 });
        const movie = (data.results || []).map(Mappers.Movie);
        const movies = data;

        setState({ movie, movies, isLoading: false });
      } catch (err: any) {
        notifications.show({ message: err?.message, color: 'red' });
        setState({
          movies: {
            count: 0,
            next: '',
            previous: '',
            results: []
          },
          movie: [],
          isLoading: false
        });
      }
    };

    request();
  }, []);
  return state;
};
