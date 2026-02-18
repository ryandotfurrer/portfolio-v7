import {defineArrayMember, defineField, defineType} from 'sanity'
import {VideoIcon} from '@sanity/icons'

export const appearanceType = defineType({
  name: 'appearance',
  title: 'Appearance',
  type: 'document',
  icon: VideoIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'title'},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'updatedAt',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'ogImage',
      type: 'image',
      title: 'OG Image',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'headerImage',
      type: 'image',
      title: 'Header Image',
    }),
    defineField({
      name: 'externalUrl',
      type: 'url',
      title: 'External URL',
      validation: (rule) =>
        rule.required().uri({
          scheme: ['http', 'https'],
        }),
    }),
    defineField({
      name: 'appearanceType',
      type: 'string',
      title: 'Appearance Type',
      options: {
        list: [
          {title: 'Podcast', value: 'podcast'},
          {title: 'Video', value: 'video'},
          {title: 'Talk', value: 'talk'},
          {title: 'Presentation', value: 'presentation'},
        ],
        layout: 'radio',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Description',
      validation: (rule) =>
        rule.max(160).warning('Description should be 160 characters or less').required(),
    }),
    defineField({
      name: 'body',
      type: 'array',
      of: [
        defineArrayMember({type: 'block'}),
        defineArrayMember({type: 'code'}),
        defineArrayMember({
          type: 'image',
          options: {hotspot: true},
          fields: [
            defineField({
              name: 'alt',
              type: 'string',
              title: 'Alt Text',
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'tags',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{type: 'tag'}],
        }),
      ],
    }),
  ],
})
