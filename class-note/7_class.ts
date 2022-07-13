class PersonClass {
  private name: string; // 이 class 내에서만 읽을 수 있음
  public age: number;
  readonly log: string; // 접근만 가능

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
