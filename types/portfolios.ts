export interface Portfolio {
    id: string | number;
    attributes: {
      Name: string;
      slug: string;
      backgroundColor: string;
      link: string;
      icon?: {
        data: {
          attributes: {
            url: string
          }
        }
      }
      thumbnail?: {
        data: {
          attributes: {
            url: string
          }
        }
      }
  }

}

export interface PortfolioFetchResponse {
  data: Portfolio[];
}