import Link from "next/link";

const page = ({className} :{className?: string}) => {
    return (
        <div className={className!}>
            fotter mathfacka
            <Link href="/" style={{color :"red"}}>back</Link>
        </div>
    );
};

export default page;