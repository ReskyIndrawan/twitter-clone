import '@/styles/globals.css'

import Sidebar from '@/components/Layout/Sidebar';
import FollowBar from '@/components/Layout/FollowBar';
import LoginModal from '@/components/modals/LoginModal';
import RegisterModal from '@/components/modals/RegisterModal';


interface RootLayoutProps {
  children: React.ReactNode;
}

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

const RootLayout: React.FC<RootLayoutProps> = ({children}) => {
  return ( 
    <html lang='en'>
      <body className='h-full bg-black'>
        <RegisterModal />
        <div className='h-screen bg-black'>
          <div className='container h-full mx-auto xl:px-30 max-w-6xl'>
            <div className='grid grid-cols-4 h-full'>
              <Sidebar />
              <div className='
                col-span-3
                lg:col-span-2
                border-x-[1px]
                border-neutral-800
              '>
                {children}
              </div>
              <FollowBar />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
 
export default RootLayout;
