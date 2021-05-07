<template>
  <div class="w-screen h-screen tracking-wide">
    <div class="w-60 h-screen fixed left-0 bg-black z-20">
      <!-- Logo -->
      <div class="logo pt-6 ml-6">
        <img class="w-32" src="~/assets/logo/Spotify_White.png" alt="Spotify logo">
      </div>
      <!-- Menu element -->
      <div class="menu px-2 mt-7">
        <!-- Home -->
        <div class="acceuil text-white flex items-center bg-light pl-4 py-2 rounded">
          <svg viewBox="0 0 512 512" width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M448 463.746h-149.333v-149.333h-85.334v149.333h-149.333v-315.428l192-111.746 192 110.984v316.19z" fill="#fff"></path></svg>
          <p class="font-semibold ml-4 text-sm">
            Accueil
          </p>
        </div>
        <!-- Search -->
        <div class="rechercher text-white flex items-center pl-4 py-2 rounded opacity-70 hover:opacity-100">
          <svg viewBox="0 0 512 512" width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M349.714 347.937l93.714 109.969-16.254 13.969-93.969-109.969q-48.508 36.825-109.207 36.825-36.826 0-70.476-14.349t-57.905-38.603-38.603-57.905-14.349-70.476 14.349-70.476 38.603-57.905 57.905-38.603 70.476-14.349 70.476 14.349 57.905 38.603 38.603 57.905 14.349 70.476q0 37.841-14.73 71.619t-40.889 58.921zM224 377.397q43.428 0 80.254-21.461t58.286-58.286 21.461-80.254-21.461-80.254-58.286-58.285-80.254-21.46-80.254 21.46-58.285 58.285-21.46 80.254 21.46 80.254 58.285 58.286 80.254 21.461z" fill="#fff" fill-rule="#fff"></path></svg>
          <p class="font-semibold ml-4 text-sm">
            Rechercher
          </p>
        </div>
        <!-- Playlist -->
        <div class="bibliotheque text-white flex items-center pl-4 py-2 rounded opacity-70 hover:opacity-100">
          <svg viewBox="0 0 512 512" width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M291.301 81.778l166.349 373.587-19.301 8.635-166.349-373.587zM64 463.746v-384h21.334v384h-21.334zM192 463.746v-384h21.334v384h-21.334z" fill="#fff"></path></svg>
          <p class="font-semibold ml-4 text-sm">
            Bibliothèque
          </p>
        </div>
        <!-- add playlist -->
        <div class="create text-white flex items-center pl-4 py-2 rounded mt-6 opacity-70 hover:opacity-100">
          <div class="create-icon">
            <svg role="img" height="12" width="12" viewBox="0 0 16 16"><path d="M14 7H9V2H7v5H2v2h5v5h2V9h5z"></path><path fill="none" d="M0 0h16v16H0z"></path></svg>
          </div>
          <p class="font-semibold ml-4 text-sm">
            Créer une playlist
          </p>
        </div>
        <!-- fav song -->
        <div class="fav text-white flex items-center pl-4 py-2 rounded opacity-70 hover:opacity-100">
          <div class="fav-icon">
            <svg role="img" height="12" width="12" viewBox="0 0 16 16"><path fill="none" d="M0 0h16v16H0z"></path><path fill="#fff" d="M13.797 2.727a4.057 4.057 0 00-5.488-.253.558.558 0 01-.31.112.531.531 0 01-.311-.112 4.054 4.054 0 00-5.487.253c-.77.77-1.194 1.794-1.194 2.883s.424 2.113 1.168 2.855l4.462 5.223a1.791 1.791 0 002.726 0l4.435-5.195a4.052 4.052 0 001.195-2.883 4.057 4.057 0 00-1.196-2.883z"></path></svg>
          </div>
          <p class="font-semibold ml-4 text-sm">
            Titres likés
          </p>
        </div>
        <div class="line mt-2 w-10/12 h-px mx-auto bg-lightess opacity-30"></div>
        <!-- All playlist -->
        <div class="playlist">
          <p class="text-white font-normal text-sm opacity-70 hover:opacity-100 pt-4 ml-4">
            GIVEN Anime Sound...
          </p>
          <p class="text-white font-normal text-sm opacity-70 hover:opacity-100 pt-4 ml-4">
            Car Music 2021
          </p>
          <p class="text-white font-normal text-sm opacity-70 hover:opacity-100 pt-4 ml-4">
            Emotional Chill 2021
          </p>
          <p class="text-white font-normal text-sm opacity-70 hover:opacity-100 pt-4 ml-4">
            Lofi japan Japanese bea...
          </p>
          <p class="text-white font-normal text-sm opacity-70 hover:opacity-100 pt-4 ml-4">
            Love song
          </p>
          <p class="text-white font-normal text-sm opacity-70 hover:opacity-100 pt-4 ml-4">
            CAR MUSIC 2021
          </p>
          <p class="text-white font-normal text-sm opacity-70 hover:opacity-100 pt-4 ml-4">
            Playlist 1
          </p>
        </div>
        <!-- Last listen -->
        <div class="last w-60 mt-24 -ml-2">
          <div class="flex items-center ml-4">
            <svg role="img" height="20" width="20" viewBox="0 0 24 24"><path fill="#fff" d="M11.5 0C5.149 0 0 5.148 0 11.5 0 17.851 5.149 23 11.5 23S23 17.851 23 11.5C23 5.148 17.851 0 11.5 0zm0 22C5.71 22 1 17.29 1 11.5S5.71 1 11.5 1 22 5.71 22 11.5 17.29 22 11.5 22zm.499-6.842V5h-1v10.149l-3.418-3.975-.758.652 4.678 5.44 4.694-5.439-.757-.653-3.439 3.984z"></path></svg>
            <p class="font-semibold ml-2 text-white text-sm opacity-70 hover:opacity-100">
              Installer l'appli
            </p>
          </div>
          <img src="~/assets/images/last.jpeg" alt="SCH album" class="pt-4">
        </div>
      </div>
    </div>
    <!-- SONG PLAYLIST AND PODCAST -->
    <!-- ml-12 mr-72  -->
    <div class="fixed w-screen h-screen ml-60 bg-spoBlack">
      <div class="content">
        <!-- Searchbar, account, subscription button -->
        <div class="top-content h-80">
          <div class="header h-16 flex justify-between items-center">
            <div class="searchbar flex items-center ml-8 mr-72">
              <!-- Back button -->
              <div class="back mr-4 w-8 h-8 bg-dark rounded-full flex items-center justify-center">
                <svg role="img" focusable="false" height="24" width="24" viewBox="0 0 24 24"><polyline points="16 4 7 12 16 20" fill="none" stroke="#fff"></polyline></svg>
              </div>
              <!-- next button -->
              <div class="behind mr-5 w-8 h-8 bg-dark rounded-full flex items-center justify-center">
                <svg role="img" focusable="false" height="24" width="24" viewBox="0 0 24 24"><polyline points="8 4 17 12 8 20" fill="none" stroke="#fff"></polyline></svg>
              </div>
              <div class="bar relative">
                <input class="w-96 h-10 rounded-full" type="text" name="searchbar">
                <div class="absolute flex items-center top-2 left-3">
                  <svg
                  height="24"
                  width="24"
                  viewBox="0 0 512 512"
                  aria-hidden="true"><path d="M349.714 347.937l93.714 109.969-16.254 13.969-93.969-109.969q-48.508 36.825-109.207 36.825-36.826 0-70.476-14.349t-57.905-38.603-38.603-57.905-14.349-70.476 14.349-70.476 38.603-57.905 57.905-38.603 70.476-14.349 70.476 14.349 57.905 38.603 38.603 57.905 14.349 70.476q0 37.841-14.73 71.619t-40.889 58.921zM224 377.397q43.428 0 80.254-21.461t58.286-58.286 21.461-80.254-21.461-80.254-58.286-58.285-80.254-21.46-80.254 21.46-58.285 58.285-21.46 80.254 21.46 80.254 58.285 58.286 80.254 21.461z" fill="#fff"></path></svg>
                  <span class="ml-3 text-sm text-white">Rechercher</span>
                </div>
              </div>
            </div>
            <div class="account flex mr-72">
              <button class="bg-black text-white text-xs tracking-widest font-semibold border border-white rounded-full w-36 py-2 mr-8">
                S'ABONNER
              </button>
              <button class="flex justify-around items-center bg-black text-white text-xs tracking-widest font-semibold rounded-full w-32 py-1">
                <div class="user-icon bg-spoBlack p-1 rounded-full">
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 18 20" xmlns="http://www.w3.org/2000/svg"><path d="M15.216 13.717L12 11.869C11.823 11.768 11.772 11.607 11.757 11.521C11.742 11.435 11.737 11.267 11.869 11.111L13.18 9.57401C14.031 8.58001 14.5 7.31101 14.5 6.00001V5.50001C14.5 3.98501 13.866 2.52301 12.761 1.48601C11.64 0.435011 10.173 -0.0879888 8.636 0.0110112C5.756 0.198011 3.501 2.68401 3.501 5.67101V6.00001C3.501 7.31101 3.97 8.58001 4.82 9.57401L6.131 11.111C6.264 11.266 6.258 11.434 6.243 11.521C6.228 11.607 6.177 11.768 5.999 11.869L2.786 13.716C1.067 14.692 0 16.526 0 18.501V20H1V18.501C1 16.885 1.874 15.385 3.283 14.584L6.498 12.736C6.886 12.513 7.152 12.132 7.228 11.691C7.304 11.251 7.182 10.802 6.891 10.462L5.579 8.92501C4.883 8.11101 4.499 7.07201 4.499 6.00001V5.67101C4.499 3.21001 6.344 1.16201 8.699 1.00901C9.961 0.928011 11.159 1.35601 12.076 2.21501C12.994 3.07601 13.5 4.24301 13.5 5.50001V6.00001C13.5 7.07201 13.117 8.11101 12.42 8.92501L11.109 10.462C10.819 10.803 10.696 11.251 10.772 11.691C10.849 12.132 11.115 12.513 11.503 12.736L14.721 14.585C16.127 15.384 17.001 16.884 17.001 18.501V20H18.001V18.501C18 16.526 16.932 14.692 15.216 13.717Z"></path></svg>
                </div>
                dams9ix
                <svg role="img" height="16" width="16" viewBox="0 0 16 16"><path fill="#fff" d="M3 6l5 5.794L13 6z"></path></svg>
              </button>
            </div>
          </div>
          <!-- FIRST BLOCK OF CONTENT -->
          <div class="content-box-1 ml-8 mt-5">
            <h1 class="text-white text-3xl font-bold">Bon après-midi</h1>
            <div class="box-1-line-1 flex mt-6">
              <div class="box-1 flex items-center w-80 h-20 bg-spoGreen mr-8 rounded">
                <img src="~/assets/images/last.jpeg" alt="" class="w-20 rounded">
                <p class="text-white ml-4 font-semibold">Love song</p>
              </div>
              <div class="box-2 flex items-center w-80 h-20 bg-spoGreen mr-8 rounded">
                <img src="~/assets/images/last.jpeg" alt="" class="w-20 rounded">
                <p class="text-white ml-4 font-semibold">Love song</p>
              </div>
              <div class="box-3 flex items-center w-80 h-20 bg-spoGreen mr-8 rounded">
                <img src="~/assets/images/last.jpeg" alt="" class="w-20 rounded">
                <p class="text-white ml-4 font-semibold">Love song</p>
              </div>
              <div class="box-4 flex items-center w-80 h-20 bg-spoGreen mr-8 rounded">
                <img src="~/assets/images/last.jpeg" alt="" class="w-20 rounded">
                <p class="text-white ml-4 font-semibold">Love song</p>
              </div>
              <div class="box-5 flex items-center w-80 h-20 bg-spoGreen mr-8 rounded">
                <img src="~/assets/images/last.jpeg" alt="" class="w-20 rounded">
                <p class="text-white ml-4 font-semibold">Love song</p>
              </div>
            </div>
            <div class="box-1-line-2 flex mt-4">
              <div class="box-1 flex items-center w-80 h-20 bg-spoGreen mr-8 rounded">
                <img src="~/assets/images/last.jpeg" alt="" class="w-20 rounded">
                <p class="text-white ml-4 font-semibold">Top 50 : Mondial</p>
              </div>
              <div class="box-2 flex items-center w-80 h-20 bg-spoGreen mr-8 rounded">
                <img src="~/assets/images/last.jpeg" alt="" class="w-20 rounded">
                <p class="text-white ml-4 font-semibold">Love song</p>
              </div>
              <div class="box-3 flex items-center w-80 h-20 bg-spoGreen mr-8 rounded">
                <img src="~/assets/images/last.jpeg" alt="" class="w-20 rounded">
                <p class="text-white ml-4 font-semibold">Love song</p>
              </div>
              <div class="box-4 flex items-center w-80 h-20 bg-spoGreen mr-8 rounded">
                <img src="~/assets/images/last.jpeg" alt="" class="w-20 rounded">
                <p class="text-white ml-4 font-semibold">Love song</p>
              </div>
              <div class="box-5 flex items-center w-80 h-20 bg-spoGreen mr-8 rounded">
                <img src="~/assets/images/last.jpeg" alt="" class="w-20 rounded">
                <p class="text-white ml-4 font-semibold">Love song</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- BOTTOM CONTROLE PLAY -->
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
        <div class="time h-full w-3/4 ml-36 flex flex-col items-center justify-center">
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
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
h1 {
  color: #B3B3B3;
}

button {
  outline: none;
}

input {
  background: rgba(0, 0, 0, 0.507);
  outline: none;
}

.create-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 23px;
  height: 23px;
  background: white;
}

.fav .fav-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 23px;
  height: 23px;
  background: linear-gradient(135deg,#450af5,#c4efd9);
}

.next-prev-btn svg {
  width: 25px;
  height: 25px;
  margin: 6px 15px 0;
}

.play svg {
  width: 30px;
  height: 30px;
  margin-left: 7px;
}

.top-content {
  background-color: rgb(40, 152, 168);
  background-image: linear-gradient(rgba(0,0,0,.6) 0,#191414 100%);
}
</style>
