<template>
  <v-app id="inspire">
    <v-navigation-drawer left v-model="drawer" app>
      <v-list dense>
        <v-list-item v-for="(menu, id) in menuList" v-bind:key="id" link :to="menu.to">
          <v-list-item-action>
            <v-icon v-html="menu.icon"></v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-html="menu.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="indigo" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>HTTP Server Pinger</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <v-container fluid>
        <v-row>
          <router-view></router-view>
        </v-row>
      </v-container>
    </v-content>
    <v-footer color="indigo" app>
      <span class="white--text">&copy; {{ year }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  props: {
    source: String
  },
  data: () => ({
    drawer: null,
    menuList: [
      { to: "Dashboard", title: "Dashboard", icon: "mdi-home" },
      { to: "Servers", title: "Servers", icon: "mdi-server" },
      { to: "Logs", title: "Logs", icon: "mdi-format-list-numbered" },
      { to: "About", title: "About", icon: "mdi-information" }
    ]
  }),
  computed: {
    year: function() {
      const date = new Date();
      return date.getFullYear();
    }
  }
};
</script>