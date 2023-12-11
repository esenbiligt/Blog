import { LogoSVG } from "@/images/LogoSVG";

export default function Footer(){
    return <div className="bg-gray-100 w-full h-fit px-96 py-10">
        <div className="flex justify-between mb-5">
            <div className="w-60 flex flex-col gap-4">
                <p className="font-semibold">About</p>
                <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                <div className="flex flex-col gap-1">
                    <p className="font-light">Email : info@jstemplate.net</p>
                    <p className="font-light">Email : info@jstemplate.net</p>
                </div>
            </div>
            <div className="flex flex-col gap-5">
                <a href="http://localhost:3000" className="font-light">Home</a>
                <a href="" className="font-light">Blog</a>
                <a href="http://localhost:3000/contact" className="font-light">Contact</a>
            </div>
            <div className="flex gap-5 mr-20">
                <p>img</p>
                <p>img</p>
                <p>img</p>
                <p>img</p>
            </div>
        </div>
        <div className="flex justify-between border border-r-0 border-b-0 border-l-0 border-gray-300 py-10">
            <div className="flex gap-2 items-center">
                <LogoSVG/>
                <div>
                    <h1 className="text-xl tracking-wider">
                        Meta<span className="font-bold">Blog</span>
                    </h1>
                    <p>c All rights reserved</p>
                </div>
            </div>
            <div className="flex gap-5 items-center">
                <a href="" className="font-light">Terms of use</a>
                <div className="border border-t-0 border-b-0 border-gray-300 px-5">
                    <a href="" className="font-light">Privacy Policy</a>
                </div>
                <a href="" className="font-light">Cookie Policy</a>
            </div>
        </div>
    </div>
}