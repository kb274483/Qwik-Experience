import { component$, useSignal, useTask$ } from '@builder.io/qwik';
// import styles from './hero.module.css';
import { ShowText } from './showText';
export default component$(() => {
  const wel = "Welcome to qwik App"
  const list = useSignal(['a','b','c','d','e','f','g'])
  const porpColor = useSignal('text-gray-600')
  const inputVal = useSignal("")
  useTask$(({track})=>{
    track(()=>{inputVal.value})
    if(inputVal.value.indexOf('hello') != -1){
      porpColor.value = 'text-red-400'
      list.value = list.value.reverse()
      console.log(list.value)
    }else{
      porpColor.value = 'text-gray-600'
    }
  })
  
  return (
    <div>
      <h1 
        class={'text-red-500 font-bold'} 
        onClick$={()=>{
            console.log("PPPPPPRRRRINT")
          }
        }
      >
        {wel}
      </h1>
      <input class={'border-blue-400 rounded-lg text-black px-2'} onInput$={(event)=>{
        inputVal.value = (event.target as HTMLInputElement).value
      }} />
      <ShowText msg={inputVal.value} color={porpColor.value}>
        You type : 
      </ShowText>
      {/* <ul>
        {list.value.map((item, index) => (
          <li key={item}>{item}{index+1}</li>
        ))}
      </ul> */}
      {/* <button
        onClick$={async () => {
          const defaults = {
            spread: 360,
            ticks: 70,
            gravity: 0,
            decay: 0.95,
            startVelocity: 30,
            colors: ['006ce9', 'ac7ff4', '18b6f6', '713fc2', 'ffffff'],
            origin: {
              x: 0.5,
              y: 0.245,
            },
          };

          function loadConfetti() {
            return new Promise<(opts: any) => void>((resolve, reject) => {
              if ((globalThis as any).confetti) {
                return resolve((globalThis as any).confetti as any);
              }
              const script = document.createElement('script');
              script.src =
                'https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js';
              script.onload = () => resolve((globalThis as any).confetti as any);
              script.onerror = reject;
              document.head.appendChild(script);
              script.remove();
            });
          }

          const confetti = await loadConfetti();

          function shoot() {
            confetti({
              ...defaults,
              particleCount: 80,
              scalar: 1.2,
            });

            confetti({
              ...defaults,
              particleCount: 60,
              scalar: 0.75,
            });
          }

          setTimeout(shoot, 0);
          setTimeout(shoot, 100);
          setTimeout(shoot, 200);
          setTimeout(shoot, 300);
          setTimeout(shoot, 400);
        }}
      >
        Time to celebrate 🎉
      </button>  */}
    </div>
  );
});
