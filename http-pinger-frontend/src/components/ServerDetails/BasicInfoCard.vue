<template>
  <v-card outlined>
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mb-4">Server Details</div>
        <v-list-item-title class="headline mb-1">{{ server.name }}</v-list-item-title>

        <v-list-item two-line>
          <v-list-item-content>
            <v-list-item-title>IP Address</v-list-item-title>
            <v-list-item-subtitle>{{server.ip}}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-list-item two-line>
          <v-list-item-content>
            <v-list-item-title>Created At</v-list-item-title>
            <v-list-item-subtitle>{{server.created_at}}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-list-item two-line>
          <v-list-item-content>
            <v-list-item-title>Updated At</v-list-item-title>
            <v-list-item-subtitle>{{server.updated_at}}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-content>
    </v-list-item>
  </v-card>
</template>


<script>
export default {
  data: () => ({
    server: {}
  }),

  computed: {},

  watch: {},

  created() {
    this.initialize();
  },

  methods: {
    initialize() {
      this.$store.dispatch("server/getOne", this.$route.params.id).then(() => {
        this.server = this.$store.getters["server/server"];
      });
    }
  }
};
</script>