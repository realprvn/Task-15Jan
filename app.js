function getIsDeepEqual(obj1,obj2){
    if (typeof obj1 !== 'object' || typeof obj2 !=='object') {
      return obj1 === obj2
    }
    
    const key1 = Object.keys(obj1);
    const key2 = Object.keys(obj2);
    
    if(key1.length !== key2.length) {
      return false;
    }
    
    for(let key in obj1){
      if(!(key in obj2)) return false;
      if(!getIsDeepEqual(obj1[key],obj2[key])) return false;
    }
    return true;
    
    
    
    }
    
    
    
    
    console.log(getIsDeepEqual({ a: 1, b: 2 }, { a: 1, b: 2 })); // true
    console.log(getIsDeepEqual({ a: 1, b: 2 }, { a: 1, b: 3 })); // false
    console.log(getIsDeepEqual(
      { a: 1, b: 2, obj: { test: "12", }, },
      { a: 1, b: 2, obj: { test: "12", }, }
    ));// true
    
    console.log(getIsDeepEqual(
      { a: 1, b: 2, test: [1,2,3], obj: { test: "12", }, },
      { a: 1, b: 2, test: [1,2,3], obj: { test: "12", }, }
    ));// true
    
    
    console.log(getIsDeepEqual( { at: 1, bt: 2, test: [1, 2, 3, { hi: "hi"} ], obj: { test: "12" } } , { at: 1, bt: 2, test: [1, 2, 3, { hi: "hello"} ], obj: { test: "12" } } )); // false
    
    console.log(getIsDeepEqual( { at: 1, bt: 2, test: [1,2,3], obj: { test: "12" } } , { at: 1, bt: 2, test: [1,2,3], obj: { test: "12", }, }));  // true