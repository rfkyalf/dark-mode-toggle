'use client';

import BgAudio from '@/components/BgAudio';
import BgVideoDark from '@/components/BgVideo/bgDark';
import BgVideolight from '@/components/BgVideo/bgLight';
import ThemeSwitch from '@/components/DarkModeToggle';
import { useTheme } from 'next-themes';

export default function Home() {
  const { theme } = useTheme();
  return (
    <>
      <main className="relative">
        {/* Video di paling dasar */}
        <div className="absolute top-0 left-0 w-full h-full z-0">{theme === 'dark' ? <BgVideoDark /> : <BgVideolight />}</div>

        {/* Konten di atas video */}
        <div className="absolute top-0 left-0 w-full h-full z-10">
          <div className="absolute top-9">
            <BgAudio />
          </div>
          <div className="flex items-center justify-center h-screen">
            <div className="relative">
              <ThemeSwitch />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
