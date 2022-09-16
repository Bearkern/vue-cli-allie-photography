<template>
  <section class="banner d-flex align-items-center">
    <div class="container">
      <p class="fs-2 text-white mb-4">
        每個生命的誕生是如此珍貴與感恩，<br />
        用最真誠的心紀錄媽咪和寶貝的每一刻、每一秒、每一個瞬間。
      </p>
      <button class="btn btn-white">前往預約</button>
    </div>
  </section>
  <section class="about container py-12 py-lg-28">
    <div class="row justify-content-center">
      <div
        class="col-md-5 col-lg-4 d-flex flex-column justify-content-lg-center align-items-start fw-medium"
      >
        <p class="mb-4">2021 年 5 月，艾里制定全新工作室理念。</p>
        <p class="fs-3 mb-4">
          理念為明確指示艾里的前進方向，確實明示艾里「愛你寶貝」之宣言為寶貝們紀錄攝影。
        </p>
        <RouterLink to="./about" class="btn btn-primary mb-6">查看更多</RouterLink>
      </div>
      <div class="about-images col-md-7 col-lg-6 row row-cols-3 px-1 px-lg-3">
        <div class="col">
          <img
            class="about-image img-fluid"
            src="../assets/images/home-about1.jpg"
            alt="home about 1"
          />
        </div>
        <div class="col">
          <img
            class="about-image img-fluid"
            src="../assets/images/home-about2.jpg"
            alt="home about 2"
          />
        </div>
        <div class="col">
          <img
            class="about-image img-fluid"
            src="../assets/images/home-about3.jpg"
            alt="home about 3"
          />
        </div>
      </div>
    </div>
  </section>
  <section class="photograph bg-secondary py-10 pt-lg-12 pb-lg-20">
    <div class="container">
      <h2 class="index-title mb-6">攝影作品</h2>
      <ul class="list-unstyled row row-cols-1 row-cols-lg-3">
        <li class="col mb-6">
          <div class="card">
            <img
              class="card-img pt-3 px-3"
              src="../assets/images/home-photograph1.jpg"
              height="351"
              alt="home photograph 1"
            />
            <div class="card-body">
              <h3 class="card-title">新生兒寫真</h3>
              <p class="card-text">寶寶一生中最珍貴美的回憶，出生 14 ~ 21 天即可拍攝。</p>
              <RouterLink to="/photographs" class="stretched-link"></RouterLink>
            </div>
          </div>
        </li>
        <li class="col mb-6">
          <div class="card">
            <img
              class="card-img pt-3 px-3"
              src="../assets/images/home-photograph2.jpg"
              height="351"
              alt="home photograph 2"
            />
            <div class="card-body">
              <h3 class="card-title">孕婦寫真</h3>
              <p class="card-text">
                孕媽咪最美麗的體態，28 ~ 32周的肚子大小最好。<br />
                曲線漂亮剛好、一切都很好！
              </p>
              <RouterLink to="/photographs" class="stretched-link"></RouterLink>
            </div>
          </div>
        </li>
        <li class="col mb-6">
          <div class="card">
            <img
              class="card-img pt-3 px-3"
              src="../assets/images/home-photograph3.jpg"
              height="351"
              alt="home photograph 3"
            />
            <div class="card-body">
              <h3 class="card-title">週歲寫真</h3>
              <p class="card-text">讓我們一起來迎接寶寶的第一個生日吧～</p>
              <RouterLink to="/photographs" class="stretched-link"></RouterLink>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>
  <section class="project">
    <div class="container pt-12 pb-16">
      <h2 class="index-title mb-6">攝影方案</h2>
      <ul class="list-unstyled row">
        <li class="col-md-10 col-lg-8 offset-lg-1 mb-6">
          <div class="card p-6 bg-light">
            <div class="row g-0">
              <div class="col-md-5 col-lg-4">
                <div class="card-img ratio ratio-1x1 mb-2 mb-md-0">
                  <img src="../assets/images/home-project1.jpg" alt="project 1" />
                </div>
              </div>
              <div class="col-md-7 col-lg-8">
                <div class="card-body d-flex flex-column align-items-start h-100 p-0 ms-md-4 ms-lg-8">
                  <span class="badge rounded-pill bg-white text-primary fs-base lh-base py-1 px-2 mb-1"
                    >A 方案
                  </span>
                  <h3 class="card-title mb-1">孕婦寫真 $8,800</h3>
                  <ol class="ps-4">
                    <li>孕婦寫真三套服裝</li>
                    <li>精修十張照片</li>
                    <li>全家福（大寶可入鏡）</li>
                    <li>贈全部電子檔</li>
                  </ol>
                  <RouterLink to="/" class="mt-auto ms-auto">
                    <span class="material-icons align-text-bottom me-1"> east </span>查看細節
                  </RouterLink>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li class="col-md-10 offset-md-2 col-lg-8 offset-lg-3 mb-6">
          <div class="card p-6 bg-secondary">
            <div class="row g-0">
              <div class="col-md-5 col-lg-4">
                <div class="card-img ratio ratio-1x1 mb-2 mb-md-0">
                  <img src="../assets/images/home-project2.jpg" alt="project 2" />
                </div>
              </div>
              <div class="col-md-7 col-lg-8">
                <div class="card-body d-flex flex-column align-items-start h-100 p-0 ms-md-4 ms-lg-8">
                  <span class="badge rounded-pill bg-white text-primary fs-base lh-base py-1 px-2 mb-1"
                    >B 方案
                  </span>
                  <h3 class="card-title mb-1">新生兒寫真 $10,800</h3>
                  <ol class="ps-4">
                    <li>寶貝寫真三至六套服裝</li>
                    <li>場景三種</li>
                    <li>全家福（大寶可入鏡）</li>
                    <li>6 × 8 - 12P 相本</li>
                    <li>贈全部電子檔</li>
                  </ol>
                  <RouterLink to="/" class="mt-auto ms-auto">
                    <span class="material-icons align-text-bottom me-1"> east </span>查看細節
                  </RouterLink>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li class="col-md-10 col-lg-8 offset-lg-1">
          <div class="card p-6 bg-light">
            <div class="row g-0">
              <div class="col-md-5 col-lg-4">
                <div class="card-img ratio ratio-1x1 mb-2 mb-md-0">
                  <img src="../assets/images/home-project3.jpg" alt="project 3" />
                </div>
              </div>
              <div class="col-md-7 col-lg-8">
                <div class="card-body d-flex flex-column align-items-start h-100 p-0 ms-md-4 ms-lg-8">
                  <span class="badge rounded-pill bg-white text-primary fs-base lh-base py-1 px-2 mb-1"
                    >C 方案
                  </span>
                  <h3 class="card-title mb-1">孕 + 新生兒寫真 $16,800</h3>
                  <ol class="ps-4">
                    <li>孕婦寫真三套服裝（含妝髮）</li>
                    <li>孕婦寫真精修十張照片</li>
                    <li>寶寶服裝六套</li>
                    <li>全家福</li>
                    <li>6 × 8 - 12P 相本</li>
                    <li>贈全部電子檔</li>
                  </ol>
                  <RouterLink to="/" class="mt-auto ms-auto">
                    <span class="material-icons align-text-bottom me-1"> east </span>查看細節
                  </RouterLink>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.banner {
  background: url(../assets/images/home-banner.jpg) no-repeat center / cover;
  height: 520px;
}

.about {
  &-images {
    > * {
      padding-right: calc(var(--bs-gutter-x) * 0.333333);
      padding-left: calc(var(--bs-gutter-x) * 0.333333);
    }
    @include media-breakpoint-up(lg) {
      > * {
        padding-right: calc(var(--bs-gutter-x) * 0.5);
        padding-left: calc(var(--bs-gutter-x) * 0.5);
      }
    }
  }
  &-image {
    box-shadow: 4px 4px 8px 0px #0000001a;
    height: 232px;
    @include media-breakpoint-up(lg) {
      height: 360px;
    }
  }
}

.index-title {
  position: relative;
  &::after {
    content: "";
    position: absolute;
    top: 18px;
    right: 0;
    display: block;
    height: 1px;
    width: calc(100% - 112px);
    background-color: $primary;
  }
}

</style>
