import Image from 'next/image'
import FeaturesImage from '@/public/images/features.svg'

export default function Features() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="text-center pb-12 md:pb-20">
            <h2 className="h2 font-uncut-sans" data-aos="zoom-out">Start Your Tech Transformation Today!</h2>
          </div>
          <div className="pb-16" data-aos="zoom-out">
            <Image src={FeaturesImage} alt="Features" />
          </div>
          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-3 lg:gap-16 items-start md:max-w-none">
            {/* 1st item */}
            <div className="flex flex-col items-center" data-aos="zoom-out">
              <div className="mb-4">
              <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <radialGradient cx="50%" cy="89.845%" fx="50%" fy="89.845%" r="89.85%" id="icon2-b">
                      <stop stopColor="#3B82F6" stopOpacity=".64" offset="0%" />
                      <stop stopColor="#F472B6" stopOpacity=".876" offset="100%" />
                    </radialGradient>
                    <circle id="icon2-a" cx="28" cy="28" r="28" />
                  </defs>
                  <g fill="none" fillRule="evenodd">
                    <use fill="url(#icon2-b)" xlinkHref="#icon2-a" />
                    <g stroke="#FDF2F8" strokeLinecap="square" strokeWidth="2">
                      <path d="m22 24-4 4 4 4M34 24l4 4-4 4" />
                      <path d="m26 36 4-16" opacity=".64" />
                    </g>
                  </g>
              </svg>
              </div>
              <h4 className="h4 text-gray-200 text-center mb-2">Web Development</h4>
              <p className="text-lg text-gray-400 text-center">We craft responsive, SEO-optimized websites and e-commerce solutions with expertise in HTML, CSS, JavaScript, React, and Node.js, tailored to enhance your digital presence. </p>
            </div>
            {/* 2nd item */}
            <div className="flex flex-col items-center" data-aos="zoom-out" data-aos-delay="200">
              <div className="mb-4">
              <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <radialGradient cx="50%" cy="89.845%" fx="50%" fy="89.845%" r="89.85%" id="icon3-b">
                      <stop stopColor="#3B82F6" stopOpacity=".64" offset="0%" />
                      <stop stopColor="#F472B6" stopOpacity=".876" offset="100%" />
                    </radialGradient>
                    <circle id="icon3-a" cx="28" cy="28" r="28" />
                  </defs>
                  <g fill="none" fillRule="evenodd">
                    <use fill="url(#icon3-b)" xlinkHref="#icon3-a" />
                    <g stroke="#FDF2F8" strokeLinecap="square" strokeWidth="2">
                      <path d="m18 31 4 4 12-15" />
                      <path d="M39 25h-3M39 30h-7M39 35H28" opacity=".64" />
                    </g>
                  </g>
              </svg>
              </div>
              <h4 className="h4 text-gray-200 text-center mb-2">Data Science</h4>
              <p className="text-lg text-gray-400 text-center">We transform data into actionable insights using Python, advanced machine learning, data visualization, and statistical analysis for real-world business intelligence.</p>
            </div>
            {/* 3rd item */}
            <div className="flex flex-col items-center" data-aos="zoom-out" data-aos-delay="400">
              <div className="mb-4">
              <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <radialGradient cx="50%" cy="89.845%" fx="50%" fy="89.845%" r="89.85%" id="icon1-b">
                      <stop stopColor="#3B82F6" stopOpacity=".64" offset="0%" />
                      <stop stopColor="#F472B6" stopOpacity=".876" offset="100%" />
                    </radialGradient>
                    <circle id="icon1-a" cx="28" cy="28" r="28" />
                  </defs>
                  <g fill="none" fillRule="evenodd">
                    <use fill="url(#icon1-b)" xlinkHref="#icon1-a" />
                    <g stroke="#FDF2F8" strokeLinecap="square" strokeWidth="2">
                      <path d="M17 28h22" opacity=".64" />
                      <path d="M20 23v-3h3M33 20h3v3M36 33v3h-3M23 36h-3v-3" />
                    </g>
                  </g>
              </svg>
              </div>
              <h4 className="h4 text-gray-200 text-center mb-2">AI Development</h4>
              <p className="text-lg text-gray-400 text-center"> We design and deploy cutting-edge AI apps using advanced machine learning and predictive analytics to drive intelligent, seamless user experiences.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}