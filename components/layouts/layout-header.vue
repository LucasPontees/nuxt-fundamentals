<template>
  <div class="header header-one">
    <nuxt-link to="/dashboard/"
      class="d-inline-flex d-sm-inline-flex align-items-center d-md-inline-flex d-lg-none align-items-center device-logo">
      <img src="@/assets/img/logo.png" class="img-fluid logo2" alt="Logo" />
    </nuxt-link>
    <div class="main-logo d-inline float-start d-lg-flex align-items-center d-none d-sm-none d-md-none">
      <div class="logo-white">
        <nuxt-link to="/dashboard/">
          <img src="@/assets/img/logo-full-white.png" class="img-fluid logo-blue" alt="Logo" />
        </nuxt-link -link>
        <nuxt-link to="/dashboard/">
          <img src="@/assets/img/logo-small-white.png" class="img-fluid logo-small" alt="Logo" />
        </nuxt-link -link>
      </div>
      <div class="logo-color">
        <nuxt-link to="/dashboard/">
          <!-- <img src="@/assets/img/Kanoa-preto.png" class="img-fluid logo-blue" alt="Logo" /> -->
        </nuxt-link -link>
        <nuxt-link to="/dashboard/">
          <!-- <img src="@/assets/img/Kanoa-simbolo.png" class="img-fluid logo-small" alt="Logo" /> -->
        </nuxt-link -link>
      </div>
    </div>

    <!-- Sidebar Toggle -->
    <a href="javascript:void(0);" id="toggle_btn" @click="toggleSidebar">
      <span class="toggle-bars">
        <span class="bar-icons"></span>
        <span class="bar-icons"></span>
        <span class="bar-icons"></span>
        <span class="bar-icons"></span>
      </span>
    </a>
    <!-- /Sidebar Toggle -->

    <!-- Mobile Menu Toggle -->
    <a class="mobile_btn" id="mobile_btn" @click="toggleSidebar1">
      <i class="fas fa-bars"></i>
    </a>
    <!-- /Mobile Menu Toggle -->

    <!-- Header Menu -->
    <ul class="nav nav-tabs user-menu">

      <li class="nav-item has-arrow dropdown-heads">
        <p>{{ formattedDateTime }}</p>
      </li>
      <li class="nav-item dropdown flag-nav dropdown-heads">
        <a class="nav-link" data-bs-toggle="dropdown" href="javascript:;" role="button">
          <i class="feather feather-bell d-flex align-items-center justify-content-center"></i>
          <span class="badge rounded-pill"></span>
        </a>
        <div class="dropdown-menu notifications">
          <div class="topnav-dropdown-header">
            <div class="notification-title">
              Notifications <nuxt-link to="/notifications">View all</nuxt-link>
            </div>
            <a href="javascript:void(0)" class="clear-noti d-flex align-items-center">Mark all as read <i
                class="feather feather-check-circle"></i></a>
          </div>
          <div class="noti-content">
            <ul class="notification-list">
            </ul>
          </div>
          <div class="topnav-dropdown-footer">
            <a href="javascript:;">Clear All</a>
          </div>
        </div>
      </li>
      <li class="nav-item has-arrow dropdown-heads">
        <a href="javascript:void(0);" class="win-maximize" @click="initFullScreen">
          <i class="feather feather-maximize d-flex align-items-center justify-content-center"></i>
        </a>
      </li>
      <!-- User Menu -->
      <li class="nav-item dropdown">
        <a href="javascript:void(0)" class="user-link nav-link" data-bs-toggle="dropdown">
          <span class="user-img">
            <!-- <img src="@/assets/img/profiles/avatar-07.jpg" alt="img" class="profilesidebar" /> -->
            <span class="animate-circle"></span>
          </span>
          <span class="user-content">
            <span class="user-details">Admin</span>
            <span class="user-name">Suporte</span>
          </span>
        </a>
        <div class="dropdown-menu menu-drop-user">
          <div class="profilemenu">
            <div class="subscription-menu">
              <ul>
                <li>
                  <nuxt-link class="dropdown-item" to="/profile">Profile</nuxt-link>
                </li>
                <li>
                  <nuxt-link class="dropdown-item" to="/settings/">Settings</nuxt-link>
                </li>
              </ul>
            </div>
            <div class="subscription-logout">
              <ul>
                <li class="pb-0">
                  <nuxt-link class="dropdown-item" to="/">Log Out</nuxt-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </li>
      <!-- /User Menu -->
    </ul>

    <!-- /Header Menu -->
  </div>

  <side-settings></side-settings>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';
import { format } from 'date-fns';

export default {

  setup() {
    const now = ref(new Date());
    const formattedDateTime = ref(format(now.value, "dd/MM/yyyy |HH:mm:ss"));

    const updateDateTime = () => {
      now.value = new Date();
      formattedDateTime.value = format(now.value, "dd/MM/yyyy | HH:mm:ss");
    };

    let intervalId = null;

    onMounted(() => {
      intervalId = setInterval(updateDateTime, 1000);
    });

    onUnmounted(() => {
      clearInterval(intervalId);
    });

    return {
      formattedDateTime,
    };
  },
  data() {
    return {};
  },
  mounted() {
    // Add click event listener
    this.$nextTick(() => {
      document.addEventListener("click", this.handleToggleClick);
    });

    // Ao passar mouse por cima do sidebar fechado, ele ira expandir.
    document.addEventListener("mouseover", (event) => {
      event.stopPropagation();

      var body = document.body;
      var toggleBtn = document.getElementById("toggle_btn");
      var sidebar = document.getElementsByClassName("sidebar")[0];
      var subdropUL = document.getElementsByClassName("subdrop");

      if (body.classList.contains("mini-sidebar") && toggleBtn.style.display !== "none") {
        var target = event.target.closest(".sidebar");

        if (target) {
          body.classList.add("expand-menu");
          for (var i = 0; i < subdropUL.length; i++) {
            var ul = subdropUL[i].nextElementSibling;
            if (ul) {
              ul.style.display = "block";
            }
          }
        } else {
          body.classList.remove("expand-menu");
          for (var i = 0; i < subdropUL.length; i++) {
            var ul = subdropUL[i].nextElementSibling;
            if (ul) {
              ul.style.display = "none";
            }
          }
        }

        event.preventDefault();
      }
    });
  },
  beforeUnmount() {
    document.removeEventListener("click", this.handleToggleClick);
  },

  methods: {
    toggleSidebar1() {
      const body = document.body;
      body.classList.toggle("slide-nav");
    },
    toggleSidebar() {
      const body = document.body;
      body.classList.toggle("mini-sidebar");
    },
    initFullScreen() {
      document.body.classList.toggle("fullscreen-enable");
      if (
        !document.fullscreenElement &&
        /* alternative standard method */
        !document.mozFullScreenElement &&
        !document.webkitFullscreenElement
      ) {
        // current working methods
        if (document.documentElement.requestFullscreen) {
          document.documentElement.requestFullscreen();
        } else if (document.documentElement.mozRequestFullScreen) {
          document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullscreen) {
          document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
        }
      } else {
        if (document.cancelFullScreen) {
          document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
        }
      }
    },
  },
};
</script>
