<script setup>
/**
 * This is a wrapper component for <gcds-link>, <gcds-nav-link>, and <gcds-breadcrumbs-item> components.
 * It is used to provide a consistent API for all three components.
 * It also provides a way to navigate to a route using the router, which prevents a hard refresh for internal links.
 *
 * You may want to extend this component to include additional props or functionality.
 * For example, you could add a prop to display a download link
 *    or a prop to display a mailto link, which are supported by <gcds-link>.
 *
 * @see
 * - <gcds-link> component: https://design-system.alpha.canada.ca/en/components/link/
 * - <gcds-nav-link> component: https://design-system.alpha.canada.ca/en/components/top-navigation/
 * - <gcds-breadcrumbs-item> component: https://design-system.alpha.canada.ca/en/components/breadcrumbs/
 */
import { RouterLink, useLink } from 'vue-router'

defineOptions({
  inheritAttrs: false
})

const props = defineProps({
  ...RouterLink.props,
  inactiveClass: String,
  // <gcds-link> prop only
  external: Boolean,
  // <gcds-nav-link> prop only
  current: Boolean,
  component: {
    type: String,
    default: 'gcds-link'
  }
})

const { navigate } = useLink(props)
</script>

<template>
  <router-link custom>
    <gcds-nav-link
      v-if="props.component === 'nav'"
      :current="props.current"
      :href="props.to"
      @click="navigate"
    >
      <slot />
    </gcds-nav-link>
    <gcds-breadcrumbs-item
      v-else-if="props.component === 'breadcrumb'"
      :href="props.to"
      @click="navigate"
    >
      <slot />
    </gcds-breadcrumbs-item>
    <gcds-link
      v-else
      :class="{ [props.inactiveClass]: props.inactiveClass && $route.path !== props.to }"
      :external="props.external"
      :href="props.to"
      @click="navigate"
    >
      <slot />
    </gcds-link>
  </router-link>
</template>
