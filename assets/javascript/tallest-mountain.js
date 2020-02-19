const mount = [13412, 1345, 111, 190, 19, -5]

function tallest() {
    let sorted = mount.sort((a, b) => b - a)
    console.log(sorted)
    
    document.write("hello from " + mount[0]+ "!");

};

tallest()