function A() {
    console.log("A");
}
 
function B() {
    console.log("B");
}
 
export function C() {
    console.log("C");
}
 
export default function D() {
    console.log("D");
}
 
function E() {
    console.log("E");
}
 
function F() {
    console.log("F")
}
 
export {A, B, E as Error, F};