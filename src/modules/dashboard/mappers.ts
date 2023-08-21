import { get } from 'lodash';

import { IEntity } from './types';

export const Genre = (item: any): IEntity.Genre => ({
  title: get(item, 'title') || ''
});

export const Movie = (item: any): IEntity.Movie => ({
  id: get(item, 'id') || 0,
  createdAt: get(item, 'createdAt') || '',
  updatedAt: get(item, 'updatedAt') || '',
  description: get(item, 'description') || '',
  filmTimeDuration: get(item, 'filmTimeDuration') || 0,
  ageLimit: get(item, 'ageLimit') || 0,
  slug: get(item, 'slug') || '',
  title: get(item, 'title') || '',
  releaseYear: get(item, 'releaseYear') || '',
  videoUrl: get(item, 'videoUrl') || '',
  type: get(item, 'type') || '',
  photo: get(item, 'photo') || '',
  isPremium: get(item, 'isPremium') || false,
  views: get(item, 'views') || '',
  user: get(item, 'user') || '',
  isActive: get(item, 'isActive') || false,
  banner: get(item, 'banner') || '',
  country: get(item, 'county') || '',
  genre: (get(item, 'genre') || []).map(Genre)
});

export const Comment = (item: any): IEntity.Comment => ({
  id: get(item, 'id') || 0,
  movie: get(item, 'movie') || 0,
  author: get(item, 'author') || 0,
  text: get(item, 'text') || '',
  createdAt: get(item, 'createdAt') || ''
});

export const Review = (item: any): IEntity.Review => ({
  id: get(item, 'author') || 0,
  movie: get(item, 'author') || 0,
  author: get(item, 'author') || 0,
  text: get(item, 'text') || '',
  rating: get(item, 'rating') || 0,
  createdAt: get(item, 'createdAt') || ''
});

export const Reviews = (item: any): IEntity.Reviews => ({
  count: get(item, 'count') || 0,
  next: get(item, 'next') || null,
  previous: get(item, 'previous') || null,
  results: (get(item, 'results') || []).map(Review)
});

export const Users = (item: any): IEntity.User => ({
  id: get(item, 'id') || 0,
  image: get(item, 'image') || null,
  firstName: get(item, 'first_name') || '',
  lastName: get(item, 'last_name') || '',
  email: get(item, 'email') || '',
  username: get(item, 'username') || '',
  subscription: get(item, 'subscription') || false,
  status: get(item, 'status') || '',
  createdAt: get(item, 'createdAt') || '',
  isModerator: get(item, 'isModerator') || false,
  isStaff: get(item, 'isStaff') || false,
  comment: get(item, 'comment') || [],
  review: get(item, 'review') || []
});
