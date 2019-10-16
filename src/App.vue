<template>
  <div id="app">
    <TopBar/>
    <NavBar/>
    <Hero/>
    <LogoBar/>
    <Noteworthy/>
    <Featured/>
    <Explore/>
    <About/>
    <Testimonials/>
    <Blogs/>
    <Instagram/>
    <Footer/>
  </div>
</template>

<script>
import TopBar from './components/layout/TopBar.vue'
import NavBar from './components/layout/NavBar.vue'
import Hero from './components/layout/Hero.vue'
import LogoBar from './components/layout/LogoBar.vue'
import Noteworthy from './components/layout/Noteworthy.vue'
import Featured from './components/layout/Featured.vue'
import Explore from './components/layout/Explore.vue'
import About from './components/layout/About.vue'
import Testimonials from './components/layout/Testimonials.vue'
import Blogs from './components/layout/Blogs.vue'
import Instagram from './components/layout/Instagram.vue'
import Footer from './components/layout/Footer.vue'

export default {
  name: 'app',
  components: {
    TopBar,
    NavBar,
    Hero,
    LogoBar,
    Noteworthy,
    Featured,
    Explore,
    About,
    Testimonials,
    Blogs,
    Instagram,
    Footer
  }
}
</script>

<style lang="scss">
#app {
  width: 100%;
  max-width: 1400px;
  min-width: 375px;
}
</style>
