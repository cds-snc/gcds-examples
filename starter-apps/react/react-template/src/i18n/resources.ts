import { EN, FR, type AppLocale } from '@/routing/constants'

export const localeMeta: Record<AppLocale, { name: string; dir: 'ltr' | 'rtl' }> = {
  [EN]: { name: 'English', dir: 'ltr' },
  [FR]: { name: 'Français', dir: 'ltr' }
}

export const resources = {
  en: {
    translation: {
      home: 'Home',
      homePage: {
        heading: 'Home',
        paragraph: 'Welcome to the React Starter App that leverages GC Design System components!',
        paragraph2:
          'This starter app template is designed to help developers quickly set up a modern React application while adhering to the accessibility and design standards set by the Government of Canada.',
        paragraph3:
          "You'll find all the necessary setup, including React Router for localized routing, i18next for language management, Vitest for unit testing, Playwright for end-to-end testing, and a selection of GCDS components to get you started on your project."
      },
      about: 'About',
      aboutTopic: 'Topic',
      aboutPage: {
        heading: 'About',
        intro:
          'This React starter template integrates GC Design System components and provides a solid foundation for building modern, responsive web applications with consistent design and accessibility.',
        aboutTopic: {
          name: 'Topic',
          heading: 'Topic',
          intro:
            'This is a sample topic page inside a parent About page. It demonstrates breadcrumb behavior across nested routes.'
        }
      },
      french: 'French',
      english: 'English',
      reportABug: 'Report a Bug',
      homeNavLink: 'React App',
      topNavLabel: 'Top navigation',
      reportABugPage: {
        heading: 'Report a Bug',
        intro: 'Create a report to help us improve GC Design System.',
        form: {
          versionNumber: 'GC Design System Components Package and Version',
          versionNumberHint: "e.g. {'@'}gcds-core/components-react{'@'}1.x.x",
          title: 'Title',
          titleHint: 'Choose a title for your bug report',
          titlePlaceholder: 'bug: ',
          currentBehavior: 'Current Behavior',
          currentBehaviorHint: 'Describe the current behavior',
          expectedBehavior: 'Expected Behavior',
          expectedBehaviorHint: 'Describe the expected behavior',
          stepsToReproduce: 'Steps to Reproduce',
          stepsToReproduceHint: 'List the steps to reproduce',
          codeReproductionURL: 'Code Reproduction URL',
          codeReproductionURLHint: 'Provide a URL to the code reproduction',
          systemInfo: 'System Info',
          systemInfoHint: 'Provide information about your system',
          additionalInformation: 'Additional Information',
          additionalInformationHint: 'Provide any additional information',
          submit: 'Submit',
          confirmation: 'Confirmation'
        },
        openGithub: 'Start an issue on GitHub',
        openGithubButton: 'Open issue on Github'
      },
      notFoundPage: {
        heading: 'Page could not be found',
        intro: 'Check you’ve entered the correct web address.'
      }
    }
  },
  fr: {
    translation: {
      home: 'Accueil',
      homePage: {
        heading: 'Accueil',
        paragraph:
          "Bienvenue dans l'application React Starter qui exploite les composants du système de conception GC !",
        paragraph2:
          "Ce modèle d'application de démarrage est conçu pour aider les développeurs à configurer rapidement une application React moderne tout en respectant les normes d'accessibilité et de conception du gouvernement du Canada.",
        paragraph3:
          'Vous y trouverez toute la configuration nécessaire, notamment React Router pour le routage localisé, i18next pour la gestion des langues, Vitest pour les tests unitaires, Playwright pour les tests de bout en bout et une sélection de composants GCDS pour démarrer votre projet.'
      },
      about: 'À propos',
      aboutTopic: 'Sujet',
      aboutPage: {
        heading: 'À propos',
        intro:
          'Ce modèle de démarrage React intègre les composants du Système de design GC et fournit une base solide pour créer des applications Web modernes et réactives avec une conception cohérente et accessible.',
        aboutTopic: {
          name: 'Sujet',
          heading: 'Sujet',
          intro:
            "Ceci est un exemple de page de sujet à l'intérieur d'une page parent À propos. Elle démontre le comportement du fil d’Ariane sur des routes imbriquées."
        }
      },
      french: 'Français',
      english: 'Anglais',
      reportABug: 'Signaler un bug',
      homeNavLink: 'Application React',
      topNavLabel: 'Navigation principale',
      reportABugPage: {
        heading: 'Signaler un bug',
        intro: 'Remplissez un rapport de bogue pour nous aider à améliorer Système de design GC.',
        form: {
          versionNumber: 'Paquet et version des composants de Système de design GC',
          versionNumberHint: "ex. {'@'}gcds-core/components-react{'@'}1.x.x",
          title: 'Titre',
          titleHint: 'Choisissez un titre pour votre rapport de bogue',
          titlePlaceholder: 'bogue: ',
          currentBehavior: 'Comportement observé',
          currentBehaviorHint: 'Décrivez le comportement actuel',
          expectedBehavior: 'Comportement attendu',
          expectedBehaviorHint: 'Décrivez le comportement attendu',
          stepsToReproduce: 'Étapes pour reproduire le bogue',
          stepsToReproduceHint: 'Listez les étapes pour reproduire le bogue',
          codeReproductionURL: 'URL de reproduction du code',
          codeReproductionURLHint: 'Fournir une URL pour la reproduction du code',
          systemInfo: 'Information sur le système',
          systemInfoHint: 'Fournir des informations sur votre système',
          additionalInformation: 'Informations supplémentaires',
          additionalInformationHint: 'Fournir des informations supplémentaires',
          submit: 'Envoyer',
          confirmation: 'Confirmation'
        },
        openGithub: 'Créer un ticket sur Github',
        openGithubButton: 'Ouvrir un ticket sur Github'
      },
      notFoundPage: {
        heading: 'Page introuvable',
        intro: 'Assurez-vous d’avoir saisi la bonne adresse Web.'
      }
    }
  }
} as const
