import { client } from '../sanity/lib/client'
import { getPortfolioDataQuery } from '../sanity/lib/queries'
import { Navigation } from '../components/Navigation'
import { Hero } from '../components/Hero'
import { Philosophy } from '../components/Philosophy'
import { Projects } from '../components/Projects'
import { Skills } from '../components/Skills'
import { Experience } from '../components/Experience'
import { Contact } from '../components/Contact'
import { Footer } from '../components/Footer'

export const revalidate = 60

export default async function Home() {
  const data = await client.fetch(getPortfolioDataQuery)

  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-foreground selection:text-background font-sans">
      <Navigation data={data?.settings} />
      
      <Hero data={data?.settings} />
      <Philosophy data={data?.philosophy} />
      <Projects data={data?.projects} />
      <Skills data={data?.skills} />
      <Experience data={data?.experience} />

      <Contact data={data?.settings} />

      <Footer />
    </main>
  )
}
