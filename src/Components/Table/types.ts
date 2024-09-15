export type TableCols = {
  name: string;
  ID: string;
  description: string;
  Power: string;
  hp: string;
  avatar: string;
};

export type TableProps = {
  options: TableCols[];
};
