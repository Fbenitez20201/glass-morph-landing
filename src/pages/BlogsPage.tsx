import { CardBlogs } from '@/components/blogs/CardBlogs'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { HeaderGeneralPage } from '@/components/ui/HeaderGeneralPage'
import React from 'react'

export const BlogsPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Navbar />
      <HeaderGeneralPage
        badgeText="Features"
        title="Explore Our Powerful Features"
        subtitle="Discover how our AI-powered solutions can transform your inventory
              management and business operations."
        classNamesTitle=" max-w-[33rem]"
        classNamesSubtitle="max-w-xl md:max-w-lg"
      />

      {/* Main Content */}
      <main className="relative z-20 bg-black flex-grow px-4 md:px-12 mt-16">
        <CardBlogs/>
      </main>

      <Footer />
    </div>
  )
}
