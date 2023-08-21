import get from 'lodash/get';

import { IEntity, IForm } from './types';

export const Comment = (item: any): IEntity.Comment => ({
  id: get(item, 'id'),
  movie: get(item, 'movie'),
  author: get(item, 'author'),
  text: get(item, 'text'),
  createdAt: get(item, 'created_at')
});

export const Review = (item: any): IEntity.Review => ({
  ...Comment(item),
  rating: get(item, 'rating')
});

export const User = (item: any): IEntity.User => ({
  id: get(item, 'id'),
  image: get(item, 'image') || null,
  firstName: get(item, 'first_name') || '',
  lastName: get(item, 'last_name') || '',
  email: get(item, 'email') || '',
  username: get(item, 'username') || '',
  subscription: get(item, 'subscription') || false,
  status: get(item, 'status'),
  createdAt: get(item, 'created_at') || '',
  comment: (get(item, 'comment') || []).map(Comment),
  review: (get(item, 'review') || []).map(Review),
  isModerator: get(item, 'is_moderator') || false,
  isAdmin: get(item, 'is_staff') || false
});
export const Activate = (item: any): IForm.verification => ({
  activationCode: get(item, 'activation_code') || 0,
  email: get(item, 'email') || ''
});
export namespace IContext {
  export interface Auth {
    isAuthenticated: boolean;
    user: IEntity.User | null;
    methods: {
      login: (user: IEntity.User) => void;
      logout: () => void;
    };
  }
}
