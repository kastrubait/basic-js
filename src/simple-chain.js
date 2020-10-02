const chainMaker = {
  arraySimpleChain: [],

  getLength() {
    return this.arraySimpleChain.length;
  },
  addLink(value) {
    (value === undefined) ? this.arraySimpleChain.push(`( )` ) : this.arraySimpleChain.push(`( ${value} )`)
    return this;
  },
  removeLink(position) {
    if (typeof position === 'number' && position % 1 === 0 && position > 0 && position < this.arraySimpleChain.length) {
      this.arraySimpleChain.splice(position - 1, 1);
      return this;
    }else {
      this.arraySimpleChain =[];
      throw new Error();
    }
  },
  reverseChain() {
    this.arraySimpleChain.reverse();
    return this;
  },
  finishChain() {
    const result = [...this.arraySimpleChain].join('~~');
    this.arraySimpleChain = []
    return result
  }
};

module.exports = chainMaker;
