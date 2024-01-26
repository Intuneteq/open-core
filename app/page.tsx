import Image from "next/image";
import { NoticeCard, BlogCard } from "@/components/cards";
import { InstagramIcon, SocialIcon } from "@/components/Icons";

const blogs = [
  {
    id: 1,
    src: "/rocket.png",
    alt: "rocket",
    headerText1: "FREELANCING 101",
    headerText2: "Charley Den",
    footerText1: "15 Min Read",
    footerText2: "23 - 05 -2023",
    mainText: "Enhance UX: Designing Better UX/UI",
  },
  {
    id: 2,
    src: "/electric.png",
    alt: "rocket",
    headerText1: "FREELANCING 101",
    headerText2: "Charley Den",
    footerText1: "15 Min Read",
    footerText2: "23 - 05 -2023",
    mainText: "Designing Impression: The Power of First Impressions",
  },
  {
    id: 3,
    src: "/rocket.png",
    alt: "rocket",
    headerText1: "FREELANCING 101",
    headerText2: "Charley Den",
    footerText1: "15 Min Read",
    footerText2: "23 - 05 -2023",
    mainText: "Case Study: FlipX, an Investment Attraction Startup",
  },
  {
    id: 4,
    src: "/electric.png",
    alt: "rocket",
    headerText1: "FREELANCING 101",
    headerText2: "Charley Den",
    footerText1: "15 Min Read",
    footerText2: "23 - 05 -2023",
    mainText: "Mastering Startup Branding: Expanding Digital Presence",
  },
  {
    id: 5,
    src: "/electric.png",
    alt: "rocket",
    headerText1: "FREELANCING 101",
    headerText2: "Charley Den",
    footerText1: "15 Min Read",
    footerText2: "23 - 05 -2023",
    mainText: "Designing for Productivity: Efficiency Rules",
  },
  {
    id: 6,
    src: "/rocket.png",
    alt: "rocket",
    headerText1: "FREELANCING 101",
    headerText2: "Charley Den",
    footerText1: "15 Min Read",
    footerText2: "23 - 05 -2023",
    mainText: "Kickstart your UI/UX design career?",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-grey">
      <div className="fixed top-8 left-1/2 -translate-x-1/2 z-50">
        <div className="relative w-[8.77rem] xl:w-[11rem] h-[3.5rem] xxl:h-[5.5rem] ">
          <Image src={"/logo.png"} alt="logo" fill objectFit="cover" />
        </div>
      </div>

      <section className="w-full h-[7.62rem] xl:h-40 relative">
        <Image src={"/frames.svg"} alt="header image" fill objectFit="cover" />
      </section>

      <section className=" w-full pt-[1.87rem] xl:pt-[4.47rem] px-4 sm:px-[9.54rem] xxl:px-[12.64rem]">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-[4.45rem]">
          <h1 className="text-blackII text-center sm:text-left mb-4 sm:mb-0 max-w-[17.77381rem] xl:max-w-[38.90969rem] xxl:max-w-[51.96163rem]  flex-1 text-[2rem] xl:text-[4rem] xxl:text-[6rem] font-bold leading-[2.4rem] xl:leading-[4.8rem] xxl:leading-[6.875rem]">
            Atlas Premier Knowledge Blogs:
          </h1>
          <p className="text-blackI text-center sm:text-left text-base xl:text-2xl xxl:text-[2rem] font-medium leading-[1.5rem] xl:leading-[2.25rem] xxl:leading-[3rem] max-w-[21.4375rem] xl:max-w-[28.36619rem] xxl:max-w-[37.88144rem] ">
            &quot;Immerse yourself in the latest knowledge and research from our
            team of software engineers and design professionals.
          </p>
        </div>

        <NoticeCard
          headerText1="FREELANCING 101"
          headerText2="Joseph Patrick"
          footerText1="15 Min Read"
          footerText2="23 - 05 -2023"
          mainText="07 Ways to get Consistent Clients from Social Media"
        >
          <Image
            src={"/laptop.png"}
            fill
            objectFit="cover"
            alt="screen"
            className="rounded-l-none sm:rounded-l-[2.00319rem] rounded-t-[2.00319rem] sm:rounded-t-none"
          />
        </NoticeCard>
      </section>

      <div className="hidden sm:block w-full h-40 relative rotate-180">
        <Image src={"/frames.svg"} alt="header image" fill objectFit="cover" />
      </div>

      <section className="px-4 sm:px-[4.5rem] xxl:px-[6.2rem] py-[6.1rem] ">
        <div className="flex justify-between items-center flex-col sm:flex-row mb-16 xxl:mb-[5.29rem] ">
          <p className="text-[2.5rem] sm:text-[4rem] xxl:text-[6rem] font-bold leading-[3.5rem] sm:leading-[4.8rem] xxl:leading-[6.875rem] text-blackII">
            Blogs
          </p>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-8 xxl:gap-[2.65rem]">
            <div className="flex justify-start items-center gap-4 sm:gap-[3.5rem] xxl:gap-[3.97rem] text-base text-light xxl:text-xl font-medium leading-6 xxl:leading-[1.875rem]">
              <button className="py-[0.625rem] xxl:py-[0.82719rem] px-4 xxl:px-[1.32356rem] border-[1.326px] xxl:border-[1.755px] border-blue rounded-[41.43881rem] xxl:rounded-[54.84594rem] text-light">
                All Blogs
              </button>
              <p>Trends</p>
            </div>

            <ul className="flex justify-center items-center gap-4 sm:gap-[3.5rem] xxl:gap-[3.97rem] text-base text-light xxl:text-xl font-medium leading-6 xxl:leading-[1.875rem]">
              <li>Research</li>
              <li>Research</li>
              <li>In-house Knowledge</li>
            </ul>
          </div>
        </div>

        <NoticeCard
          headerText1="FREELANCING 101"
          headerText2="William George"
          footerText1="15 Min Read"
          footerText2="23 - 05 -2023"
          mainText="07 Ways to get Consistent Clients from Social Media"
          showImg
        >
          <div className="w-full h-full bg-gradient flex flex-col jus sm:justify-between items-center">
            <div className="w-full h-[6.71rem] sm:h-[9.48rem] relative">
              <Image
                src={"/frames.svg"}
                alt="header image"
                fill
                objectFit="cover"
              />
            </div>
            <div className=" flex justify-center items-center">
              <SocialIcon path="/Facebook.svg" alt="Facebook" />
              <SocialIcon path="/LinkedIn.svg" alt="linkedIn" />
              <SocialIcon path="/instagram.svg" alt="instagram" />
              <SocialIcon path="/behance.svg" alt="behance" />
              <SocialIcon path="/Dribble.svg" alt="Dribble" />
            </div>
            <div className="w-full h-[9.48rem] relative rotate-180 hidden sm:block">
              <Image
                src={"/frames.svg"}
                alt="header image"
                fill
                objectFit="cover"
              />
            </div>
          </div>
        </NoticeCard>

        <article className="mt-[3.2rem] sm:mt-[4.06rem] xxl:mt-[5.38rem] flex justify-between items-center flex-wrap gap-y-16 xxl:gap-y-[5.29rem]">
          {blogs.map((blog) => (
            <BlogCard
              key={blog.id}
              src={blog.src}
              alt={blog.alt}
              headerText1={blog.headerText1}
              headerText2={blog.headerText2}
              footerText1={blog.footerText1}
              footerText2={blog.footerText2}
              mainText={blog.mainText}
            />
          ))}
        </article>

        <article className="w-full overflow-hidden h-[40.625rem] sm:h-[30rem] xxl:h-[41.5rem] rounded-[1.5rem] bg-gradientIII mt-[6.31rem] flex flex-col justify-between items-start">
          <div className="w-full h-[3.85rem] sm:h-[6rem] xxl:h-[7.62rem] relative top-0">
            <Image
              src={"/frames.svg"}
              alt="header image"
              fill
              objectFit="cover"
            />
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-center sm:pl-[9.38rem] sm:pr-[5.94rem] w-full  h-full">
            <div className="max-w-[18.4rem] sm:max-w-[34.375rem] xxl:max-w-[47.67594rem] text-white w-full">
              <h6 className="sm:text-[4rem] text-[2.5rem] xxl:text-[6rem] tracking-[0.025rem] sm:-tracking-[0.04rem] xxl:-tracking-[0.06rem]">
                <span className="font-normal leading-[3rem] sm:leading-[4.8rem] xxl:leading-[7.2rem]">
                  Transforming your
                </span>{" "}
                <span className="font-bold leading-[3rem] sm:leading-[6.875rem]">
                  Ideas into reality
                </span>
              </h6>
              <p className="text-base sm:text-xl xxl:text-2xl font-medium leading-[1.875rem] xxl:leading-9 tracking-[0.0125rem] xxl:tracking-[0.015rem]">
                Let&rsquo;s build something extraordinary together to captivate
                your audience.
              </p>
            </div>
            <div className="border-2 border-whiteII w-[15.5625rem] xl:w-[25rem] h-[15.5625rem] xl:h-[25rem] rounded-full flex items-center justify-center">
              <p className="text-whiteII text-2xl xxl:text-[2rem] font-medium w-[7.59375rem] xxl:w-[10.1675rem]">
                Let&rsquo;s Work Together!
              </p>
            </div>
          </div>
          <div className="w-full h-[3.85rem] sm:h-[6rem] xxl:h-[7.62rem] relative bottom-0 transform rotate-180">
            <Image
              src={"/frames.svg"}
              alt="header image"
              fill
              objectFit="cover"
            />
          </div>
        </article>
      </section>

      <section className="px-4 sm:px-[3.88rem] xxl:px-24 py-8 sm:py-[5.38rem] xxl:py-[6.25rem] bg-blueII shadow-boxII w-full flex justify-center items-center">
        <div className="w-full h-[36.1875rem] xxl:h-[48.25rem] bg-white pt-6 sm:pt-[6.25rem] px-6 sm:px-[4.5rem] rounded-[3rem] flex flex-col items-start justify-start overflow-hidden ">
          <div className="flex justify-center sm:justify-between flex-col sm:flex-row items-center w-full">
            <div className=" w-full">
              <p className="text-blueIII text-xl xxl:text-[2rem] font-bold leading-[2.4rem]  text-center sm:text-left">
                Say Hello!
              </p>
              <small className="mb-4 text-xl text-[1.5rem] font-normal leading-[2.25rem] text-blueIV text-center sm:text-left">
                Atlaspremier@gmail.com
              </small>
              <div className="flex justify-between sm:justify-start items-center gap-2 mt-6 xxl:mt-8">
                <div className="w-10 xxl:w-[3.33331rem] h-10 xxl:h-[3.33331rem] bg-greyII rounded-[0.25rem] xxl:rounded-[0.33331rem] flex justify-center items-center">
                  <InstagramIcon />
                </div>
                <div className="w-10 xxl:w-[3.33331rem] h-10 xxl:h-[3.33331rem] bg-greyII rounded-[0.25rem] xxl:rounded-[0.33331rem] flex justify-center items-center">
                  <InstagramIcon />
                </div>
                <div className="w-10 xxl:w-[3.33331rem] h-10 xxl:h-[3.33331rem] bg-greyII rounded-[0.25rem] xxl:rounded-[0.33331rem] flex justify-center items-center">
                  <InstagramIcon />
                </div>
                <div className="w-10 xxl:w-[3.33331rem] h-10 xxl:h-[3.33331rem] bg-greyII rounded-[0.25rem] xxl:rounded-[0.33331rem] flex justify-center items-center">
                  <InstagramIcon />
                </div>
              </div>
            </div>
            <div className="flex w-full sm:w-auto justify-between items-start gap-y-4 gap-8 xxl:gap-[5.33rem] text-blueIV text-xl xxl:text-[1.5rem] font-normal mt-8 sm:mt-0">
              <ul className="flex flex-col justify-start item-start gap-y-[0.8rem] xl:gap-y-[1.08rem]">
                <li>Home</li>
                <li>About us</li>
                <li>Work</li>
              </ul>
              <ul className="flex flex-col justify-start item-start gap-y-[0.8rem] xl:gap-y-[1.08rem]">
                <li>Services</li>
                <li>Contact us</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-center w-full text-blackI text-xl xxl:text-2xl font-normal mt-[4.5rem] xxl:mt-[5.33rem]">
            <p>NewYorK, US</p>
            <p>AtlasPremier. All Rights Reserved</p>
          </div>
          <h3 className="mx-auto text-blueII text-[2.9rem] sm:text-[10.62994rem] md:text-[8rem] xxl:text-[12.59744rem] font-extrabold leading-[12.18013rem] xxl:leading-[14.43456rem] -tracking-[0.10631rem] xxl:-tracking-[0.126rem] mt-[1.5rem] md:mt-[7rem] sm:mt-[5rem] xxl:mt-[14.5rem]">
            Atlas Premier
          </h3>
        </div>
      </section>
    </main>
  );
}
