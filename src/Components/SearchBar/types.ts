export interface SearchBarProps {
  onSearch: (query: string) => void;
  placeHolder?: string;
  disabled?: boolean;
  onClear?: () => void;
}
