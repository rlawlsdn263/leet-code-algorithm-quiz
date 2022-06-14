const strs = ["flower", "flow", "flight"];

let longestCommonPrefix = function(strs) {
    //strs가 비었으면 return
    if (!strs[0]) {
        return;
    }
    let preprefix = '';
    let prefix = '';
    for (let i = 0; i < strs[0].length; i++) {
        //f, fl, flo, flow, flowe, flower
        prefix += strs[0][i];
        console.log(`1단계: ${prefix}`);
        for(let j = 0; j < strs.length; j++) {
            if(!strs[j].startsWith(prefix)) {
                console.log(`2단계: ${strs[j]}, ${prefix}`);
                return preprefix;
            }
        }
        preprefix = prefix;
    }
    console.log(`3단계: ${prefix}`);
    return prefix;
};

longestCommonPrefix(strs);