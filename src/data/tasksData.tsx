export interface TaskProps {
  id: string | number;
  task: string;
  checked: boolean;
}

export const tasksData: TaskProps[] = [
  {
    id: 1,
    task: 'Landing Page Design',
    checked: false,
  },
  {
    id: 2,
    task: 'Dashboard Builder',
    checked: true,
  },
  {
    id: 3,
    task: 'Mobile App Design',
    checked: true,
  },
  {
    id: 4,
    task: 'Illustrations',
    checked: false,
  },
  {
    id: 5,
    task: 'Promotional LP',
    checked: true,
  },
];
