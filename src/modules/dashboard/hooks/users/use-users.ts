import { useEffect, useState } from 'react';
import { notifications } from '@mantine/notifications';

import { Api, Mappers, Types } from 'modules/dashboard';

export const useUsers = () => {
  const [state, setState] = useState<Types.IQuery.Users.List>({ isLoading: true, users: [] });

  useEffect(() => {
    const request = async () => {
      try {
        const { data } = await Api.Users.List();
        const users = (data || []).map(Mappers.Users);

        setState({ users, isLoading: false });
      } catch (err: any) {
        notifications.show({ message: err?.message, color: 'red' });
        setState({ users: [], isLoading: false });
      }
    };

    request();
  }, []);
  return state;
};
