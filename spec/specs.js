describe('scrabble', function(){
  it('returns 1 for a', function(){
    scrabble("a").should.equal(1);
  });
  it('returns 2 for d', function() {
    scrabble('d').should.equal(2);
  });
  it('returns 3 for ad', function() {
    scrabble('ad').should.equal(3);
  });
  it('returns a 3 for a c', function() {
    scrabble("c").should.equal(3);
  });
  it('returns 4 for a word with v', function(){
    scrabble("v").should.equal(4);
  });
  it('returns 5 for a word with k', function(){
    scrabble("k").should.equal(5);
  });
   it('returns 8 for a word with x', function(){
    scrabble("x").should.equal(8);
  });
  it('returns 10 for a word with z', function(){
    scrabble("z").should.equal(10);
  });
  it('returns 43 for "adbfkjqq"', function(){
    scrabble("adbfkjqq").should.equal(43);
  });
});

describe('onePoint', function(){
  it('returns 1 for a', function(){
    onePoint("a").should.equal(1);
  });
  it('returns 2 for ae', function(){
    onePoint("ae").should.equal(2);
  });
});

describe('twoPoint', function(){
  it('returns 2 for a word with a d', function(){
    twoPoint("ada").should.equal(2);
  });
  it('returns 4 for a word with a d and a g', function(){
    twoPoint("dog").should.equal(4);
  });
});

describe('threePoint', function(){
  it('returns 3 for a word with a b', function(){
    threePoint("aba").should.equal(3);
  });
});


describe('fourPoint', function(){
  it('returns 4 for a word with v', function(){
    fourPoint("v").should.equal(4);
  });
});


describe('fivePoint', function(){
  it('returns 5 for a word with k', function(){
    fivePoint("k").should.equal(5);
  });
});

describe('eightPoint', function(){
  it('returns 8 for a word with x', function(){
    eightPoint("x").should.equal(8);
  });
});

describe('tenPoint', function(){
  it('returns 10 for a word with z', function(){
    tenPoint("z").should.equal(10);
  });
});
