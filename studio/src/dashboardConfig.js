export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ff460101283b9e5a7792eb0',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-yss6nfgp',
                  apiId: 'ffcfe201-6831-4d02-ba9c-3c639705bb1e'
                },
                {
                  buildHookId: '5ff46010465fb008f74b867a',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-fh3dbzp3',
                  apiId: '118aa7bb-9cc7-4503-8237-913cdd2ec208'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/AienTech/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-fh3dbzp3.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
