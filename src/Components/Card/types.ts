export type CardProps = {
  id: string;
  img: string;
  name: string;
  power?: number;
  hp?: number;
  onCardClick: (card: string) => void;
};
