import router from '../router'

/**
 * Programmatically navigate to a linkItem
 * @param linkItem
 */
export const navigateTo = (path) => {
  router.push(path)
}
