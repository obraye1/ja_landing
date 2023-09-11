import iphone from '../assets/iPhone.png';

const What = () => {
  return (
    <div className="   w-full">
      {/* whatsapp section  */}
      <div className="   bg-gradient-to-bl from-blue-900 via-blue-500 to-blue-900 p-4">
        <div className=" grid grid-cols-2 gap-x-[50px] md:w-[1240px] md:mx-auto">
          <div className="flex flex-col text-[18px] justify-center gap-y-4 ">
            <h2 className="w-auto md:w-[230px] text-white ">
              No need to waste time! Talk to a Build Depot agent on <span className="text-[#48C546] ">WhatsApp</span> and
              relax.
            </h2>
            <button
              className="bg-[#c64018] self-start  text-white  py-2 px-3 hover:bg-[#da6440] "
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
