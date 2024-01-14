import './globals.css';
import Header from '../components/Header';
import { HuluProvider } from '@/contexts/HuluContext';
import Providers from '@/providers/ThemeProvider';


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>

        <HuluProvider>
          <Header />
          {children}
        </HuluProvider>

        </Providers>
        
      </body>
    </html>
  );
}
