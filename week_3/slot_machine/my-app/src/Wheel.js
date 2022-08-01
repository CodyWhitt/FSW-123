const int = 7
export default function Wheel(int){
    let number = Math.ceil(Math.random()*int);
    return `images/image${number}.png`
}