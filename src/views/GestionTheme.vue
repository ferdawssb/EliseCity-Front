<template>
  <div>
    <RequestTypes />
    <AddRequestType />
  </div>
</template>

<script>
import RequestTypes from "../components/RequestTypes.vue";
import AddRequestType from "../components/AddRequestType.vue";

export default {
  components: {
    RequestTypes,
    AddRequestType,
  },
};
</script>
