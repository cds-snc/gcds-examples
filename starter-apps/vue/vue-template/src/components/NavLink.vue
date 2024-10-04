<script setup>
import { RouterLink, useLink } from 'vue-router'

defineOptions({
  inheritAttrs: false,
})

const props = defineProps({
  ...RouterLink.props,
  inactiveClass: String,
  isExternal: Boolean,
})

const {
  // the href to use in a link
  href,
  // function to navigate to the link
  navigate
} = useLink(props)

</script>

<template>

  <router-link custom>
    <gcds-nav-link
        :href="href"
        :class="{ [props.inactiveClass]: props.inactiveClass && $route.path !== props.to }"
        :external="props.isExternal"
        @click="navigate"
        :slot="props.slot"
    >
      <slot/>
    </gcds-nav-link>
  </router-link>
</template>
