function question5() {
  let orig = {
    prop1: "p1",
    prop2: "p2",
  };

  let modified = orig;
  orig.prop1 = "m1";

  if (orig === modified) {
    console.log("orig and modified are the same");
    console.log(
      `This is orig: ${orig.prop1} ${orig.prop2} and modified ${modified.prop1} ${modified.prop2} line 12`
    );
  }
  if (modified.prop1 === "m1") {
    console.log("orig.prop1 is m1");
    console.log(`This is modified.prop1: ${modified.prop1} line 16`);
  }

  //................
  modified = {
    ...orig,
    prop2: "m2",
  };
  if (orig === modified) {
    console.log("orig and modified are still the same");
  }
  console.log(
    `This is orig: ${orig.prop1} ${orig.prop2} and modified ${modified.prop1} ${modified.prop2} after the spread operator`
  );
  //................

  if (modified.prop1 === "m1") {
    console.log("orig.prop1 is m1");
    console.log(
      `Orig now is ${orig.prop1} ${orig.prop2}. Modified is now ${modified.prop1} ${modified.prop2}`
    );
  }
  if (modified.prop2 === "m2") {
    console.log("orig.prop1 is m2");
  }
}

//The if function immediate after the spread operator, if(orig === modified) { console.log("orig and modified are the same")} 
//returns false so there is no output.
// The spread operator turns 'modified' into
// modified: {
//     prop1: "m1",
//     prop2: "m2"
// }
// and orig is as follows
// orig : {
//     prop1: "m1",
//     prop2: "p2"
// }

// orig !== modifed.
