var store = {
    nextId: 1,
    cache: {},
    add: function(fn) {
        if (!fn.id) {
            fn.id = this.nextId.id++;
            this.cache[fn.id] = fn;
            return true;
        }
    }
}

function ninja() {}
