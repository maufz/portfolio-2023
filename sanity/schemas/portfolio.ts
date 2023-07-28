export default {
  name: 'portfolio',
  type: 'document',
	title: 'Portfolio',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'name'
      }
    },
    {
      name: 'icon',
      type: 'image',
      title: 'Icon'
    },
    {
      name: 'link',
      type: 'url',
      title: 'Link'
    },
    {
      name: 'thumbnail',
      type: 'image',
      title: 'Thumbnail'
    },
    {
      name: 'backgroundColor',
      type: 'color',
      title: 'Background Color'
    }
  ]
}