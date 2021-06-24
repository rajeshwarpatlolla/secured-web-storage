<template>
  <div id="app">
    <h1>secured-web-storage demo</h1>
    <div>Open the browser developer tools and check the Application > storage > Local Storage and console tabs</div>
    <div>
      <button @click="setItem()">Set Item</button>
    </div>
    <div>
      <button @click="getItem()">Get Item</button>
    </div>
    <div>
      <button @click="deleteItem()">Delete Item</button>
    </div>
    <div>
      <button @click="getAllItems()">Get All Items</button>
    </div>
    <div>
      <button @click="deleteAllItems()">Delete All Items</button>
    </div>
    <div>
      <button @click="getAllKeys()">Get All Keys</button>
    </div>
    <div>
      <button @click="getLength()">Get Length</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    setItem() {
      console.log(this.store.setItem('key', { a: 12345 }));
    },
    getItem() {
      console.log(this.store.getItem('key'));
    },
    deleteItem() {
      console.log(this.store.deleteItem('key'));
    },
    getAllItems() {
      console.log(this.store.getAllItems());
    },
    deleteAllItems() {
      console.log(this.store.deleteAllItems());
    },
    getAllKeys() {
      console.log(this.store.getAllKeys());
    },
    getLength() {
      console.log(this.store.getLength());
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
div {
  padding: 8px 0;
}
</style>
