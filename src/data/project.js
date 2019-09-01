import { faWindowMaximize } from '@fortawesome/free-solid-svg-icons'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'

export const projects = [
  'WiKey',
  'TalkUp',
  'CodePraise',
  'IssPay'
]

export const projects_description = {
  WiKey: {
    name: 'WiKey',
    intro: 'WiKey collects data from Wikipedia API and summarize the content in order to allow the user to understand the topic quickly.',
    links: [
      {
        link: 'https://wikeyapp2.herokuapp.com/',
        icon: faWindowMaximize,
        title: 'WebSite'
      },
      {
        link: 'https://github.com/PigAndChicken/WiKey_API',
        icon: faGithubSquare,
        title: 'API Repo'
      },
      {
        link: 'https://github.com/PigAndChicken/WiKey_APP',
        icon: faGithubSquare,
        title: 'APP Repo'
      }
    ],
    images: ['https://imgur.com/2LX6wpg.png', 'https://imgur.com/HXDkAIA.png', 'https://imgur.com/NoR7bTF.png'],
    techs: ['RESTful API', 'External API Connection', 'Background Worker', 'Concurrency', 'WebSocket', 'Service Object', 'Form Object']
  },
  TalkUp:{
    name: 'TalkUp',
    intro: '',
    links:[
      {
        link: 'https://talkup3.herokuapp.com',
        icon: faWindowMaximize,
        title: 'WebSite'
      },
      {
        link: 'https://github.com/PigAndChicken/talkup_api',
        icon: faGithubSquare,
        title: 'API Repo'
      },
      {
        link: 'https://github.com/XuVic/talkup_app',
        icon: faGithubSquare,
        title: 'APP Repo'
      }
    ],
    images: ['https://imgur.com/mCCTCaW.png', 'https://imgur.com/xJLLFF3.png', 'https://imgur.com/BjyEUnO.png'],
    techs: ['Token', 'Session', 'Encrypted Database', 'Policy Object(Authorization)', 'Mailer', 'SSO', 'TDD']
  },
  CodePraise:{
    name: 'CodePraise',
    intro: '',
    links:[
      {
        link: 'https://code-praise.herokuapp.com/',
        icon: faWindowMaximize,
        title: 'WebSite'
      },
      {
        link: 'https://github.com/XuVic/codepraise-api',
        icon: faGithubSquare,
        title: 'API Repo'
      },
      {
        link: 'https://github.com/XuVic/codepraise',
        icon: faGithubSquare,
        title: 'APP Repo'
      }
    ],
    images: ['https://imgur.com/KDCjpWJ.png', 'https://imgur.com/FKWj7UD.png', 'https://imgur.com/o3rb8IS.png', 'https://imgur.com/NX9M5iZ.png', 'https://imgur.com/gIr6WvG.png', 'https://imgur.com/H5i3V9O.png', 'https://imgur.com/5EjfuCm.png'],
    techs: ['AST-Parser', 'External API Connection', 'Background Worker', 'ChatJS', 'WebSocket']
  },
  IssPay:{
    name: 'IssPay',
    intro: '',
    links:[
      {
        link: 'https://github.com/XuVic/isspay_api',
        icon: faGithubSquare,
        title: 'API Repo'
      }
    ],
    images: ['https://imgur.com/Osy6fF1.png', 'https://imgur.com/LNrKLay.png', 'https://imgur.com/ReGo45D.png'],
    techs: ['Devise', 'CanCanCan', 'Token-based Authentication', 'ActionMailer', 'ActiveJob', 'TDD(Rspec, FactoryBot)']
  }
}