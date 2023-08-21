import http from 'services/http';

import { IApi } from './types';

export const Movie = {
  List: ({ page, pageSize }: IApi.Movie.List.Request) =>
    // const formData = new FormData();

    // formData.set("page", `${page}`);
    // formData.set("page_size", `${pageSize}`);

    http.get<IApi.Movie.List.Response>('/dashboard/movies'),

  Single: ({ slug }: IApi.Movie.Single.Request) => http.get<IApi.Movie.Single.Response>(`/dashboard/movies/${slug}`)
};

export const Comments = {
  List: () => http.get<IApi.Comments.List.response>('/dashboard/comments')
};
export const Reviews = {
  List: () => http.get<IApi.Reviews.List.response>('/dashboard/reviews')
};
export const Users = {
  List: () => http.get<IApi.Users.List.response>('/users/')
};
