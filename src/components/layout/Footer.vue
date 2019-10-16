<template lang="html">
  <footer class="footer">
    <div class="footer__formBlock">
      <FooterForm :titleContent="formTitle" :placeholderContent="formPlaceholder"/>
    </div>
    <div class="footer__menu">
      <div class="footer__menuItem" v-for="(item, index) in menuItems" :key="index">
        <TextBlock :textContent="item" class="footer__menuItemText"/>
        <span class="footer__menuItemSymbol h2">+</span>
      </div>
    </div>
    <div class="footer__logoBock">
      <Logo :version="logoVersion" class="footer__logo"/>
    </div>
    <div class="footer__slogan">
      <textBlock :textContent="slogan" class="plarge"/>
    </div>
    <div class="footer__socialIcons">
      <Twitter />
      <Facebook />
      <Pinterest />
    </div>
  </footer>
</template>

<script>
import TextBlock from '../common/TextBlock.vue'
import FooterForm from '../common/Form.vue'
// import Accordion from '../common/Accordion.vue'
import Logo from '../common/Logo.vue'
import Twitter from '../icons/twitter.vue'
import Facebook from '../icons/facebook.vue'
import Pinterest from '../icons/pinterest.vue'
export default {
  name: 'site-footer',
  components: {
    FooterForm,
    TextBlock,
    Logo,
    Twitter,
    Facebook,
    Pinterest
  },
  data() {
    return {
      formTitle: 'Sign Up For Updates',
      formPlaceholder: 'Get Updates',
      menuItems: ['Shop','Explore','Support', 'Company'],
      logoVersion: 'light',
      slogan: 'Personalized guidance for non-toxic beauty that works'
    }
  }
}
</script>

<style lang="scss" scoped>
.footer {
  background: $brown;
  height: 726px;
}

.footer__formBlock {
  width: 80%;
  max-width: 350px;
  margin: 0 auto;
}

.footer__menu {
  margin-top: 25px;
}

.footer__menuItem {
  width: 100%;
  border-bottom: 1px solid #3c2828;
  padding-top: 15px;
  padding-bottom: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.footer__menuItemSymbol {
  font-weight: 400;
  color: #fff;
  margin-right: 20px;

}
.footer__menuItemText {
  color: #fff;
  margin-left: 20px;
}

.footer__logoBock {
  margin-top: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.footer__logo {
  width: 96px;
  height: auto;
}

.footer__slogan {
  text-align: center;
  color: #fff;
  width: 75%;
  margin: 0 auto;
}

.footer__socialIcons {
  width: 75%;
  margin: 20px auto 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
