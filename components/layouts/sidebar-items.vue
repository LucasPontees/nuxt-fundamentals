<template>
  <ul class="sidebar-vertical">
    <template v-for="item in sideBarData" :key="item.title">
      <li class="menu-title">
        <span>{{ item.title }}</span>
      </li>
      <template v-for="menu in item.menu" :key="menu.menuValue">
        <li v-if="!menu.hasSubRoute" :class="{ 'active': isMenuActive(menu) }">
          <router-link :to="menu.route">
            <i :class="'feather feather-' + menu.icon"></i>
            <span>{{ menu.menuValue }}</span>
          </router-link>
        </li>
        <li class="submenu" v-else>
          <a
            href="javascript:void(0)"
            @click="expandSubMenus(menu)"
            :class="{ subdrop: menu.showSubRoute, 'd-none': menu.view === false, active: route_array[1] === menu.active_link }"
          >
            <i :class="'feather feather-' + menu.icon"></i>
            <span>{{ menu.menuValue }}</span>
            <span class="menu-arrow"></span>
          </a>
          <ul :class="{ 'd-block': menu.showSubRoute, 'd-none': !menu.showSubRoute }">
            <li v-for="subMenu in menu.subMenus" :key="subMenu.menuValue"
            :class="{ active: currentPath === subMenu.active_link}">
              <router-link
                :to="subMenu.route"
                :class="{ active: currentPath === subMenu.active_link || currentPath === subMenu.active_link1}"
              >
                {{ subMenu.menuValue }}
              </router-link>
            </li>
          </ul>
        </li>
      </template>
    </template>
    <li>
      <a href="javascript:void(0);">
        <i class="feather feather-file-text"></i>
        <span>Documentation</span>
      </a>
    </li>
    <li>
      <a href="javascript:void(0);">
        <i class="feather feather-lock"></i>
        <span>Change Log</span>
        <span class="badge badge-primary ms-auto">v2.0.4</span>
      </a>
    </li>
    <li class="submenu">
      <a
        :class="{ subdrop: multilevel[0] }"
        @click="multilevel[0] = !multilevel[0]"
        href="javascript:void(0);"
      >
        <i class="feather icon-list"></i>
        <span>Multi Level</span>
        <span class="menu-arrow"></span>
      </a>
      <ul :class="{ 'd-block': multilevel[0], 'd-none': !multilevel[0] }">
        <li class="submenu">
          <a
            :class="{ subdrop: multilevel[1] }"
            @click="multilevel[1] = !multilevel[1]"
            href="javascript:void(0);"
          >
            <span>Level 1</span>
            <span class="menu-arrow"></span>
          </a>
          <ul :class="{ 'd-block': multilevel[1], 'd-none': !multilevel[1] }">
            <li>
              <a href="javascript:void(0);"><span>Level 2</span></a>
            </li>
            <li class="submenu">
              <a
                :class="{ subdrop: multilevel[2] }"
                @click="multilevel[2] = !multilevel[2]"
                href="javascript:void(0);"
              >
                <span> Level 2</span>
                <span class="menu-arrow"></span>
              </a>
              <ul :class="{ 'd-block': multilevel[2], 'd-none': !multilevel[2] }">
                <li><a href="javascript:void(0);">Level 3</a></li>
                <li><a href="javascript:void(0);">Level 3</a></li>
              </ul>
            </li>
            <li>
              <a href="javascript:void(0);"><span>Level 2</span></a>
            </li>
          </ul>
        </li>
        <li>
          <a href="javascript:void(0);"><span>Level 1</span></a>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script>
import sideBarData from "@/assets/json/sidebar-data.json";

export default {
  data() {
    return {
      sideBarData: sideBarData,
      route_array: [],
      multilevel: [false, false, false],
    };
  },
  computed: {
    currentPath() {
      this.route_array = this.$route.path.split("/");
      return this.$route.path ;
    },
    isMenuActive() {
      return (menu) => {
        return this.$route.path === menu.route || 
          this.$route.path === menu.active_link || 
          this.$route.path === menu.active_link1 ||
          this.$route.path === menu.active_link2 ||
          this.$route.path === menu.active_link3 ||
          this.$route.path === menu.active_link4 ||
          this.$route.path === menu.active_link5 ||
          this.$route.path === menu.active_link6 ||
          this.$route.path === menu.active_link7 ||
          this.$route.path === menu.active_link8 ||
          this.$route.path === menu.active_link9 ||
          this.$route.path === menu.active_link10 ||
          this.$route.path === menu.active_link11 ||
          this.$route.path === menu.active_link12 ||
          this.$route.path === menu.active_link13 ||
          this.$route.path === menu.active_link14;
      };
    },
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
  },
};
</script>