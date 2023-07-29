const portfolioSchema = {
  name: "portfolio",
  type: "document",
  title: "Portfolio",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "name",
      },
    },
    {
      name: "icon",
      type: "image",
      title: "Icon",
    },
    {
      name: "link",
      type: "url",
      title: "Link",
    },
    {
      name: "thumbnail",
      type: "image",
      title: "Thumbnail",
    },
    {
      name: "backgroundColor",
      type: "color",
      title: "Background Color",
    },
  ],
};

interface SanityImage {
  asset: {
    _ref: string;
  };
}

interface SanityColor {
  hex: string;
  r: number;
  g: number;
  b: number;
}

export interface PortfolioData {
  name: string;
  slug: string;
  _id: string;
  link: string;
  thumbnail: SanityImage;
  backgroundColor: SanityColor;
  icon: SanityImage;
}

export default portfolioSchema;
