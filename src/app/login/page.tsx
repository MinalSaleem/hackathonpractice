import Image from "next/image";

export default function Sign() {
  return (
    <div className="flex flex-row lg:mt-[60px] mt-0 mb-[162px] lg:ml-0 ml-4 bg-white">
      <div className="w-full lg:flex mr-[135px] hidden">
        <Image
          src="/signup/phone.png"
          alt="phone pic"
          width={500}
          height={300}
          className="w-[805px] h-[781px]"
        />
      </div>

      <div className="w-full h-auto lg:h-[326px] lg:py-[48px] lg:mt-[227px] mt-[100px]">
        <div className="mb-12 w-[371px]">
          <h2 className="font-medium text-4xl mb-[30px]">
            Log in to Exclusive
          </h2>
          <p className="text-base">Enter your details below:</p>
        </div>

        <div className="w-[371px]">
          <form>
            <div>
              <input
                type="email"
                placeholder="Email or Phone Number"
                className="w-[370px] h-[72px] border-b-2 border-gray-300 focus:outline-none focus:ring-gray-500 focus:ring-1 pt-5 mb-[15px]"
              />
            </div>

            <div>
              <input
                type="password"
                placeholder="Password"
                className="w-[370px] h-[72px] border-b-2 border-gray-300 focus:outline-none focus:ring-gray-500 focus:ring-1 pt-5"
              />
            </div>

            <div className="mt-[40px] flex flex-row justify-between space-x-2">
              <button className="w-[143px] h-[56px] bg-[#DB4444] text-white font-medium text-[16px] rounded-md px-4">
                Log in
              </button>
              <button className="w-[163px] h-[56px] text-[#DB4444]  font-medium text-[16px] px-4">
                Forget Password?
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
