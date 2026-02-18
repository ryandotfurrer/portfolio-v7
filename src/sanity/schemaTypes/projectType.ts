import {defineArrayMember, defineField, defineType} from 'sanity'
import {FolderIcon} from '@sanity/icons'

export const projectType = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  icon: FolderIcon,
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
      title: 'Slug',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      title: 'Published At',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'updatedAt',
      type: 'datetime',
      title: 'Updated At',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'techStack',
      type: 'array',
      title: 'Tech Stack',
      of: [defineArrayMember({type: 'string'})],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'projectUrl',
      type: 'url',
      title: 'Live Site URL',
    }),
    defineField({
      name: 'githubUrl',
      type: 'url',
      title: 'GitHub Repo URL',
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
      name: 'description',
      type: 'text',
      title: 'Description',
      validation: (rule) =>
        rule.max(160).warning('Description should be 160 characters or less').required(),
    }),
    defineField({
      name: 'body',
      type: 'array',
      title: 'Body',
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
      title: 'Tags',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{type: 'tag'}],
        }),
      ],
    }),
  ],
})
