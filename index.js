function frame(elem, dir, tFunc) {
    if (dir === 3 /* Direction.BOTTOM */) {
        console.log(tFunc);
    }
}
frame("id", 3 /* Direction.BOTTOM */, 10 /* TimingFunc.ERROR */);
