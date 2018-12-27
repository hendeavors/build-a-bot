<template>
  <div>
    <h1>{{part.title}}</h1>
    <div :class="['part']">
      {{part.description}}
      <img :class="['row']" :src="part.src"/>
    </div>
  </div>
</template>

<script>
import parts from '../data/parts';

export default {
  name: 'PartInfo',
  props: {
    partType: {
      type: String,
    },
    id: {
      type: [Number, String],
      validator(value) {
        return Number.isInteger(Number(value));
      },
    },
  },
  computed: {
    part() {
      const { partType, id } = this;
      return parts[partType].find(x => x.id === parseInt(id, 10));
    },
  },
};
</script>

<style lang="scss" scoped>
.part {
  img {
    width: 25%;
    display: block;
    margin-left: auto;
    margin-right: auto;
    border-radius: 3px;
    border: 1px solid #aaa;
    padding: 20px;
  }
}
.row {
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>
