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
                  buildHookId: '5e15af864c2afb767af02254',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-eu7w5u9c',
                  apiId: 'af8e79d5-b0ac-40d8-a8ba-a95c4392bc81'
                },
                {
                  buildHookId: '5e15af87180ce13ffd05debc',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-bmnzmwx2',
                  apiId: 'ce8d5194-6e76-4093-b0c3-f02e2eedb444'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ArturGolon/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-bmnzmwx2.netlify.com', category: 'apps' }
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
