import { createRouter, createWebHashHistory } from "vue-router";
import { authGuard } from "@bcwdev/auth0provider-client";

function loadPage(page) {
  return () => import(`./pages/${page}.vue`);
}

const routes = [
  {
    path: "/",
    name: "Home",
    component: loadPage("HomePage"),
  },
  {
    path: "/search",
    name: "Search",
    component: loadPage("SearchPage"),
  },
  {
    path: "/about",
    name: "About",
    component: loadPage("AboutPage"),
  },
  {
    path: "/faq",
    name: "Faq",
    component: loadPage("FaqPage"),
  },
  {
    path: "/account",
    name: "Account",
    component: loadPage("AccountPage"),
    beforeEnter: authGuard,
  },
  {
    path: "/profile/:id",
    name: "Profile",
    component: loadPage("ProfilePage"),
    beforeEnter: authGuard,
  },
  {
    path: "/groups/:id",
    name: "Group",
    component: loadPage("GroupPage"),
    beforeEnter: authGuard,
  },
  {
    path: "/boardGame_Details/:id",
    name: "BoardGameDetails",
    component: loadPage("BoardGameDetailsPage"),
  },
];

export const router = createRouter({
  linkActiveClass: "router-link-active",
  linkExactActiveClass: "router-link-exact-active",
  history: createWebHashHistory(),
  routes,
});
