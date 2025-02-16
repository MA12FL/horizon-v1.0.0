interface RowsProps {
  id: number | string;
  name: string;
  status: string;
  date: string;
  progress: number;
  quantity: number;
  balance: string;
}

export const rows: RowsProps[] = [
  {
    id: '#1001',
    name: 'Horizon UI PRO',
    status: 'Approved',
    date: '18 Apr 2024',
    progress: 70,
    quantity: 220,
    balance: '1200$',
  },
  {
    id: '#1002',
    name: 'Horizon UI Free',
    status: 'Disable',
    date: '26 Apr 2024',
    progress: 40,
    quantity: 390,
    balance: '750$',
  },
  {
    id: '#1003',
    name: 'Marketplace',
    status: 'Error',
    date: '20 May 2024',
    progress: 90,
    quantity: 170,
    balance: '1490$',
  },
  {
    id: '#1004',
    name: 'Weekly Updates',
    status: 'Approved',
    date: '25 May 2024',
    progress: 60,
    quantity: 270,
    balance: '810$',
  },
  {
    id: '#1005',
    name: 'Venus 3D Asset',
    status: 'Approved',
    date: '28 May 2024',
    progress: 80,
    quantity: 320,
    balance: '1500$',
  },
  {
    id: '#1006',
    name: 'Admin Dashboard',
    status: 'Approved',
    date: '17 Jun 2024',
    progress: 95,
    quantity: 180,
    balance: '1800$',
  },
  {
    id: '#1007',
    name: 'Material-UI Kit',
    status: 'Error',
    date: '22 Jun 2024',
    progress: 50,
    quantity: 210,
    balance: '950$',
  },
  {
    id: '#1008',
    name: 'Figma Components',
    status: 'Disable',
    date: '08 Jul 2024',
    progress: 65,
    quantity: 320,
    balance: '1280$',
  },
  {
    id: '#1009',
    name: 'React Starter Kit',
    status: 'Approved',
    date: '28 Jul 2024',
    progress: 85,
    quantity: 250,
    balance: '1450$',
  },
  {
    id: '#1010',
    name: 'SaaS Management',
    status: 'Disable',
    date: '05 Aug 2024',
    progress: 55,
    quantity: 225,
    balance: '990$',
  },
  {
    id: '#1011',
    name: 'Admin Template PRO',
    status: 'Approved',
    date: '22 Aug 2024',
    progress: 75,
    quantity: 340,
    balance: '1600$',
  },
  {
    id: '#1012',
    name: 'Ecommerce Dashboard',
    status: 'Approved',
    date: '25 Aug 2024',
    progress: 85,
    quantity: 260,
    balance: '1350$',
  },
];
