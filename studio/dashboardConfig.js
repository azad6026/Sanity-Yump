export default {
  widgets: [
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
                  buildHookId: '5f796aa4fb09accf979b1b06',
                  title: 'Sanity Studio',
                  name: 'sanity-yump-studio',
                  apiId: '9951d3a7-acce-4970-94d2-42ac45997b6e'
                },
                {
                  buildHookId: '5f796aa483304ed3b9f89054',
                  title: 'Blog Website',
                  name: 'sanity-yump',
                  apiId: '61031464-97e6-4b09-b357-0f9bef9d780c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/azad6026/Sanity-Yump',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-yump.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
