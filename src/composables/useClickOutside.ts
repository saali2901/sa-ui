import { type Ref, onMounted, onUnmounted } from "vue";

/**
 * Composable that detects clicks outside of a target element.
 * Calls the provided callback when a click occurs outside.
 */
export function useClickOutside(
  target: Ref<HTMLElement | null>,
  callback: () => void,
) {
  const handleClick = (event: MouseEvent) => {
    if (target.value && !target.value.contains(event.target as Node)) {
      callback();
    }
  };

  onMounted(() => {
    document.addEventListener("click", handleClick, true);
  });

  onUnmounted(() => {
    document.removeEventListener("click", handleClick, true);
  });
}
