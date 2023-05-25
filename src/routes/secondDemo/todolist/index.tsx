import { component$, useSignal } from '@builder.io/qwik';
import {
  type DocumentHead,
  routeLoader$,
  routeAction$,
  zod$,
  z,
  
} from '@builder.io/qwik-city';
import { Song } from '~/components/starter/song/song';

interface ListItem {
  text: string;
}

export const list: ListItem[] = [];

export const useListLoader = routeLoader$(() => {
  return list;
});

export const useAddToListAction = routeAction$(
  (item) => {
    list.push(item);
    return {
      success: true,
    };
  },
  zod$({
    text: z.string().trim().min(1),
  })
);

export default component$(() => {
  const isList = useSignal(false)

  return (
    <>
      <div class={'flex items-center justify-center my-8'}>
        <button 
          class={[
            'rounded-lg bg-amber-400 bg-opacity-80 cursor-pointer transition-all ease-in-out duration-500', 
            isList.value ? '' : 'text-5xl'
          ]}
          onClick$={()=>isList.value = !isList.value}
        >
          Get Play List 
        </button>
      </div>
      {isList.value ? <Song /> : '' }
    </>
  );
});

export const head: DocumentHead = {
  title: 'Qwik Song Play List',
};
