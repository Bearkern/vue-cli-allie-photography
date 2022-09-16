<template>
  <nav class="navbar navbar-expand-lg fixed-top bg-light">
    <div class="container">
      <h1>
        <RouterLink class="navbar-brand" to="/"> 艾里攝影工作室 </RouterLink>
      </h1>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
        @click="toggleNavHam"
      >
        <span class="material-icons fs-1"> reorder </span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav" ref="collapse">
        <ul class="navbar-nav text-center gap-lg-6">
          <li class="nav-item">
            <RouterLink to="/about" class="nav-link" @click="closeNavHam">關於艾里</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/photographs" class="nav-link" @click="closeNavHam"
              >攝影作品</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink to="/projects" class="nav-link" @click="closeNavHam">攝影方案</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/contact" class="nav-link" @click="closeNavHam">聯絡我們</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/appointment" class="nav-link" @click="closeNavHam">
              <span class="material-symbols-outlined align-text-bottom me-2"> local_mall </span
              >收藏方案
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import collapseMixin from '@/mixins/collapseMixin';

export default {
  mixins: [collapseMixin],
};
</script>
<style lang="scss" scoped>
.navbar {
  &-brand {
    display: block;
    background-image: url(../assets/images/allie-logo.png);
    background-size: contain;
    height: 60px;
    width: 133px;
    @include hide-text;
  }
  &-toggler {
    --bs-border-width: 0;
  }
}
</style>
