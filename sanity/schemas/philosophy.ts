import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'philosophy',
  title: 'Philosophy (How I Think)',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'metricValue',
      title: 'Metric Value (e.g., 99%)',
      type: 'string',
    }),
    defineField({
      name: 'metricLabel',
      title: 'Metric Label (e.g., Uptime)',
      type: 'string',
    }),
  ],
})
