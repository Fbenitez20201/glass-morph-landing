import Footer from '@/components/Footer'
import { IntegrationTools } from '@/components/integration/IntegrationTools'
import Navbar from '@/components/Navbar'
import { HeaderGeneralPage } from '@/components/ui/HeaderGeneralPage'
import React from 'react'

export const IntegrationPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Navbar />

      <HeaderGeneralPage 
        badgeText="Integraciones" 
        title="Integraciones perfectas para impulsar su flujo de trabajo" 
        subtitle="Conéctese sin problemas con sus herramientas favoritas para un flujo de trabajo más inteligente, eficiente y automatizado."
        classNamesTitle="max-w-[48rem]"
        classNamesSubtitle="max-w-xl md:max-w-[40rem]"
      />

      {/* Main Content */}
      <main className="relative z-20 bg-black flex-grow">
        <IntegrationTools/>
      </main>

      <Footer />
    </div>
  )
}
