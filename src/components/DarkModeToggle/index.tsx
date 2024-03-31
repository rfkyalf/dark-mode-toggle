'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { IoIosPartlySunny } from 'react-icons/io';
import { FaCloudMoon } from 'react-icons/fa';

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div>
      <div className="flex items-center font-bold">
        {theme === 'dark' ? (
          <button className="bg-blue-950 hover:bg-blue-900 transition-colors duration-300 text-yellow-300 rounded-2xl flex items-center gap-2 p-3" onClick={() => setTheme('light')}>
            <div>
              <FaCloudMoon />
            </div>
            <p>Dark Mode</p>
          </button>
        ) : (
          <button className="bg-sky-200 hover:bg-sky-300 transition-colors duration-300 text-orange-700 dark:bg-slate-700 rounded-2xl flex items-center gap-2 p-3" onClick={() => setTheme('dark')}>
            <div>
              <IoIosPartlySunny />
            </div>
            <p>Light Mode</p>
          </button>
        )}
      </div>
    </div>
  );
};

export default ThemeSwitch;
