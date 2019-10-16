<template lang="html">
  <div class="blogPost">
    <BlogImg :imgUrl="image"/>
    <div class="blogPost__content">
      <BlogText :textContent="topic" class="blogPost__text--topic"/>
      <BlogHeading :headingContent="title" class="blogPost__text--title h3"/>
      <div class="blogPost__text--link">
        <a class="blogPost__text--linkText">Read More</a>
      </div>
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

  @include for-desktop-up {
    flex-direction: row;
    width: 50%;
  }
  &__content {
    width: 90%;
    text-align: center;
    margin: 0 auto;
  }
  &__text--title, &__text--topic {
    color: $brown;
  }

  &__text--topic {
    font-weight: 100;
  }
  &__text--link {
    margin-top: 50px;
    margin-bottom: 52px;
  }
  &__text--linkText {
    line-height: 1.5;
    border-bottom: 1px solid $green;
    color: $green;
  }
}
</style>
