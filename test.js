const p = {};

let name = 100;

Object.defineProperty(p, 'name', {
    get: () => {
        console.log(this)
        return name;
    }, set: (value) => {
        console.log(this)
        this.name = value;
    }
})


console.log(p.name);
console.log(p.name);
console.log(p)