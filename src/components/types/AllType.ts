export interface ServiceItem {
  id: number;

  title: {
    rendered: string;
  };

  content: {
    rendered: string;
  };

  acf: {
    button_text: string;

    button_link: string;

    icon_image: number;
  };

  _embedded?: {
    ["wp:featuredmedia"]?: Array<{
      source_url: string;
    }>;
  };
}

export interface BlogItem {
  id: number;

  slug: string;

  date: string;

  link: string;

  title: {
    rendered: string;
  };

  content: {
    rendered: string;
  };

  excerpt: {
    rendered: string;
  };

  _embedded?: {
    ["wp:featuredmedia"]?: Array<{
      source_url: string;
    }>;
  };
}