import { groq } from 'next-sanity'

export const getPortfolioDataQuery = groq`
  {
    "projects": *[_type == "project"] | order(isFeatured desc, _createdAt desc),
    "experience": *[_type == "experience"] | order(startDate desc),
    "skills": *[_type == "skill"] | order(_createdAt asc),
    "philosophy": *[_type == "philosophy"] | order(_createdAt asc),
    "settings": *[_type == "siteSettings"][0] {
      ...,
      "resumeUrl": resume.asset->url
    }
  }
`
