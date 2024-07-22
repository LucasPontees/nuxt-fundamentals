<template>
  <nav class="greedys sidebar-horizantal">
      <ul class="list-inline-item list-unstyled links sidebar-horizantal">
          <template v-for="item in sideBarData" :key="item.title">
              <li class="menu-title">
                  <span>{{ item.title }} 1</span>
              </li>
              <template v-for="menu in item.menu" :key="menu.menuValue">
                  <li
                      v-if="!menu.hasSubRoute && (menu.menuValue === 'Inventory')">
                      <router-link :to="menu.route">
                          <i :class="'la la-' + menu.icon"></i>
                          <span>{{ menu.menuValue }}</span>
                      </router-link>
                  </li>
                  <li class="submenu" v-if="menu.hasSubRoute &&
                      (menu.menuValue === 'Dashboard' ||
                          menu.menuValue === 'Applications' ||
                          menu.menuValue === 'Super Admin' ||
                          menu.menuValue === 'Customer' ||
                          menu.menuValue === 'Products / Services' ||
                          menu.menuValue === 'Invoices' ||
                          menu.menuValue === 'Signature'
                      )" 
                      @click="expandSubMenus(menu)">
                      <a href="javascript:void(0)" :class="{ subdrop: menu.showSubRoute }">
                          <i :class="'feather feather-' + menu.icon"></i>
                          <span>{{ menu.menuValue }}</span>
                          <span class="menu-arrow"></span>
                      </a>
                      <ul :class="{ 'd-block': menu.showSubRoute, 'd-none': !menu.showSubRoute }">
                          <template v-for="subMenu in menu.subMenus" :key="subMenu.menuValue">
                              <li>
                                  <router-link :to="subMenu.route">{{ subMenu.menuValue }}</router-link>
                              </li>
                          </template>
                      </ul>
                  </li>
              </template>
          </template>
      </ul>
      <button @click="openMoreMenus" class="viewmoremenu">
          {{ showMoreMenu ? 'Less Menu' : 'More Menu' }}
      </button>
      <!-- /Settings -->
      <ul class="hidden-links" :class="{ hidden: showMoreMenu === false }">
          <template v-for="item in sideBarData" :key="item.title">
              <li class="menu-title">
                  <span>{{ item.title }}</span>
              </li>
              <template v-for="menu in item.menu" :key="menu.menuValue">
                  <li v-if="!menu.hasSubRoute" 
                      :hidden="menu.menuValue === 'Inventory' ||
                      menu.menuValue === 'Customers' ||
                      menu.menuValue === 'Customer' ||
                      menu.menuValue === 'Vendors' ||
                      menu.menuValue === 'Customer Details' ||
                      menu.menuValue === 'List of Signature' ||
                      menu.menuValue === 'Signature Invoice'">
                      <router-link :to="menu.route">
                          <i :class="'feather feather-' + menu.icon"></i>
                          <span>{{ menu.menuValue }}</span>
                      </router-link>
                  </li>
                  <li class="submenu" v-if="menu.hasSubRoute" :hidden="menu.menuValue === 'Dashboard' ||
                      menu.menuValue === 'Applications' ||
                      menu.menuValue === 'Super Admin' ||
                      menu.menuValue === 'Projects' ||
                      menu.menuValue === 'Customers' ||
                      menu.menuValue === 'Customer' ||
                      menu.menuValue === 'Products / Services' ||
                      menu.menuValue === 'Invoices' ||
                      menu.menuValue === 'Signature'"
                      @click="expandSubMenus(menu)">
                      <a href="javascript:void(0)" :class="{ subdrop: menu.showSubRoute }">
                          <i :class="'feather feather-' + menu.icon"></i>
                          <span>{{ menu.menuValue }}</span>
                          <span class="menu-arrow"></span>
                      </a>
                      <ul :class="{ 'd-block': menu.showSubRoute, 'd-none': !menu.showSubRoute }">
                          <template v-for="subMenu in menu.subMenus" :key="subMenu.menuValue">
                              <li>
                                  <router-link :to="subMenu.route">{{ subMenu.menuValue }}</router-link>
                              </li>
                          </template>
                      </ul>
                  </li>
              </template>
          </template>
      </ul>
  </nav>
</template>

<script>
import sideBarData from "@/assets/json/sidebar-data.json";
export default {
  data() {
      return {
          sideBarData: sideBarData,
          route_array: [],
          showMoreMenu: false,
      };
  },
  methods: {
      expandSubMenus(menu) {
          this.sideBarData.forEach((item) => {
              item.menu.forEach((subMenu) => {
              if (subMenu !== menu) {
                  subMenu.showSubRoute = false;
              }
              });
          });
          menu.showSubRoute = !menu.showSubRoute;
      },
      openMoreMenus() {
          this.showMoreMenu = !this.showMoreMenu;
      },
  },
};
</script>

<style>
/* Add your styles here */
</style>