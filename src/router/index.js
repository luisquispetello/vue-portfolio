import { createRouter, createWebHistory } from "vue-router";
import Home from '../pages/Home.vue'

const SartorialClass = () => import('../pages/SartorialClass.vue')
const Confejas = () => import('../pages/Confejas.vue')
const NotFound = () => import('../pages/NotFound.vue')

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        title: 'Luis Quispe Tello | Portfolio',
        description: 'This is the portfolio website of Luis Quispe a Frontend Designer, UX Designer and Tailor'
      }
    },
    {
      path: '/sartorial-class',
      name: 'Sartorial Class',
      component: SartorialClass,
      meta: {
        title: 'Sartorial Class | Portfolio'
      }
    },
    {
      path: '/confejas',
      name: 'Confejas',
      component: Confejas,
      meta: {
        title: 'Confejas | Portfolio'
      }
    },
    {
      path: '/projects',
      redirect: '/'
    },
    {
      path: '/:pathMatch(.*)*',
      component: NotFound
    },

  ],
  scrollBehavior() {
    document.getElementById('app').scrollIntoView()
  }
})

export default router

/**
 * Below code will display the component/active page title
**/

router.beforeEach((to, from, next) => {
	const nearestWithTitle = to.matched
		.slice()
		.reverse()
		.find((r) => r.meta && r.meta.title);

	const nearestWithMeta = to.matched
		.slice()
		.reverse()
		.find((r) => r.meta && r.meta.metaTags);

	const previousNearestWithMeta = from.matched
		.slice()
		.reverse()
		.find((r) => r.meta && r.meta.metaTags);

	if (nearestWithTitle) {
		document.title = nearestWithTitle.meta.title;
	} else if (previousNearestWithMeta) {
		document.title = previousNearestWithMeta.meta.title;
	}

	Array.from(
		document.querySelectorAll('[data-vue-router-controlled]')
	).map((el) => el.parentNode.removeChild(el));

	if (!nearestWithMeta) return next();

	nearestWithMeta.meta.metaTags
		.map((tagDef) => {
			const tag = document.createElement('meta');

			Object.keys(tagDef).forEach((key) => {
				tag.setAttribute(key, tagDef[key]);
			});

			tag.setAttribute('data-vue-router-controlled', '');

			return tag;
		})
		.forEach((tag) => document.head.appendChild(tag));

	next();
});

