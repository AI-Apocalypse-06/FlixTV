import http from 'services/http';

import { IApi } from './types';

export const Movie = {
  List: () => http.get<IApi.Movie.List.Response>('/movie/'),
  Single: ({ slug }: IApi.Movie.Single.Request) => http.get<IApi.Movie.Single.Response>(`/movie/detail/${slug}`)
};
