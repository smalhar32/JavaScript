const timmer1 = setTimeout(`console.log("Hii")`,1000);const timmer2 = setTimeout(`console.log("Hii-2")`,2000);const timmer3 = setTimeout(a(),3000);

const timmer = setInterval(`console.log("Hii-3")`,1000);

clearInterval(timmer);

function a() {
    console.log("hello world");
    
}

setTimeout((function name() {
    console.log("hii4");
    })
);