import Link from "next/link";

const page = ({className} :{className?: string}) => {
    return (
        <div className={className!}>
            <p>fotter mathfacka</p>
            <Link href="/" style={{color :"red"}}>back</Link>
        </div>
    );
};

export default page;