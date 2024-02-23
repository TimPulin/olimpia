<template>
  <div class="header">
    <div class="grid-base">
      <div class="info">
        <div class="user">Anton</div>
        <div class="scores-wrapper">
          <span class="scores">1000</span>
          <img
            src="@img/coin.png"
            alt="sigh on coin"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header {
  padding-top: 30px;
}
.info {
  grid-column: 11 / span 2;
  justify-self: end;
}
.user {
  margin-bottom: 10px;
}
.scores-wrapper {
  display: flex;
  align-items: end;
  column-gap: 3px;
}
</style>
