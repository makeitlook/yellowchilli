import { redirect } from 'next/navigation';

export function redirectIfProduction() {
  if (process.env.NEXT_PUBLIC_SITE_MODE === 'production') {
    redirect('/');
  }
}
