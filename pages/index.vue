<template>
  <div class="w-screen h-screen tracking-wide flex">
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
        <div class="menu-playlist overflow-scroll">
          <div class="playlist h-64 overflow-scroll">
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
          <div class="last absolute bottom-28 -ml-2">
            <div class="flex items-center ml-4">
              <svg role="img" height="20" width="20" viewBox="0 0 24 24"><path fill="#fff" d="M11.5 0C5.149 0 0 5.148 0 11.5 0 17.851 5.149 23 11.5 23S23 17.851 23 11.5C23 5.148 17.851 0 11.5 0zm0 22C5.71 22 1 17.29 1 11.5S5.71 1 11.5 1 22 5.71 22 11.5 17.29 22 11.5 22zm.499-6.842V5h-1v10.149l-3.418-3.975-.758.652 4.678 5.44 4.694-5.439-.757-.653-3.439 3.984z"></path></svg>
              <p class="font-semibold ml-2 text-white text-sm opacity-70 hover:opacity-100">
                Installer l'appli
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- SONG PLAYLIST AND PODCAST -->
    <!-- ml-12 mr-72  -->
    <div class="BASE_CONTENT fixed w-screen ml-60 bg-dark overflow-scroll">
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
              <div class="relative box box-1 flex items-center w-80 h-20 mr-8 rounded">
                <img src="~/assets/images/lovesong.jpeg" alt="" class="w-20 rounded">
                <p class="text-white ml-4 font-semibold">Love song</p>
                <button class="absolute bg-spoGreen p-3 rounded-full right-5 hidden">
                  <svg height="16" role="img" width="16" viewBox="0 0 24 24" aria-hidden="true"><polygon points="21.57 12 5.98 3 5.98 21 21.57 12" fill="white"></polygon></svg>
                </button>
              </div>
              <div class="relative box box-2 flex items-center w-80 h-20 mr-8 rounded">
                <img src="~/assets/images/playlist.jpeg" alt="" class="w-20 rounded">
                <p class="text-white ml-4 font-semibold">Playlist 1</p>
                <button class="absolute bg-spoGreen p-3 rounded-full right-5 hidden">
                  <svg height="16" role="img" width="16" viewBox="0 0 24 24" aria-hidden="true"><polygon points="21.57 12 5.98 3 5.98 21 21.57 12" fill="white"></polygon></svg>
                </button>
              </div>
              <div class="relative box box-3 flex items-center w-80 h-20 mr-8 rounded">
                <img src="~/assets/images/rock.jpeg" alt="" class="w-20 rounded">
                <p class="text-white ml-4 font-semibold">Rock japonais</p>
                <button class="absolute bg-spoGreen p-3 rounded-full right-5 hidden">
                  <svg height="16" role="img" width="16" viewBox="0 0 24 24" aria-hidden="true"><polygon points="21.57 12 5.98 3 5.98 21 21.57 12" fill="white"></polygon></svg>
                </button>
              </div>
              <div class="relative box box-4 flex items-center w-80 h-20 mr-8 rounded">
                <img src="~/assets/images/last.jpeg" alt="" class="w-20 rounded">
                <p class="text-white ml-4 font-semibold">SCH - JVLIVS II</p>
                <button class="absolute bg-spoGreen p-3 rounded-full right-5 hidden">
                  <svg height="16" role="img" width="16" viewBox="0 0 24 24" aria-hidden="true"><polygon points="21.57 12 5.98 3 5.98 21 21.57 12" fill="white"></polygon></svg>
                </button>
              </div>
              <div class="relative box box-5 flex items-center w-80 h-20 mr-8 rounded">
                <img src="~/assets/images/depress.jpeg" alt="" class="w-20 rounded">
                <p class="text-white ml-4 font-semibold">Alone & Depressed</p>
                <button class="absolute bg-spoGreen p-3 rounded-full right-5 hidden">
                  <svg height="16" role="img" width="16" viewBox="0 0 24 24" aria-hidden="true"><polygon points="21.57 12 5.98 3 5.98 21 21.57 12" fill="white"></polygon></svg>
                </button>
              </div>
            </div>
            <div class="box-1-line-2 flex mt-4">
              <div class="relative box box-1 flex items-center w-80 h-20 mr-8 rounded">
                <img src="~/assets/images/top.jpeg" alt="" class="w-20 rounded">
                <p class="text-white ml-4 font-semibold">Top 50 : Mondial</p>
                <button class="absolute bg-spoGreen p-3 rounded-full right-5 hidden">
                  <svg height="16" role="img" width="16" viewBox="0 0 24 24" aria-hidden="true"><polygon points="21.57 12 5.98 3 5.98 21 21.57 12" fill="white"></polygon></svg>
                </button>
              </div>
              <div class="relative box box-2 flex items-center w-80 h-20 mr-8 rounded">
                <img src="~/assets/images/pop.jpeg" alt="" class="w-20 rounded">
                <p class="text-white ml-4 font-semibold">Mix Pop</p>
                <button class="absolute bg-spoGreen p-3 rounded-full right-5 hidden">
                  <svg height="16" role="img" width="16" viewBox="0 0 24 24" aria-hidden="true"><polygon points="21.57 12 5.98 3 5.98 21 21.57 12" fill="white"></polygon></svg>
                </button>
              </div>
              <div class="relative box box-3 flex items-center w-80 h-20 mr-8 rounded">
                <img src="~/assets/images/hot.jpeg" alt="" class="w-20 rounded">
                <p class="text-white ml-4 font-semibold">Hot Sauce</p>
                <button class="absolute bg-spoGreen p-3 rounded-full right-5 hidden">
                  <svg height="16" role="img" width="16" viewBox="0 0 24 24" aria-hidden="true"><polygon points="21.57 12 5.98 3 5.98 21 21.57 12" fill="white"></polygon></svg>
                </button>
              </div>
              <div class="relative box box-4 flex items-center w-80 h-20 mr-8 rounded">
                <img src="~/assets/images/viral.jpeg" alt="" class="w-20 rounded">
                <p class="text-white ml-4 font-semibold">Viral Hits</p>
                <button class="absolute bg-spoGreen p-3 rounded-full right-5 hidden">
                  <svg height="16" role="img" width="16" viewBox="0 0 24 24" aria-hidden="true"><polygon points="21.57 12 5.98 3 5.98 21 21.57 12" fill="white"></polygon></svg>
                </button>
              </div>
              <div class="relative box box-5 flex items-center w-80 h-20 mr-8 rounded">
                <img src="~/assets/images/pink.jpeg" alt="" class="w-20 rounded">
                <p class="text-white ml-4 font-semibold">PINK PLANET</p>
                <button class="absolute bg-spoGreen p-3 rounded-full right-5 hidden">
                  <svg height="16" role="img" width="16" viewBox="0 0 24 24" aria-hidden="true"><polygon points="21.57 12 5.98 3 5.98 21 21.57 12" fill="white"></polygon></svg>
                </button>
              </div>
            </div>
          </div>
          <div class="content-box-2 ml-8 mt-5">
            <h1 class="text-white text-2xl font-bold mt-8">Écoutés récemment</h1>
            <div class="playlist-row flex mt-6">
              <div class="playlist-1 box-1 w-48 p-4 mr-8 bg-darkBlack rounded-md">
                <div class="image relative">
                  <img class="rounded-md" src="~/assets/images/hit.jpeg" alt="">
                  <button class="absolute bg-spoGreen p-3 rounded-full right-2 bottom-2 hidden">
                    <svg height="16" role="img" width="16" viewBox="0 0 24 24" aria-hidden="true"><polygon points="21.57 12 5.98 3 5.98 21 21.57 12" fill="white"></polygon></svg>
                  </button>
                </div>
                <p class="capitalize text-sm font-black text-white mt-6">It's Hits</p>
                <p class="text-lightess text-sm mt-1">Nous avons concocté une playlist...</p>
              </div>
              <div class="playlist-1 box-2 w-48 p-4 mr-8 bg-darkBlack rounded-md">
                <div class="image relative">
                  <img class="rounded-md" src="~/assets/images/capsule.jpeg" alt="">
                  <button class="absolute bg-spoGreen p-3 rounded-full right-2 bottom-2 hidden">
                    <svg height="16" role="img" width="16" viewBox="0 0 24 24" aria-hidden="true"><polygon points="21.57 12 5.98 3 5.98 21 21.57 12" fill="white"></polygon></svg>
                  </button>
                </div>
                <p class="capitalize text-sm font-black text-white mt-6">Votre capsule temp...</p>
                <p class="text-lightess text-sm mt-1">Nous avons concocté une playlist...</p>
              </div>
              <div class="playlist-1 box-3 w-48 p-4 mr-8 bg-darkBlack rounded-md">
                <div class="image relative">
                  <img class="rounded-md" src="~/assets/images/viral.jpeg" alt="">
                  <button class="absolute bg-spoGreen p-3 rounded-full right-2 bottom-2 hidden">
                    <svg height="16" role="img" width="16" viewBox="0 0 24 24" aria-hidden="true"><polygon points="21.57 12 5.98 3 5.98 21 21.57 12" fill="white"></polygon></svg>
                  </button>
                </div>
                <p class="capitalize text-sm font-black text-white mt-6">Viral Hits</p>
                <p class="text-lightess text-sm mt-1">Nous avons concocté une playlist...</p>
              </div>
              <div class="playlist-1 box-4 w-48 p-4 mr-8 bg-darkBlack rounded-md">
                <div class="image relative">
                  <img class="rounded-md" src="~/assets/images/last.jpeg" alt="">
                  <button class="absolute bg-spoGreen p-3 rounded-full right-2 bottom-2 hidden">
                    <svg height="16" role="img" width="16" viewBox="0 0 24 24" aria-hidden="true"><polygon points="21.57 12 5.98 3 5.98 21 21.57 12" fill="white"></polygon></svg>
                  </button>
                </div>
                <p class="capitalize text-sm font-black text-white mt-6">SCH - JVLIVS II</p>
                <p class="text-lightess text-sm mt-1">Inclus "Loup noir", "Marché noir",...</p>
              </div>
              <div class="playlist-1 box-5 w-48 p-4 mr-8 bg-darkBlack rounded-md">
                <div class="image relative">
                  <img class="rounded-md" src="~/assets/images/playlist.jpeg" alt="">
                  <button class="absolute bg-spoGreen p-3 rounded-full right-2 bottom-2 hidden">
                    <svg height="16" role="img" width="16" viewBox="0 0 24 24" aria-hidden="true"><polygon points="21.57 12 5.98 3 5.98 21 21.57 12" fill="white"></polygon></svg>
                  </button>
                </div>
                <p class="capitalize text-sm font-black text-white mt-6">Playlist 1</p>
                <p class="text-lightess text-sm mt-1">Par Dams9ix</p>
              </div>
              <div class="playlist-1 box-6 w-48 p-4 mr-8 bg-darkBlack rounded-md">
                <div class="image relative">
                  <img class="rounded-md" src="~/assets/images/soft.jpeg" alt="">
                  <button class="absolute bg-spoGreen p-3 rounded-full right-2 bottom-2 hidden">
                    <svg height="16" role="img" width="16" viewBox="0 0 24 24" aria-hidden="true"><polygon points="21.57 12 5.98 3 5.98 21 21.57 12" fill="white"></polygon></svg>
                  </button>
                </div>
                <p class="capitalize text-sm font-black text-white mt-6">Soft Pop Hits</p>
                <p class="text-lightess text-sm mt-1">Listening to easy song from your favorite...</p>
              </div>
              <div class="playlist-1 box-7 w-48 p-4 mr-8 bg-darkBlack rounded-md">
                <div class="image relative">
                  <img class="rounded-md" src="~/assets/images/schradio.jpeg" alt="">
                  <button class="absolute bg-spoGreen p-3 rounded-full right-2 bottom-2 hidden">
                    <svg height="16" role="img" width="16" viewBox="0 0 24 24" aria-hidden="true"><polygon points="21.57 12 5.98 3 5.98 21 21.57 12" fill="white"></polygon></svg>
                  </button>
                </div>
                <p class="capitalize text-sm font-black text-white mt-6">SCH Radio</p>
                <p class="text-lightess text-sm mt-1">Par Spotify</p>
              </div>
              <div class="playlist-1 box-8 w-48 p-4 mr-8 bg-darkBlack rounded-md">
                <div class="image relative">
                  <img class="rounded-md" src="~/assets/images/lsd.jpeg" alt="">
                  <button class="absolute bg-spoGreen p-3 rounded-full right-2 bottom-2 hidden">
                    <svg height="16" role="img" width="16" viewBox="0 0 24 24" aria-hidden="true"><polygon points="21.57 12 5.98 3 5.98 21 21.57 12" fill="white"></polygon></svg>
                  </button>
                </div>
                <p class="capitalize text-sm font-black text-white mt-6">LABRINTH, SIA & DI...</p>
                <p class="text-lightess text-sm mt-1">Sia, Diplo, Labrinth</p>
              </div>
            </div>
          </div>
          <!-- Create by -->
          <div class="content-box-3 ml-8 mt-5">
            <h1 class="text-white text-2xl font-bold mt-8">Crée pour Dams9ix</h1>
            <p class="text-lightess text-sm">Plus vous écoutez, plus les recommandations s'améliorent</p>
            <div class="playlist-row flex mt-6">
              <div class="playlist-1 box-1 w-48 p-4 mr-8 bg-darkBlack rounded-md">
                <div class="image relative">
                  <img class="rounded-md" src="~/assets/images/mix1.jpeg" alt="">
                  <button class="absolute bg-spoGreen p-3 rounded-full right-2 bottom-2 hidden">
                    <svg height="16" role="img" width="16" viewBox="0 0 24 24" aria-hidden="true"><polygon points="21.57 12 5.98 3 5.98 21 21.57 12" fill="white"></polygon></svg>
                  </button>
                </div>
                <p class="capitalize text-sm font-black text-white mt-6">Daily Mix 1</p>
                <p class="text-lightess text-sm mt-1">Imagine Dragons, Clean Bandit, Adele...</p>
              </div>
              <div class="playlist-1 box-2 w-48 p-4 mr-8 bg-darkBlack rounded-md">
                <div class="image relative">
                  <img class="rounded-md" src="~/assets/images/mix2.jpeg" alt="">
                  <button class="absolute bg-spoGreen p-3 rounded-full right-2 bottom-2 hidden">
                    <svg height="16" role="img" width="16" viewBox="0 0 24 24" aria-hidden="true"><polygon points="21.57 12 5.98 3 5.98 21 21.57 12" fill="white"></polygon></svg>
                  </button>
                </div>
                <p class="capitalize text-sm font-black text-white mt-6">Daily Mix 3</p>
                <p class="text-lightess text-sm mt-1">The Chainsmokers, Kane Brown,...</p>
              </div>
              <div class="playlist-1 box-3 w-48 p-4 mr-8 bg-darkBlack rounded-md">
                <div class="image relative">
                  <img class="rounded-md" src="~/assets/images/mix3.jpeg" alt="">
                  <button class="absolute bg-spoGreen p-3 rounded-full right-2 bottom-2 hidden">
                    <svg height="16" role="img" width="16" viewBox="0 0 24 24" aria-hidden="true"><polygon points="21.57 12 5.98 3 5.98 21 21.57 12" fill="white"></polygon></svg>
                  </button>
                </div>
                <p class="capitalize text-sm font-black text-white mt-6">Daily Mix 4</p>
                <p class="text-lightess text-sm mt-1">Calum Scott, Ali Gatie, Billie Eilish et bien plus</p>
              </div>
              <div class="playlist-1 box-4 w-48 p-4 mr-8 bg-darkBlack rounded-md">
                <div class="image relative">
                  <img class="rounded-md" src="~/assets/images/mix4.jpeg" alt="">
                  <button class="absolute bg-spoGreen p-3 rounded-full right-2 bottom-2 hidden">
                    <svg height="16" role="img" width="16" viewBox="0 0 24 24" aria-hidden="true"><polygon points="21.57 12 5.98 3 5.98 21 21.57 12" fill="white"></polygon></svg>
                  </button>
                </div>
                <p class="capitalize text-sm font-black text-white mt-6">Daily Mix 5</p>
                <p class="text-lightess text-sm mt-1">SCH, Natasha St-Pier, Tsew The Kid...</p>
              </div>
              <div class="playlist-1 box-5 w-48 p-4 mr-8 bg-darkBlack rounded-md">
                <div class="image relative">
                  <img class="rounded-md" src="~/assets/images/mix5.jpeg" alt="">
                  <button class="absolute bg-spoGreen p-3 rounded-full right-2 bottom-2 hidden">
                    <svg height="16" role="img" width="16" viewBox="0 0 24 24" aria-hidden="true"><polygon points="21.57 12 5.98 3 5.98 21 21.57 12" fill="white"></polygon></svg>
                  </button>
                </div>
                <p class="capitalize text-sm font-black text-white mt-6">Daily Mix 6</p>
                <p class="text-lightess text-sm mt-1">Babes Nueue, Rjukan, Naario Daharis...</p>
              </div>
              <div class="playlist-1 box-6 w-48 p-4 mr-8 bg-darkBlack rounded-md">
                <div class="image relative">
                  <img class="rounded-md" src="~/assets/images/radar.jpeg" alt="">
                  <button class="absolute bg-spoGreen p-3 rounded-full right-2 bottom-2 hidden">
                    <svg height="16" role="img" width="16" viewBox="0 0 24 24" aria-hidden="true"><polygon points="21.57 12 5.98 3 5.98 21 21.57 12" fill="white"></polygon></svg>
                  </button>
                </div>
                <p class="capitalize text-sm font-black text-white mt-6">Radar des sorties</p>
                <p class="text-lightess text-sm mt-1">Découvrez l'actu musicale de vos artist...</p>
              </div>
              <div class="playlist-1 box-7 w-48 p-4 mr-8 bg-darkBlack rounded-md">
                <div class="image relative">
                  <img class="rounded-md" src="~/assets/images/discover.jpeg" alt="">
                  <button class="absolute bg-spoGreen p-3 rounded-full right-2 bottom-2 hidden">
                    <svg height="16" role="img" width="16" viewBox="0 0 24 24" aria-hidden="true"><polygon points="21.57 12 5.98 3 5.98 21 21.57 12" fill="white"></polygon></svg>
                  </button>
                </div>
                <p class="capitalize text-sm font-black text-white mt-6">Découvertes de la s...</p>
                <p class="text-lightess text-sm mt-1">Votre compil hebdo d'inédits.</p>
              </div>
              <div class="playlist-1 box-8 w-48 p-4 mr-8 bg-darkBlack rounded-md">
                <div class="image relative">
                  <img class="rounded-md" src="~/assets/images/family.png" alt="">
                  <button class="absolute bg-spoGreen p-3 rounded-full right-2 bottom-2 hidden">
                    <svg height="16" role="img" width="16" viewBox="0 0 24 24" aria-hidden="true"><polygon points="21.57 12 5.98 3 5.98 21 21.57 12" fill="white"></polygon></svg>
                  </button>
                </div>
                <p class="capitalize text-sm font-black text-white mt-6">Family Mix</p>
                <p class="text-lightess text-sm mt-1">Découvrez le Mix Famille</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- BOTTOM CONTROLE PLAY -->
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

.BASE_CONTENT {
  height: 100vh;
}

/* .menu-playlist {
  height: 600px;
} */

.content-box-3 {
  padding-bottom: 150px;
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
  background-image: linear-gradient(rgba(0,0,0,.6) 0, #121212 100%);
}

.box {
  background: #b3b3b32a;
  transition: .5s ease-in-out;
}

.box button {
  transition: .5s ease-in-out;
}

.box:hover {
  background: #b3b3b33f;
}

.box:hover button {
  display: block;
  transition: .5s ease-in-out;
  box-shadow: 0 10px 15px -5px rgba(0, 0, 0, 0.5);
}

.playlist-1 {
  height: 17.5rem;
}

.playlist-1 .image:hover button {
  display: block;
  transition: .5s ease-in-out;
  box-shadow: 0 10px 15px -5px rgba(0, 0, 0, 0.5);
}

@media (max-width: 2040px) {
  .content-box-1 .box-5 {
    display: none;
  }

  .content-box-2 .box-8 {
    display: none;
  }

  .content-box-3 .box-8 {
    display: none;
  }
}

@media (max-width: 1800px) {
  .content-box-2 .box-7 {
    display: none;
  }

  .content-box-3 .box-7 {
    display: none;
  }
}

@media (max-width: 1800px) {
  .content-box-1 .box-4 {
    display: none;
  }
}

@media (max-width: 1590px) {
  .content-box-2 .box-6 {
    display: none;
  }

  .content-box-3 .box-6 {
    display: none;
  }
}

@media (max-width: 1355px) {
  .content-box-2 .box-5 {
    display: none;
  }

  .content-box-3 .box-5 {
    display: none;
  }
}

@media (max-width: 1300px) {
  .content-box-1 .box-3 {
    display: none;
  }
}

@media (max-width: 1145px) {
  .content-box-2 .box-4 {
    display: none;
  }

  .content-box-3 .box-4 {
    display: none;
  }
}
</style>
