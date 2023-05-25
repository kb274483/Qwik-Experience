import { component$ } from '@builder.io/qwik';
import { useServerTimeLoader } from '~/routes/layout';
import styles from './footer.module.css';

export default component$(() => {
  const serverTime = useServerTimeLoader();

  return (
    <footer class={'w-full bg-slate-400 absulote bottom-0 py-3 left-0'}>
      <a href="https://www.builder.io/" target="_blank" class={styles.anchor}>
        Made with ♡ by Builder.io
        <span class={styles.spacer}>|</span>
        <span>{serverTime.value.date}</span>
      </a>
    </footer>
  );
});
