import iphone from '../assets/iPhone.png';
import style from '../style/home.module.css';


const What = () => {
  return (
    <div className=" w-full">
      {/* whatsapp section  */}
      <div className={`p-4 ${style.adv}`}>
        <div className=" grid grid-cols-2 gap-x-[50px] md:w-[1240px] md:mx-auto">
          <div className="flex flex-col text-[18px] justify-center items-start gap-y-4 ">
            <h2 className="w-[259px] text-white ">
              No need to waste time! Talk to a Build Depot agent on <span className="text-[#48C546] pl-1">WhatsApp</span> and
              relax.
            </h2>
            <button
              className="bg-[#c64018] rounded focus:bg-[#421305] text-white  py-2 px-3 hover:bg-[#da6440] "
              type="button"
            >
              Order on Whatsapp
            </button>
          </div>
          <div className=" h-auto md:place-self-end">
            <img src={iphone} alt="a whatsapp screenshot from an iphone" />
          </div>
        </div>
      </div>
      {/* Testimonial section  */}
      <div>For Testimonial</div>
    </div>
  );
};

export default What;
