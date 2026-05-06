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