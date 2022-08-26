<template>
  <nav class="navbar navbar-expand-lg navbar-light py-4">
    <div class="container">
      <h1>
        <RouterLink class="navbar-brand" to="/"> 艾里攝影工作室 </RouterLink>
      </h1>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarMenu"
        aria-controls="navbarMenu"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse flex-grow-0" id="navbarMenu">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink to="/about" class="nav-link">關於艾里</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/photographs" class="nav-link">攝影作品</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/projects" class="nav-link">攝影方案</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/contact" class="nav-link">聯絡我們</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/appointment" class="nav-link">
              <span class="material-symbols-outlined"> local_mall </span>
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
h1 {
  a {
    display: block;
    background-image: url(../assets/images/allie-logo.png);
    width: 351px;
    height: 155px;
    text-indent: 101%;
    white-space: nowrap;
    overflow: hidden;
  }
}
</style>
