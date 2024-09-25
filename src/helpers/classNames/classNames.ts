type Mods = Record<string, string | boolean>;

// Утилита для упрощения передачи стилей в компонент
export function classNames(
  cls: string,
  mods: Mods,
  additional: string[]
): string {
  return [
    cls,
    ...additional,
    Object.entries(mods)
      .filter(([className, value]) => Boolean(value))
      .map(([classNames]) => classNames),
  ].join(" ");
}
