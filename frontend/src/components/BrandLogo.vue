<template>
  <span class="brand-logo" :aria-label="BRAND.name" role="img">
    <img src="@/assets/img/shitu-mark.svg" alt="" class="brand-mark" />
    <span class="brand-name">势途AI<span class="brand-detail">企业级知识库</span></span>
  </span>
</template>

<script setup lang="ts">
import { BRAND } from '@/brand'
</script>

<style scoped>
.brand-logo { display: inline-flex; align-items: center; gap: 8px; color: var(--td-text-color-primary); }
.brand-mark { width: 32px; height: 32px; flex: none; background: #fff; border-radius: 5px; padding: 3px; box-sizing: border-box; }
.brand-name { font-size: var(--app-text-lg); line-height: 1.25; font-weight: 700; white-space: nowrap; }
.brand-detail { display: block; font-size: var(--app-text-xs); font-weight: 500; letter-spacing: .04em; }
</style>
