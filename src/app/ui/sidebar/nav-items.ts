export interface NavItem {
  label: string;
  icon: string; // e.g., 'pi pi-home'
  route?: string;
  badge?: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', icon: 'pi pi-home', route: '/' },
  { label: 'SKM', icon: 'pi pi-book', route: '/skm' },
  { label: 'Manrisk', icon: 'pi pi-file', route: '/manrisk' },
  //   { label: 'Assignment', icon: 'pi pi-clipboard', route: '/assignments' },
  //   { label: 'Quiz', icon: 'pi pi-question-circle', route: '/quizzes' },
  //   { label: 'Learning Path', icon: 'pi pi-sitemap', route: '/learning-paths' },
];
