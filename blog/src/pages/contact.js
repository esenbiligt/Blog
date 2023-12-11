export default function contact(){
    return <div className="px-80">
        <div className="flex flex-col gap-10 mb-20">
            <h1>Contact us</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
            <div className="flex justify-between">
                <div className="border border-gray-300 w-fit p-5 flex flex-col gap-5 rounded">
                    <p>Address</p>
                    <p className="w-fit">1328 Oak Ridge Drive, Saint Louis, Missouri</p>
                </div>
                <div className="border border-gray-300 w-fit p-5 flex flex-col gap-5 rounded">
                    <p>Address</p>
                    <p>1328 Oak Ridge Drive, Saint Louis, Missouri</p>
                </div>
            </div>
            <form className="w-full h-fit bg-gray-200 p-10 pr-40 rounded flex flex-col gap-5">
                <p>Leave a message</p>
                <div className="flex justify-between">
                    <input type="text" placeholder="Your name" className="p-2 rounded"/>
                    <input type="text" placeholder="Your email" className="p-2 rounded"/>
                </div>
                <input type="text" placeholder="Subject" className="p-2 rounded"/>
                <textarea placeholder="Write a message" className="p-2 rounded h-32"/>
                <button className="bg-blue-500 font-semibold text-white py-2 px-4 border border-blue-500 rounded w-fit">Send Message</button>
            </form>
        </div>
    </div>
}