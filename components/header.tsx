import Search from "./search";
import FeatureSlide from './feature-slide'

export default function Header () {


    return (
        <>
        <div className="space-y-7 mt-48 mb-32  ">
            <h1 className="scroll-m-20 text-blue-500 text-6xl lg:text-9xl font-extrabold max-w-900">
                Buy & Sell, <br /> <span className='font-extrabold text-transparent md:text-4xl lg:text-9xl bg-clip-text bg-gradient-to-r from-blue-500 to-pink-600'>Anything,  <br /> Anywhere</span>
            </h1>
            <Search />
        </div>
        {/* <FeatureSlide /> */}
        </>
    )
}