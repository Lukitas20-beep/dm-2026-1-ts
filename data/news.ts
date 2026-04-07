export type NewsItem = {
  id: string;
  title: string;
  timestamp: string;
  icon: string;
};

export const NEWS_LIST: NewsItem[] = [
  {
    id: '1',
    title: 'Propaganda #5 ativa',
    timestamp: '12/03/2026 10:30',
    icon: 'campaign',
  },
  {
    id: '2',
    title: 'Correção v2.1 aplicada',
    timestamp: '12/03/2026 09:15',
    icon: 'build',
  },
  {
    id: '3',
    title: 'Novo módulo de relatórios',
    timestamp: '11/03/2026 18:00',
    icon: 'assessment',
  },
  {
    id: '4',
    title: 'Atualização de segurança',
    timestamp: '11/03/2026 14:30',
    icon: 'security',
  },
  {
    id: '5',
    title: 'Propaganda #4 encerrada',
    timestamp: '11/03/2026 11:00',
    icon: 'campaign',
  },
  {
    id: '6',
    title: 'Otimização de performance',
    timestamp: '10/03/2026 17:45',
    icon: 'speed',
  },
  {
    id: '7',
    title: 'Novo painel de controle',
    timestamp: '10/03/2026 09:00',
    icon: 'dashboard',
  },
  {
    id: '8',
    title: 'Correção de exibição no iOS',
    timestamp: '09/03/2026 15:20',
    icon: 'phone-iphone',
  },
];
