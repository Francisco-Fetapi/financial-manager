interface Props {
  key: string;
  state: object;
}

export default function useStatePersist({ key, state }: Props) {
  function save() {
    localStorage.setItem(key, JSON.stringify(state));
  }
  function get() {
    return JSON.parse(localStorage.getItem(key) || "false");
  }

  return [save, get];
}
