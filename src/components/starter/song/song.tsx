import { Resource, component$, useResource$, useSignal,  } from '@builder.io/qwik';

export interface SongList{
  YTLink:string,
  singer:string,
  song:string,
  url:string
}

export const Song =  component$(() => {
  
  const songResult = useResource$<SongList[]>(async ()=>{
    const result = await fetch('https://kb274483-practice-flaskapp.herokuapp.com/songAPI')
    return result.json()
  })
  const songUrl = useSignal("")
  const playStatus = useSignal(false)
  const playWhichSong = useSignal("")

  return (
    <>
      <Resource value={songResult} 
        onPending={()=>
          <div class={'flex justify-center items-center p-4 my-4'}>
            <div class="w-6 h-6 bg-gray-500 rounded-full animate-ping mx-8"></div>
          </div>
        }
        onRejected={()=><span> error... </span>}
        onResolved={(list)=>
          <>
            <ul class={'p-0 mb-8'}> 
              {Object.values(list).map((item)=>
                <li class={'border border-gray-600 my-2 p-2 rounded-lg w-1/2 mx-auto'} key={item.song}>
                  <span class={'block font-medium'}>Song Name： {item.song}</span>
                  <span class={'block mb-4 font-medium'}>Singer：{item.singer}</span>
                  <div class={'h-10 w-10 cursor-pointer'}
                    onClick$={()=>{
                      const player = document.getElementById('audioPlayer') as HTMLAudioElement
                      if(playStatus.value && playWhichSong.value === item.song){
                        player?.pause()
                        playStatus.value = false
                        playWhichSong.value = ""
                      }else{
                        songUrl.value = item.url
                        player?.addEventListener('canplaythrough', () => {
                          playWhichSong.value = item.song
                          playStatus.value = true
                          player.play()
                        })
                      }
                    }}
                  >
                    {playStatus.value && item.song === playWhichSong.value ? 
                      <svg class={'h-full'}
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                        <path d="M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 0c-26.5 0-48 21.5-48 48V400c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H240z"/>
                      </svg> :
                      <svg class={'h-full'}
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                        <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                      </svg> 
                    }
                  </div>
                  <a href={item.YTLink} class={'block font-black text-rose-300'}>Youtube</a>
                </li>
              )}
            </ul>
            <audio src={songUrl.value} id='audioPlayer'></audio>
          </>
        }
      />
    </>
  );
});
