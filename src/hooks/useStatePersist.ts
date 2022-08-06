export default function useStatePersist<T extends object>(key: string) {
  function save(state: T) {
    localStorage.setItem(key, JSON.stringify(state));
  }
  function get(): T {
    return JSON.parse(localStorage.getItem(key) || "false");
  }

  return { save, get };
}
