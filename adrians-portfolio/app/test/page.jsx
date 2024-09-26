import Image  from "next/image";

const Test = () =>
{
    return(
        <div className="inline-flex">
        <h1 className="text-black">Hello World</h1>
        <Image
        src = "/github.png"
        alt = ""
        width = {100}
        height = {100}
        />
    </div>
    )
}

export default Test;