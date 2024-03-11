
export default function Testimonials() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">请选择你的方案</h2>
            <p className="text-xl text-gray-400">以特别的介绍性价格获得适合您需求的计划。</p>
          </div>

          {/* Testimonials */}
          <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">

            {/* 1st testimonial */}
            <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <cite className="text-gray-200 not-italic">免 费 版</cite>
                </div>
              </div>
              <blockquote className="text-lg text-gray-400 grow">
                <p>￥0 永久免费</p>
                <p></p>
                <p></p>
              </blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" >立即使用</a>
              </div>
            </div>

            <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up" data-aos-delay="200">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <cite className="text-gray-200 not-italic">专 业 版</cite>
                </div>
              </div>
              <blockquote className="text-lg text-gray-400 grow">
                <p>￥10 / 每月</p>
                <p>￥108 / 每年</p>
                <p></p>
              </blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" >立即购买</a>
              </div>
            </div>

            <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up" data-aos-delay="400">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <cite className="text-gray-200 not-italic">高 级 版</cite>
                </div>
              </div>
              <blockquote className="text-lg text-gray-400 grow">
                <p>￥10 / 每月</p>
                <p>￥108 / 每年</p>
                <p></p>
              </blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out">立即购买</a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
