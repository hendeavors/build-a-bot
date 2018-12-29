import Vue from 'vue';
import Router from 'vue-router';

import HomePage from '../home/HomePage.vue';
import RobotBuilder from '../build/RobotBuilder.vue';
import PartInfo from '../parts/PartInfo.vue';
import BrowseParts from '../parts/BrowseParts.vue';
import RobotHeads from '../parts/RobotHeads.vue';
import RobotArms from '../parts/RobotArms.vue';
import RobotTorsos from '../parts/RobotTorsos.vue';
import RobotBases from '../parts/RobotBases.vue';
import SidebarStandard from '../sidebars/SidebarStandard.vue';
import SidebarBuild from '../sidebars/SidebarBuild.vue';
import ShoppingCart from '../cart/ShoppingCart.vue';

Vue.use(Router);

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    components: {
      default: HomePage,
      sidebar: SidebarStandard,
    },
  }, {
    path: '/build',
    name: 'Build',
    components: {
      default: RobotBuilder,
      sidebar: SidebarBuild,
    },
  }, {
    path: '/parts/browse',
    name: 'BrowseParts',
    component: BrowseParts,
    children: [{
      name: 'RobotHeads',
      path: 'heads',
      component: RobotHeads,
    }, {
      name: 'RobotArms',
      path: 'arms',
      component: RobotArms,
    }, {
      name: 'RobotTorsos',
      path: 'torsos',
      component: RobotTorsos,
    }, {
      name: 'RobotBases',
      path: 'bases',
      component: RobotBases,
    }],
  }, {
    path: '/parts/:partType/:id',
    name: 'Parts',
    component: PartInfo,
    props: true,
    beforeEnter(to, from, next) {
      const isValidId = Number.isInteger(Number(to.params.id));
      next(isValidId);
    },
  }, {
    path: '/cart',
    name: 'Cart',
    component: ShoppingCart,
  }],
});
