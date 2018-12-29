<template>
  <div id="app">
    <header>
      <nav>
        <ul>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'Home', params: {} }" exact>
                <img class="logo" src="./assets/build-a-bot-logo.png"/>
                Build-a-bot
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'Build', params: {} }" exact>
                Build
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'BrowseParts', params: {} }" exact>
                Browse
            </router-link>
          </li>
          <li class="nav-item cart">
            <router-link class="nav-link" to="/cart" exact>
                Cart
            </router-link>
            <div class="cart-items">
                {{cart.length}}
            </div>
          </li>
        </ul>
      </nav>
    </header>
    <div class="container">
      <aside class="aside">
        <router-view name="sidebar"></router-view>
      </aside>
      <main>
        <router-view/>
      </main>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app',
  computed: {
    cart() {
      return this.$store.state.cart;
    },
  },
};
</script>

<style>
body {
    background: linear-gradient(to bottom, #555,#999);
    background-attachment: fixed;
}
</style>

<style scoped>
main {
    padding: 30px;
    background-color: white;
    width: 964px;
    min-height: 300px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
header {
  background-color: #999;
  width: 1184px;
  margin: 0 auto;
}
ul {
  padding: 3px;
  display: flex;
}
.nav-item {
  display: inline-block;
  padding: 5px 10px;
  font-size: 22px;
  border-right: 1px solid #bbb;
}
.logo {
  vertical-align: middle;
  height: 30px;
}
.nav-link {
  text-decoration: none;
  color: inherit;
}
.router-link-active {
  color:white;
}
.container {
  display: flex;
  margin-left: auto;
  margin-right: auto;
  width: 1184px;
}
.aside {
  min-height: 300px;
  width: 100px;
  background-color: #aaa;
  padding: 30px;
}
.nav-item.cart {
  margin-left: auto;
  border-right: none;
  position: relative;
}
.cart-items {
  position: absolute;
  top: -5px;
  right: -13px;
  font-size: 18px;
  width: 25px;
  text-align: center;
  display: inline-block;
  border-radius: 100px;
  background-color: mediumseagreen;
}
</style>
