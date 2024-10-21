const audio = document.getElementById ('audio')
const play = document.getElementById ('play')
const pause = document.getElementById ('pause')
const forward = document.getElementById ('forward')
const rewind = document.getElementById ('rewind')
const stop = document.getElementById ('stop')



const playList = [
    {
      title: 'La foto de los 2',
      artist: 'El andariego',
      img: './image/andariego.jpg',
      song: './music/El Andariego - La Foto De Los Dos (Audio Oficial)  Música Popular.mp3'
    },
    {
      title: 'Tuyo',
      artist: 'Romeo Santos',
      img: './image/tuyo.jpg',
      song: './music/Romeo Santos - Tuyo (Audio).mp3'
    },
    {
      title: 'Así no',
      artist: 'Sono Lux',
      img: './image/asi_no.jpg',
      song: './music/Sono-Lux - Asi No.mp3'
    },
    {
      title: 'Soltera',
      artist: 'Blessd y Westcol',
      img: './image/soltera.jpg',
      song: './music/W Sound 01 Soltera - Blessd, Westcol, Ovy On The Drums.mp3'
    },
    {
      title: 'Las 12',
      artist: 'Kevin Roldan',
      img: './image/las_12.jpg',
      song: './music/Kevin Roldan ft Mackie - Las 12 (Official Audio).mp3'
    },
  ]            


play.addEventListener (`click` , () => audio.play)

pause.addEventListener (`click` , () => audio.pause)

rewind.addEventListener (`click` , () => audio.currentTime -= 10)

forward.addEventListener (`click` , () => audio.currentTime += 10)

stop.addEventListener (`click` , () => {
    audio.pause()
    audio.currentTime = 0
})