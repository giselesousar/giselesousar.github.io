import { useEffect, useState } from 'react'
import { AppBar } from '@material-ui/core';
import DesktopView from './desktop';
import MobileView from './mobile';


const MainNavbar = () => {
  const [mobile, setMobile] = useState<Boolean>();

  const handleResize = () => setMobile(window.innerWidth < 900 );
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [])

  return (
    <AppBar
      elevation={0}
      position="relative" // static ?
    >
      { mobile ? <MobileView /> : <DesktopView /> }
    </AppBar>
  );
}

export default MainNavbar;