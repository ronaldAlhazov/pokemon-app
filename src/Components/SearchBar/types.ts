export interface SearchBarProps {
  placeHolder?: string;
  disabled?: boolean;
  onSearch?: (query: string) => void;
  onClear?: () => void;
}
