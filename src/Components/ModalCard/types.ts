export type ModalCardProps = {
  id: string;
  img: string;
  name: string;
  description: string;
  hight: number;
  weight: number;
  category: string;
  abilities: string;
  onStartFightButton: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onClose: (val: boolean) => void;
};
