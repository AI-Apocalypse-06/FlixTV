import { useEffect, useState } from 'react';
import { notifications } from '@mantine/notifications';

import { Api, Mappers, Types } from 'modules/dashboard';

export const useReviews = () => {
  const [state, setState] = useState<Types.IQuery.Reviews.List>({
    isLoading: true,
    review: [],
    reviews: {
      count: 0,
      next: 0,
      previous: 0,
      results: []
    }
  });

  useEffect(() => {
    const request = async () => {
      try {
        const { data } = await Api.Reviews.List();
        const review = (data.results || []).map(Mappers.Review);
        const reviews = data;

        setState({ review, reviews, isLoading: false });
      } catch (err: any) {
        notifications.show({ message: err?.message, color: 'red' });
        setState({ review: [], reviews: { count: 0, next: 0, previous: 0, results: [] }, isLoading: false });
      }
    };

    request();
  }, []);
  return state;
};
