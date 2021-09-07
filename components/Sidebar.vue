<template>
  <div class="sidebar w-[320px] absolute top-0 right-0 h-screen px-4 hidden">
    <div class="pt-28">
      <div class="tracking-widest text-lg border-b border-[#DADCE4] py-3">
        <h3>Prayer Times in</h3>
        <h1 class="text-2xl font-bold uppercase text-bismillah-blue-950 ">
          Dhaka
        </h1>
        <p>7 July, 2021</p>
        <p class="font-bold">25 Dhul Qadah, 1442</p>
      </div>

      <div class="py-3">
        <p class="text-base">In other cities of</p>
        <h1 class="text-2xl font-bold">Bangladesh</h1>

        <div class="mt-4 space-y-4 ">
          <div>
            <p class="text-base">Barisal</p>
            <p class="text-base">Barisal Division</p>
          </div>

          <div>
            <p class="text-base">Chittagong</p>
            <p class="text-base">Chittagong Division</p>
          </div>

          <div>
            <p class="text-base">Chittagong</p>
            <p class="text-base">Chittagong Division</p>
          </div>
        </div>

        <button
          class="px-4 py-2 mt-12 text-white rounded button-bg focus:outline-none"
        >
          View All Cities
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [],
};
</script>

<style scoped>
.sidebar {
  background: linear-gradient(180deg, #f4f8fd 0%, #fdfeff 61.94%, #ffffff 100%);
}

.button-bg {
  background: linear-gradient(
    132.28deg,
    #00acce -76.45%,
    #0dbbe5 53.97%,
    #09a5da 184.18%
  );
}
</style>
