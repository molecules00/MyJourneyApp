// To write any function in react always use PASCAL CASING 
// The file extension .tsx is used for TypeScript with JSX

// PascalCasing 
function Message() {
    // JXS : Javascript XML 
    const Devname = 'Arvie';
    if (Devname) {
        return <h1> Dev name : { Devname } </h1>
    } else {
        return <h1> No Dev name </h1>
    }
    
}

export default Message;