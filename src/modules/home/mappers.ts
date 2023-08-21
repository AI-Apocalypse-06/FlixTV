import get from 'lodash/get';

import { IEntity } from './types';

export const Genre = (item: any): IEntity.Genre => ({
  title: get(item, 'title') || ''
});

export const Movie = (item: any): IEntity.Movie => ({
  slug: get(item, 'slug') || '',
  title: get(item, 'title') || '',
  releaseYear: get(item, 'releaseYear') || '',
  photo: get(item, 'photo') || '',
  banner: get(item, 'banner') || '',
  isPremium: get(item, 'address.state.city.isPrimary') || '',
  genre: (get(item, 'genre') || []).map(Genre),
  averageRating: get(item, 'averageRating') || ''
});
