<template>
    <gcds-footer
      display="full"
      :lang="locale.value"
    ></gcds-footer>
</template>
<script setup>
import { useI18n } from 'vue-i18n';
const {locale} = useI18n();
</script>