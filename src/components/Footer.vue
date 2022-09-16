<template>
  <footer class="footer text-center bg-primary text-white py-12">
    <img
      src="../assets/images/logo-name-transparent.svg"
      alt="allie logo"
      class="footer-logo mb-4"
    />
    <nav class="footer-nav mb-6">
      <ul class="list-unstyled d-flex gap-2 gap-md-4 justify-content-center">
        <li class="nav-item">
          <RouterLink to="./about" class="text-white">關於艾里</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="./photogrpahs" class="text-white">攝影作品</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="./projects" class="text-white">攝影方案</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="./contact" class="text-white">聯絡我們</RouterLink>
        </li>
      </ul>
    </nav>
    <p class="fs-6 fs-md-5">© 2022 Allie 艾里新生兒 攝影 by Clara Cai All rights reserved</p>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  &-logo {
    width: 256px;
    height: 66px;
  }
}
.nav-item {
  &:not(:first-child)::before {
    content: "";
    float: left;
    margin-right: 8px;
    height: 24px;
    width: 1px;
    background-color: white;
    @include media-breakpoint-up(md) {
      margin-right: 16px;
    }
  }
}
</style>
