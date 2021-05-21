<template>
  <div>
    <div class="fixed bottom-0 w-screen h-24 bg-dark z-30 flex">
      <div class="current-play w-60 h-full flex items-center">
        <div class="current-play--title ml-4 text-white">
          <h3 class="text-sm">
            Marché noir
          </h3>
          <span class="text-xs font-light">
            SCH
          </span>
        </div>
        <div class="like-add flex items-center">
          <div class="like ml-5">
            <svg role="img" height="16" width="16" viewBox="0 0 16 16"><path fill="#fff" d="M13.764 2.727a4.057 4.057 0 00-5.488-.253.558.558 0 01-.31.112.531.531 0 01-.311-.112 4.054 4.054 0 00-5.487.253A4.05 4.05 0 00.974 5.61c0 1.089.424 2.113 1.168 2.855l4.462 5.223a1.791 1.791 0 002.726 0l4.435-5.195A4.052 4.052 0 0014.96 5.61a4.057 4.057 0 00-1.196-2.883zm-.722 5.098L8.58 13.048c-.307.36-.921.36-1.228 0L2.864 7.797a3.072 3.072 0 01-.905-2.187c0-.826.321-1.603.905-2.187a3.091 3.091 0 012.191-.913 3.05 3.05 0 011.957.709c.041.036.408.351.954.351.531 0 .906-.31.94-.34a3.075 3.075 0 014.161.192 3.1 3.1 0 01-.025 4.403z"></path></svg>
          </div>
          <div class="add ml-5">
            <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="#fff" fill-rule="evenodd"><path d="M1 3v9h14V3H1zm0-1h14a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z" fill-rule="nonzero"></path><path d="M10 8h4v3h-4z"></path></g></svg>
          </div>
        </div>
      </div>
      <!-- Player time -->
      <div class="player-time w-full">
        <div class="time h-full w-3/4 ml-56 flex flex-col items-center justify-center">
          <div class="next-prev-btn h-12 flex items-center">
            <!-- aleatoire -->
            <svg role="img" height="24" width="24" viewBox="0 0 24 24"><path fill="#fff" d="M4.5 6.8l.7-.8C4.1 4.7 2.5 4 .9 4v1c1.3 0 2.6.6 3.5 1.6l.1.2zm7.5 4.7c-1.2 0-2.3-.5-3.2-1.3l-.6.8c1 1 2.4 1.5 3.8 1.5V14l3.5-2-3.5-2v1.5zm0-6V7l3.5-2L12 3v1.5c-1.6 0-3.2.7-4.2 2l-3.4 3.9c-.9 1-2.2 1.6-3.5 1.6v1c1.6 0 3.2-.7 4.2-2l3.4-3.9c.9-1 2.2-1.6 3.5-1.6z"></path></svg>
            <!-- prev btn -->
            <svg role="img" height="24" width="24" viewBox="0 0 24 24"><path fill="#fff" d="M13 2.5L5 7.119V3H3v10h2V8.881l8 4.619z"></path></svg>
            <!-- play pause -->
            <div class="play w-8 h-8 bg-white rounded-full">
              <svg role="img" height="24" width="24" viewBox="0 0 24 24"><path fill="#000" d="M4.018 14L14.41 8 4.018 2z"></path></svg>
            </div>
            <!-- next btn -->
            <svg role="img" height="24" width="24" viewBox="0 0 24 24"><path fill="#fff" d="M11 3v4.119L3 2.5v11l8-4.619V13h2V3z"></path></svg>
            <!-- loop -->
            <svg role="img" height="24" width="24" viewBox="0 0 24 24"><path fill="#191414" d="M0 0h16v16H0z"></path><path fill="#1DB954" d="M5 5v-.5V4c-2.2.3-4 2.2-4 4.5 0 .6.1 1.2.4 1.8l.9-.5C2.1 9.4 2 9 2 8.5 2 6.7 3.3 5.3 5 5zM10.5 12H6v-1.5l-3.5 2 3.5 2V13h4.5c1.9 0 3.5-1.2 4.2-2.8-.5.3-1 .5-1.5.6-.7.7-1.6 1.2-2.7 1.2zM11.5 0C9 0 7 2 7 4.5S9 9 11.5 9 16 7 16 4.5 14 0 11.5 0zm.9 7h-1.3V3.6H10v-1h.1c.2 0 .3 0 .4-.1.1 0 .3-.1.4-.2.1-.1.2-.2.2-.3.1-.1.1-.2.1-.3v-.1h1.1V7z"></path></svg>
          </div>
          <div class="player-progress w-full flex justify-center items-center">
            <span class="player-current-time text-lightess text-xs">
              0:00
            </span>
            <div class="progress-bar w-2/4 h-1 bg-light rounded mx-2"></div>
            <span class="player-end-time text-lightess text-xs">
              3:31
            </span>
          </div>
        </div>
        <div class="volume bg-lightess w-1/4 h-full"></div>
      </div>
      <div class="player-controle bg-red-600 w-80"></div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
@media (max-width: 1350px) {
  .player-time .time {
    margin-left: 10rem;
  }
}

@media (max-width: 1145px) {
  .player-time .time {
    margin-left: 5rem;
  }
}
</style>
