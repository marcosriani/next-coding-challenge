export type CardProps = {
  content: {
    title: string;
    description: string;
    id: string;
  };
  addToCart: (product: string) => void;
};
