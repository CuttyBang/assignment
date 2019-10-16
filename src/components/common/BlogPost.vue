<template lang="html">
  <div class="blogPost">
    <BlogImg :imgUrl="image"/>
    <BlogText :textContent="topic" class="blogPost__text--topic"/>
    <BlogHeading :headingContent="title" class="blogPost__title h3"/>
    <div class="blogPost__text--link">
      <a>Read More</a>
    </div>
  </div>
</template>

<script>
import BlogImg from './Image.vue'
import BlogText from './TextBlock.vue'
import BlogHeading from './Heading.vue'

export default {
  name: 'blog-post',
  props: ['title', 'topic', 'image'],
  components: {
    BlogImg,
    BlogText,
    BlogHeading
  },
  data() {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
.blogPost {
  background: $blue;
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  @include for-desktop-up {
    flex-direction: row;
    width: 50%;
  }
}
.blogPost__text {
  text-align: center;
}

.blogPost__text__topic {

}

.blogPost__text--link {
  margin-bottom: 52px;
  a {
    line-height: 1.5;
    border-bottom: 1px solid $green;
    color: $green;
  }
}

.blogPost__title,
.blogPost__text__topic {
  color: $brown;
}
</style>
