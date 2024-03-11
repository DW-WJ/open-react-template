// 'use client'
export const metadata = {
    title: 'Price - Open PRO',
    description: '价格',
  }
  
  import React from 'react';
  
  import CardPrice from '@/components/CardPrice'
  
  
  
  export default function Price() {
    return (
      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
              <CardPrice />
            </div>
  
  
          </div>
        </div>
      </section>
    )
  }