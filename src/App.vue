<template>
  <div id="app">
    <Header />

    <router-view />

    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  font-family: Arial, Helvetica, sans-serif;
}

ul {
  list-style: none;
}

html,
body,
#app {
  width: 100%;
  height: 100vh;
}

.btn {
  background: #87f;
  color: white;
  box-shadow: 0px 2px 8px rgba(30, 60, 90, 0.2);

  border: 0;
  border-radius: 4px;
  padding: 10px 30px;

  font-size: 1rem;
  text-align: center;

  cursor: pointer;

  transition: all 0.3s;
}

.btn:hover {
  transform: scale(1.1);
  background: #65d;
}
</style>
