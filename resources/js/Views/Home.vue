<template>
  <div class="container">
    <div class="columns">
      <div class="column">
        <div class="message" v-for="status in statuses" :key="status.id">
          <div class="message-header">
            <p>{{ status.user.name }} said...</p>
            <p>{{ status.created_at | age }}</p>
          </div>

          <div class="message-body" v-text="status.body">{{ status.body }}</div>
        </div>

        <add-to-stream @completed="addStatus"></add-to-stream>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import Status from "../models/Status.js";
import AddToStream from "../components/AddToStream";

export default {
  components: { AddToStream },

  data() {
    return {
      statuses: []
    };
  },
  filters: {
    age(data) {
      return moment(data).fromNow();
    }
  },
  created() {
    Status.all(statuses => (this.statuses = statuses));
  },
  methods: {
    addStatus(status) {
      this.statuses.unshift(status);
      window.scrollTo(0, 0);
    }
  }
};
</script>
