import profile from '../assets/7098886df02b2521176bde95e31347ff1428d87f.jpg'
import rate2 from '../assets/Frame 1000004764.png'
export default function Reviews() {
  return (
    <div className="w-full min-h-screen bg-[#f5f5f5]">
      <div className="container mx-auto min-h-full flex flex-col justify-center gap-2">
        <div className="grid grid-cols-1  md:grid-cols-2 gap-6">
          <div className="max-w-[648px] flex flex-col justify-center bg-white p-4">
            <div className="flex justify-center">
              <img
                src={profile}
                alt=""
                className="w-[60px] h-15 rounded-full"
              />
              <div className="flex flex-col justify-center gap-2">
                <p className="font-[Inter] font-semibold text-black text-[18px]">
                  John Smith
                </p>
                <p className="font-[Inter] font-semibold text-[#25D994] text-sm">
                  Verified Purchase
                </p>
              </div>
              <div className="flex flex-col justify-center gap-2">
                <p className="font-[Inter] font-normal text-[#222222]/50 text-[16px]">
                  Reviewed On 28/07/2024
                </p>
                <div className="flex justify-center gap-2">
                  <p>Excellent Book</p>
                  <img src={rate2} alt="" />
                </div>
                <p className="font-[Inter] text-[#222222]/50 text-[18px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris et ultricies est. Aliquam in justo varius, sagittis
                  neque ut,
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
