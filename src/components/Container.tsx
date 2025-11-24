import React from 'react'

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-[1200px]">
      {children}
    </div>
  )
}
