import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'Xingxing Gao — Photography', description: 'Landscape, travel, street and portrait photography by Xingxing Gao.', openGraph: { title: 'Xingxing Gao — Photography', description: 'Chasing quiet between moments.' } };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
