let li = document.createElement("li");
li.innerText = "2";
document.body.appendChild(li);

// async and defer is Boolean attribure which return true and false
// normal script blocked the html parsing
//if we used async then it is skip the file and load the another file
// fetch honga asynchronousely may execute in between if loaded and it is unpredectable and skip and execute in the again

//defer Script:----  it is fetch parallely asynchronousely(kahi or pr load ho jayenga) and execute run when html parsing is fully and defer script is executed

// order of execution:
//async script:no order(unpredectable)
//defer:order is maintained

// dono mai itna deferrence hai ki async mai order maintain nhi hota koi si bhi bali file kabhi bhi execute ho jati hai
// jabki deffer mai order maintance hota hai

//async use when we have indepency
//defer is used dependence on dom file and depentence on previous files
