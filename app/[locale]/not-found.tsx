import Link from "next/link";

export default function NotFound(){
    return (
        <main className="grid mt-20 justify-center  mx-auto ">
        <div className=" text-xl font-bold">Page not found</div>
        <Link href="/" className="text-blue-500">Go back to home page</Link>
        </main>
    )
}