<template>
  <section class="banner d-flex align-items-center">
    <div class="container">
      <p>
        每個生命的誕生是如此珍貴與感恩，<br>
        用最真誠的心紀錄媽咪和寶貝的每一刻、每一秒、每一個瞬間。
      </p>
      <button class="btn btn-white text-white border border-white">前往預約</button>
    </div>
  </section>
  <section class="container home-about py-28">
    <div class="row justify-content-center">
      <div class="col-lg-4 d-flex flex-column justify-content-center">
        <p>2021 年 5 月，艾里制定全新工作室理念。</p>
        <p>理念為明確指示艾里的前進方向，確實明示艾里「愛你寶貝」之宣言為寶貝們紀錄攝影。</p>
        <div>
          <button class="btn btn-primary">查看更多</button>
        </div>
      </div>
      <div class="col-lg-6 d-flex gap-6">
        <img src="../assets/images/home-about1.jpg" alt="home about 1" />
        <img src="../assets/images/home-about2.jpg" alt="home about 2" />
        <img src="../assets/images/home-about3.jpg" alt="home about 3" />
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.banner {
  color: white;
  background: url(../assets/images/home-banner.jpg) no-repeat center / cover;
  height: 520px;
}
.home-about {
  img {
    object-fit: cover;
    border-radius: 5px;
    width: 33.3333%;
  }
}
</style>
