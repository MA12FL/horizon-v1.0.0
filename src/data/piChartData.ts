export interface PiChartDataProps {
  id: number | string;
  value: number;
  name: string;
  visible: boolean;
}

export const PiChartData: PiChartDataProps[] = [
  { id: 1, value: 65, name: 'Your Files', visible: true },
  { id: 2, value: 35, name: 'System', visible: true },
];
