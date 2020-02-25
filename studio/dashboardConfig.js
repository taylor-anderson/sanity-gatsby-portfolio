export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5e559f1fb508b001b86c9b6b',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-3arzb9g1',
                  apiId: '0b0f9c1a-8957-4066-8ff5-ffe5f188668e'
                },
                {
                  buildHookId: '5e559f1f329927017d1fe2c9',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-gncg6gqt',
                  apiId: '7792e8ee-f5b5-4e14-9240-2a7b170c3a6a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/taylor-anderson/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-gncg6gqt.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
