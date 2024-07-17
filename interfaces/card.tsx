export interface ComponentCardProps {
  index: number;
  hoveredIndex: number | null;
  setHoveredIndex: (index: number | null) => void;
}
