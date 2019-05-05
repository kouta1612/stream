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
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import Status from "../models/Status.js";

export default {
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
  }
};
</script>
