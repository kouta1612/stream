<template>
  <div class="message">
    <div class="message-header">Push to the stream...</div>
    <div class="message-body">
      <form @submit.prevent="onSubmit">
        <p class="control">
          <textarea
            class="textarea"
            placeholder="I have something to say..."
            v-model="form.body"
            @keydown="form.errors.clear()"
          ></textarea>
          <span
            class="help is-danger"
            v-if="form.errors.has('body')"
            v-text="form.errors.get('body')"
          ></span>
        </p>
        <br>
        <p>
          <button class="button is-primary" :disabled="form.errors.any()">Submit</button>
        </p>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: new Form({ body: "" })
    };
  },
  methods: {
    onSubmit() {
      this.form
        .post("/statuses")
        .then(status => this.$emit("completed", status));
    }
  }
};
</script>
