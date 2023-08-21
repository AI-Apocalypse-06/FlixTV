import { useEffect, useState } from 'react';
import { notifications } from '@mantine/notifications';

import { Api, Mappers, Types } from 'modules/dashboard';

export const useComments = () => {
  const [state, setState] = useState<Types.IQuery.Comments.List>({ isLoading: true, comments: [] });

  useEffect(() => {
    const request = async () => {
      try {
        const { data } = await Api.Comments.List();
        const comments = (data || []).map(Mappers.Comment);

        setState({ comments, isLoading: false });
      } catch (err: any) {
        notifications.show({ message: err?.message, color: 'red' });
        setState({ comments: [], isLoading: false });
      }
    };

    request();
  }, []);
  return state;
};
