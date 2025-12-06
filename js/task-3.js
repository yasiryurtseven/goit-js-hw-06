class StringBuilder{
  #value;

  constructor(initialValue){
    this.#value = [];
  }

  getValue(){
    return this.#value;
  }

  padEnd(str){
    this.#value.push(str);
  }

  padStart(str){
    this.#value.unshift(str);
  }

  padBoth(str){
    this.#value = this.#value = [str, ...arr, str]  }


}


const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="
