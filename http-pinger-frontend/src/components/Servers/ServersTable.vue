<template>
  <v-data-table :headers="headers" :items="servers" sort-by="calories" class="elevation-1">
    <template v-slot:top>
      <v-toolbar flat color="white">
        <v-toolbar-title>Servers</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on }">
            <v-btn color="primary" dark class="mb-2" v-on="on">Add Server</v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.name" label="Name"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.ip" label="IP"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-switch v-model="editedItem.isEnabled" label="Is Enabled"></v-switch>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="save">Save</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon small class="mr-2" @click="editItem(item)">mdi-pencil</v-icon>
      <v-icon small @click="deleteItem(item)">mdi-delete</v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn color="primary" @click="initialize">Reset</v-btn>
    </template>
  </v-data-table>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    headers: [
      {
        text: "ID",
        value: "id",
        align: "start"
      },
      { text: "Name", value: "name" },
      { text: "Availability", value: "availability" },
      { text: "IP", value: "ip" },
      { text: "Updated At", value: "updated_at" },
      { text: "Actions", value: "actions", sortable: false }
    ],
    servers: [],
    editedIndex: -1,
    editedItem: {
      ip: "",
      name: ""
    },
    defaultItem: {
      ip: "",
      name: ""
    }
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Server" : "Edit Server";
    }
  },

  watch: {
    dialog(val) {
      val || this.close();
    }
  },

  created() {
    this.initialize();
  },

  methods: {
    initialize() {
      this.$store.dispatch("server/getAll").then(() => {
        this.servers = this.$store.getters["server/servers"];
      });
    },

    editItem(item) {
      this.editedIndex = this.servers.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      const index = this.servers.indexOf(item);
      confirm("Are you sure you want to delete this server?") &&
        this.servers.splice(index, 1);
    },

    close() {
      this.dialog = false;
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      }, 300);
    },

    save() {
      this.$store.dispatch("server/add", this.editedItem).then(() => {
        this.servers = this.$store.getters["server/servers"];
        this.close();
      });
    }
  }
};
</script>