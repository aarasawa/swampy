import React from 'react';
import Link from 'next/link';

const navigation = [
  { name: "Projects", href:"/projects"},
  { name: "Contact", href:"/contact"},
];

export default function Home() {
  return (
    <div className=" flex flex-col justify-center w-screen h-screen overflow-hidden">
      <div className="bg-black">
        <div className="flex"></div>
        <h1 className="text-center mt-5 text-4xl text-transparent duration-1000 bg-white cursor-default animate-title font-display sm:text-6xl md:text-6xl whitespace-nowrap bg-clip-text">
            Alexander Arasawa
        </h1>
        <nav className="my-3 animate-fade-in">
            <ul className="flex items-center justify-center gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-m text-zinc-500 hover:text-white"
                >
                  {item.name}
                </Link>
              ))}
            </ul>
        </nav>
      </div>
    </div>
  )
}
