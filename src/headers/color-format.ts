
const colorFormat = (colorSend:string) : string => {
    let color :string;
    const light = "red";
    switch(colorSend){
        case 'primary':
            color = "#363636";
            break;
        case 'light':
            color="#f5f5f5";
            break;
        default :
        color= "blue";
        break;
    }
    return color;
}
export default colorFormat;