import './globals.css';
import Header from '../components/Header';
import { HuluProvider } from '@/contexts/HuluContext';


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        
        <HuluProvider>
          <Header />
          {children}
        </HuluProvider>
      </body>
    </html>
  );
}
