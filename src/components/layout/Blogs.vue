<template lang="html">
  <div class="blogs">
    <BlogsHeading :headingContent="heading" class="blogs__heading"/>
    <BlogPost v-for="(blog, index) in blogPosts" :topic="blog.topic" :title="blog.title" :image="blog.image" :key="index" class="blogs__post"/>
    <div class="blogs__buttonBlock">
      <BlogsButton :buttonText="btnText" buttonClass="btnMd secondary" class="blogs__button"/>
    </div>
  </div>
</template>

<script>
import BlogsHeading from '../common/Heading.vue'
import BlogPost from '../common/BlogPost.vue'
import BlogsButton from '../common/Button.vue'
export default {
  name: 'blogs',
  components: {
    BlogsHeading,
    BlogPost,
    BlogsButton
  },
  data() {
    return {
      heading: 'Our Latest Blogs',
      blogPosts: [
        {image: 'https://via.placeholder.com/250x250', topic: 'Skincare Concerns', title: 'Kristina Holey & Marie Veronique On Perioral Dermatitis'},
        {image: 'https://via.placeholder.com/250x250', topic:'Inside Our Brands', title: 'The Story Behind Foot Therapy'}
      ],
      btnText: 'See All Blog Posts'
    }
  }
}
</script>

<style lang="scss" scoped>
.blogs {
  text-align: center;
  background: $blue;
  width: 100%;
  padding-bottom: 25px;
  padding-top: 25px;
}

.blogs__heading {
  color: $brown;
  font-weight: 400;
}

.blogs__buttonBlock {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.blogs__post {
  padding-top: 25px;
  padding-bottom: 25px;
}

.blogs__button {
  width: 221px;
  margin: 0 auto;
}


</style>
