export namespace IEntity {
  export interface Movie {
    slug: string;
    title: string;
    releaseYear: number;
    photo: string;
    banner: string;
    isPremium: boolean;
    genre: Genre[];
    averageRating: number;
  }

  export interface Genre {
    title: string;
  }
}

export namespace IForm {}

export namespace IApi {
  export namespace Movie {
    export namespace List {
      export type Response = IEntity.Movie[];
    }
    export namespace Single {
      export interface Request {
        slug: string;
      }
      export interface Response extends IEntity.Movie {}
    }
  }
}

export namespace IQuery {
  export namespace Movie {
    export interface List {
      isLoading: boolean;
      movies: IEntity.Movie[];
    }
  }
  export namespace Genre {}
}
