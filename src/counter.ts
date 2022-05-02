class Counter {
  constructor(private count: number) {}

  public up() {
    this.count += 1;
    return this.count;
  }

  public down() {
    this.count -= 1;
    return this.count;
  }
}

export { Counter };
