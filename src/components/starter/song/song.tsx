import { Resource, component$, useResource$,  } from '@builder.io/qwik';

export interface SongList{
  YTLink:string,
  singer:string,
  song:string,
  url:string
}
export interface golangMsg{
  msg:string,
  title:string,
}

export const Song =  component$(() => {
  
  const songResult = useResource$<SongList[]>(async ()=>{
    const result = await fetch('https://kb274483-practice-flaskapp.herokuapp.com/songAPI')
    return result.json()
  })

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
          <ul class={'p-0 mb-8'}> 
            {Object.values(list).map((item)=>
              <li class={'border border-gray-600 my-2 p-2 rounded-lg'} key={item.song}>
                <span class={'block'}>{item.singer}</span>
                <span class={'block'}>{item.song}</span>
                <audio src={item.url} controls></audio>
                <a href={item.YTLink} class={'block'}>Youtube</a>
              </li>
            )}
          </ul>
        }
      />
    </>
  );
});
