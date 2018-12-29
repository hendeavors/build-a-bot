<template>
  <div>
    <h1>Browse Parts</h1>
    <ul class="menu">
      <li>
          <router-link :to="{ name: 'RobotHeads', params: {} }">Heads</router-link>
      </li>
      <li>
          <router-link :to="{ name: 'RobotArms', params: {} }">Arms</router-link>
      </li>
      <li>
          <router-link :to="{ name: 'RobotTorsos', params: {} }">Torsos</router-link>
      </li>
      <li>
          <router-link :to="{ name: 'RobotBases', params: {} }">Bases</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'BrowseParts',
};
</script>

<style scoped>
  h1 {
    text-align: center;
  }
  .menu {
    display: flex;
    justify-content: space-around;
    margin: 0 100px;
    font-size: 20px;
  }
  ul {
    list-style-type: none;
  }
  a {
    color: palevioletred;
  }
</style>
