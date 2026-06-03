import { Outlet, useLocation } from 'react-router';
import { Header } from './Header';
import { Footer } from './Footer';

export function Layout() {
  const location = useLocation();
  
  // Hide footer on full-screen immersive pages
  const hideFooter = location.pathname === '/portfolio';

  return (
    <div className="min-h-screen bg-[#0B0B0D]">
      <Header />
      <Outlet />
      {!hideFooter && <Footer />}
    </div>
  );
}