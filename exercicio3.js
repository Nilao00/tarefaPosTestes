function solution(inputString) {
    const palidrome = inputString.split("").reverse();
    if (inputString === palidrome.join("")) {
        return true;
    }

    return false;
}
