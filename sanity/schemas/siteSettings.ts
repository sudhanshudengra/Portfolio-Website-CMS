import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Site Title',
      type: 'string',
    }),
    defineField({
      name: 'heroGreeting',
      title: 'Hero Greeting',
      type: 'string',
      description: 'The small intro text (e.g., "Hi, I\'m Sudhanshu")',
    }),
    defineField({
      name: 'heroHeadline',
      title: 'Hero Headline',
      type: 'text',
      description: 'The large main text (e.g., "Building robust applications...")',
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Hero Subtitle',
      type: 'text',
      description: 'The paragraph below the headline (e.g., "I\'m a Full Stack Engineer...")',
    }),
    defineField({
      name: 'email',
      title: 'Contact Email',
      type: 'string',
    }),
    defineField({
      name: 'githubUrl',
      title: 'GitHub URL',
      type: 'url',
    }),
    defineField({
      name: 'linkedinUrl',
      title: 'LinkedIn URL',
      type: 'url',
    }),
    defineField({
      name: 'twitterUrl',
      title: 'Twitter URL',
      type: 'url',
    }),
    defineField({
      name: 'resume',
      title: 'Resume PDF',
      type: 'file',
      options: {
        accept: '.pdf'
      }
    })
  ]
})
