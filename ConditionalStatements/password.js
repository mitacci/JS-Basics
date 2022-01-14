function password(input){
    let text = input[0];
    const pass = "s3cr3t!P@ssw0rd";
    if (text === pass) {
        console.log("Welcome");
    } else {
        console.log("Wrong password!");
    }
}
