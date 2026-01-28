import './globals.css';
import MainHeader from '@/layout/main-header/header';

export const metadata = {
  title: 'MakananEnak',
  description: 'Makanan Enak, yang dibagikan Oleh Komunitas Pecinta Makanan.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

        <MainHeader />
        {children}
      </body>
    </html>
  );
}
