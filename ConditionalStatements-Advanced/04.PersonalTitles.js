//04. Personal Titles
function personalTitles(input) {
    const age = Number(input[0]);
    const sex = input[1];

    switch (sex) {
        case "m":
            if (age < 16) {
                console.log("Master");
            } else {
                console.log("Mr.")
            }
        break;
        case "f":
            if (age < 16) {
                console.log("Miss");
            } else {
                console.log("Ms.");
            }
        break;

    }
 

}
