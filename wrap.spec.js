const { expect } = require('chai');
const wrap = require('./wrap');

describe('wrap', ()=>{

  const input1 = "bfkabdnfkabfkjabdfka"
  const input2 = "dannna2ddhh dhhhja  shdkjahsdka jhsd k ajh dakj shdkajshd  i82"
  const input3 = "22342"


  it('returns an empty sting if input is empty', ()=>{
    expect(wrap('')).to.equal('')
  })
  it('returns a string', ()=>{

    expect(typeof wrap(input1).to.equal(String))
    expect(typeof wrap(input2).to.equal(String))
    expect(typeof wrap(input3).to.equal(String))
  })
  it('returns lines =< 20 characters long', ()=>{
    const textArray = wrap(input2).split('\n');

    textArray.map((currentLine)=>{
      expect(currentLine.length<=20).to.equal(true)
    })
  })
  it("doesn't break words up between lines", ()=>{
    expect(input2.split(' ').length).to.equal(wrap(input2).split(' ').length)
  })
})


/*
tests:
-requires nonempty string
-returns a string
-line length < 20
-doesn't split words between lines
*/
