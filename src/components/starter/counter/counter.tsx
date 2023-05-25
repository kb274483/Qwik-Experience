import { component$, useSignal, useStylesScoped$, useComputed$ } from '@builder.io/qwik';
import styles from './counter.css?inline';

export default component$(() => {
  useStylesScoped$(styles);
  const count = useSignal(20);
  const showCount = useComputed$(() => {
    return count.value;
  });

  return (
    <div class="counter-wrapper">
      <button onClick$={() => count.value--}>-</button>
      <span class={`counter-value ${count.value % 2 === 0 ? 'odd' : 'new'}`}>{count.value}</span>
      <div>{showCount.value}</div>
      <button onClick$={() => count.value++}>+</button>
    </div>
  );
});
