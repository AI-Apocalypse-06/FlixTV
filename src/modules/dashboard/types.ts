export namespace IEntity {
  export interface User {
    id: number;
    image: null;
    firstName: string;
    lastName: string;
    email: string;
    username: string;
    subscription: boolean;
    status: string;
    createdAt: string;
    isModerator: boolean;
    isStaff: boolean;
    comment: Comment[];
    review: Review[];
  }
  export interface Movie {
    id: number;
    createdAt: string;
    updatedAt: string;
    slug: string;
    title: string;
    description: string;
    releaseYear: number;
    filmTimeDuration: number;
    ageLimit: number;
    country: string;
    banner: string;
    photo: string;
    type: string;
    videoUrl: string;
    isPremium: boolean;
    views: number;
    isActive: boolean;
    user: number;
    genre: number[];
  }
  export interface Genre {
    title: string;
  }
  export interface Movies {
    count: number;
    next: string;
    previous: string;
    results: Movie[];
  }
  export interface Comment {
    id: number;
    movie: number;
    author: number;
    text: string;
    createdAt: string;
  }
  export interface Review {
    id: number;
    movie: number;
    author: number;
    text: string;
    rating: number;
    createdAt: string;
  }
  export interface Reviews {
    count: number;
    next: any;
    previous: any;
    results: Review[];
  }
}

export namespace IForm {
  export interface AddMovie {}
  export interface EditUser {}
}

export namespace IApi {
  export namespace Movie {
    export namespace List {
      export interface Request {
        page?: number;
        pageSize?: number;
      }
      export type Response = IEntity.Movies;
    }
    export namespace Single {
      export interface Request {
        slug: string;
      }
      export type Response = IEntity.Movie;
    }
  }
  export namespace Comments {
    export namespace List {
      export type response = IEntity.Comment[];
    }
  }
  export namespace Reviews {
    export namespace List {
      export type response = IEntity.Reviews;
    }
  }
  export namespace Users {
    export namespace List {
      export type response = IEntity.User[];
    }
  }
}

export namespace IQuery {
  export namespace Movie {
    export interface List {
      isLoading: boolean;
      movies: IEntity.Movies;
      movie: IEntity.Movie[];
    }
  }

  export namespace Genre {}

  export namespace Comments {
    export interface List {
      isLoading: boolean;
      comments: IEntity.Comment[];
    }
    export interface Comment {
      isLoading: boolean;
      comment: IEntity.Comment;
    }
  }

  export namespace Reviews {
    export interface List {
      isLoading: boolean;
      reviews: IEntity.Reviews;
      review: IEntity.Review[];
    }
  }

  export namespace Users {
    export interface List {
      users: IEntity.User[];
      isLoading: boolean;
    }
  }
}
