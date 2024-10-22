const playlist = [
    {
      title: 'La foto de los 2',
      artist: 'El andariego',
      img: './image/andariego.jpg',
      song: './music/la_foto_de_los_2.mp3'
    },
    {
      title: 'Tuyo',
      artist: 'Romeo Santos',
      img: './image/tuyo.jpg',
      song: './music/Tuyo.mp3'
    },
    {
      title: 'Así no',
      artist: 'Sono Lux',
      img: './image/asi_no.jpg',
      song: './music/Asi_No.mp3'
    },
    {
      title: 'Soltera',
      artist: 'Blessd y Westcol',
      img: './image/soltera.jpg',
      song: './music/soltera.mp3'
    },
    {
      title: 'Las 12',
      artist: 'Kevin Roldan',
      img: './image/las_12.jpg',
      song: './music/Las_12.mp3'
    },
  ]            



  let indiceActual = 0;

  const audio = document.getElementById('audio');
  const play = document.getElementById('play');
  const pause = document.getElementById('pause');
  const former = document.getElementById('former')
  const forward = document.getElementById('forward');
  const rewind = document.getElementById('rewind');
  const following = document.getElementById('following')
  const stop = document.getElementById('stop');
  const audioSource = document.getElementById("audioSource");
  const songName = document.getElementById("songName");
  const imagen = document.getElementById("img")
  const artist = document.getElementById('artist')
  
  // Load the first song
  cargarCancion(indiceActual);
  
  // load a song
  function cargarCancion(indice) {
    songName.textContent = playlist[indice].title;
    artist.textContent = playlist[indice].artist;
    imagen.src = playlist[indice].img;
    audioSource.src = playlist[indice].song;
    audio.load();
  }
  
  play.addEventListener('click', () => audio.play());
  
  pause.addEventListener('click', () => audio.pause());
  
  rewind.addEventListener('click', () => audio.currentTime = Math.max(0, audio.currentTime - 10));
  
  forward.addEventListener('click', () => audio.currentTime += 10);
  
  stop.addEventListener('click', () => {
    audio.pause();
    audio.currentTime = 0;
  });
  
  // Change the next song
  following.addEventListener('click', () => {
    indiceActual = (indiceActual + 1) % playlist.length; // change index
    cargarCancion(indiceActual);
    audio.play();
  })
  
  // back next song
  former.addEventListener('click', () => {
    indiceActual = (indiceActual - 1 + playlist.length) % playlist.length;
    cargarCancion(indiceActual); // load the next song
    audio.play();
  })
  
  // Change the song later to finish
  audio.addEventListener('ended', () => {
    indiceActual = (indiceActual + 1) % playlist.length;
    cargarCancion(indiceActual);
    audio.play();
  });