import { useEffect, useState } from 'react';
import { notifications } from '@mantine/notifications';

import { Api, Mappers, Types } from '../..';

export const useList = () => {
  const [state, setState] = useState<Types.IQuery.Movie.List>({ isLoading: true, movies: [] });

  useEffect(() => {
    const request = async () => {
      try {
        const { data } = await Api.Movie.List();
        const movies = (data || []).map(Mappers.Movie);

        setState({ movies, isLoading: false });
      } catch (err: any) {
        notifications.show({ message: err?.message, color: 'red' });
        setState({ movies: [], isLoading: false });
      }
    };

    request();
  }, []);
  return state;
};
