import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import ReportABug from '../views/ReportABug.vue'
import i18n, {defaultLocale} from '../i18n'

const localizedPaths = {
    'home': {
        'en': 'home', 'fr': 'accueil'
    }, 'about': {
        'en': 'about', 'fr': 'a-propos'
    }, 'reportABug': {
        'en': 'report-a-bug', 'fr': 'signaler-un-bug'
    }
}

const routes = [{
    path: '/', redirect: `/${defaultLocale}`,
}, {
    path: '/:locale', children: [{
        path: '', name: 'home', component: HomeView, alias: localizedPaths.home['fr']
    }, {
        path: localizedPaths.about['en'], name: 'about', // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../views/AboutView.vue'), alias: localizedPaths.about['fr']
    }, {
        path: localizedPaths.reportABug['en'],
        name: 'reportABug',
        component: () => import('../views/ReportABug.vue'),
        alias: localizedPaths.reportABug['fr']
    }]
}]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL), routes
})

router.beforeEach(async (to, from) => {
    // const locale = to.params.locale;
    console.log(to, from)
    const newLocale = to.params.locale;
    const prevLocale = from.params.locale;

    console.log('newLocale', newLocale);
    console.log('prevLocale', prevLocale);

    // Do nothing if the locale hasn't changed
    if (newLocale === prevLocale) {
        return;
    }

    await i18n.loadMessagesFor(newLocale);
    i18n.setLocale(newLocale);

    // // Fallback to default locale if no locale provided
    // if (!['en', 'fr'].includes(locale)) {
    //   return next(defaultLocale);
    // }
    // next();
});

export function getLocalizedPath(path, locale) {

    // if /en/report-a-bug, return /fr/signaler-un-bug

    // console.log(`getting localized path for ${path} in ${locale} and got ${localizedPath}`);
    // return `/${locale}${localizedPath}`;
    console.log(`path ${path} locale ${locale}`);
    if (!localizedPaths[path]) {
        console.log(`no localized path for ${path}`);
        return path;
    }
    console.log(`getting localized path for ${path} in ${locale} and got ${localizedPaths[path][locale]}`);
    return `/${locale}/${localizedPaths[path][locale]}`;
}

export default router
