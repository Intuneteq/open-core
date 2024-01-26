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
    src: "/rocket.png",
    alt: "rocket",
    headerText1: "FREELANCING 101",
    headerText2: "Charley Den",
    footerText1: "15 Min Read",
    footerText2: "23 - 05 -2023",
    mainText: "Enhance UX: Designing Better UX/UI",
  },
  {
    id: 3,
    src: "/rocket.png",
    alt: "rocket",
    headerText1: "FREELANCING 101",
    headerText2: "Charley Den",
    footerText1: "15 Min Read",
    footerText2: "23 - 05 -2023",
    mainText: "Enhance UX: Designing Better UX/UI",
  },
  {
    id: 4,
    src: "/rocket.png",
    alt: "rocket",
    headerText1: "FREELANCING 101",
    headerText2: "Charley Den",
    footerText1: "15 Min Read",
    footerText2: "23 - 05 -2023",
    mainText: "Enhance UX: Designing Better UX/UI",
  },
  {
    id: 5,
    src: "/rocket.png",
    alt: "rocket",
    headerText1: "FREELANCING 101",
    headerText2: "Charley Den",
    footerText1: "15 Min Read",
    footerText2: "23 - 05 -2023",
    mainText: "Enhance UX: Designing Better UX/UI",
  },
  {
    id: 6,
    src: "/rocket.png",
    alt: "rocket",
    headerText1: "FREELANCING 101",
    headerText2: "Charley Den",
    footerText1: "15 Min Read",
    footerText2: "23 - 05 -2023",
    mainText: "Enhance UX: Designing Better UX/UI",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-grey">
      <section className="w-full h-40 relative">
        <Image src={"/frames.svg"} alt="header image" fill objectFit="cover" />
      </section>

      <section className="liner w-full pt-[4.47rem] px-4 sm:px-[9.54rem] xxl:px-[12.64rem]">
        <div className="flex justify-between items-center mb-[4.45rem]">
          <h1 className="max-w-[17.77381rem] xl:max-w-[38.90969rem] xxl:max-w-[51.96163rem] liner flex-1 text-[2rem] xl:text-[4rem] xxl:text-[6rem] font-bold leading-[2.4rem] xl:leading-[4.8rem] xxl:leading-[6.875rem] text-blue">
            Atlas Premier Knowledge Blogs:
          </h1>
          <p className="text-base xl:text-2xl xxl:text-[2rem] font-medium leading-[1.5rem] xl:leading-[2.25rem] xxl:leading-[3rem] max-w-[21.4375rem] xl:max-w-[28.36619rem] xxl:max-w-[37.88144rem] liner">
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
            className="rounded-l-[2.00319rem]"
          />
        </NoticeCard>
      </section>

      <section className="px-[6.2rem] py-[6.1rem]">
        <div className="flex justify-between items-center mb-[5.29rem]">
          <p className="text-[6rem] font-bold leading-[6.875rem] text-blue">
            Blogs
          </p>

          <div className="flex justify-between items-center gap-[2.65rem]">
            <button className="py-[0.82719rem] px-[1.32356rem] border-[1.755px] border-blue rounded-[54.84594rem] text-light">
              All Blogs
            </button>

            <ul className="flex justify-center items-center gap-[3.97rem] text-light text-xl font-medium leading-[1.875rem]">
              <li>Trends</li>
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
        >
          <div className="w-full h-full bg-gradient flex justify-center items-center">
            <SocialIcon path="/Facebook.svg" alt="Facebook" />
            <SocialIcon path="/LinkedIn.svg" alt="linkedIn" />
            <SocialIcon path="/instagram.svg" alt="instagram" />
            <SocialIcon path="/behance.svg" alt="behance" />
            <SocialIcon path="/Dribble.svg" alt="Dribble" />
          </div>
        </NoticeCard>

        <article className="mt-[5.38rem] flex justify-between items-center flex-wrap gap-y-[5.29rem]">
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

        <article className="w-full h-[41.5rem] rounded-[1.5rem] bg-gradientIII mt-[6.31rem] flex flex-col justify-between items-start">
          <div className="w-full h-[7.62rem] relative top-0">
            <Image
              src={"/frames.svg"}
              alt="header image"
              fill
              objectFit="cover"
            />
          </div>
          <div className="flex justify-between items-center pl-[9.38rem] pr-[5.94rem] w-full liner">
            <div className="max-w-[47.67594rem] text-white">
              <h6 className="text-[6rem] -tracking-[0.06rem]">
                <span className="font-normal leading-[7.2rem]">
                  Transforming your
                </span>{" "}
                <span className="font-bold leading-[6.875rem]">
                  Ideas into reality
                </span>
              </h6>
              <p className="text-2xl font-medium leading-9 tracking-[0.015rem]">
                Let&rsquo;s build something extraordinary together to captivate
                your audience.
              </p>
            </div>
            <div className="border-2 border-whiteII w-[25rem] h-[25rem] rounded-full flex items-center justify-center">
              <p className="text-whiteII text-[2rem] font-medium w-[10.1675rem]">
                Let&rsquo;s Work Together!
              </p>
            </div>
          </div>
          <div className="w-full h-[7.62rem] relative bottom-0 transform rotate-180">
            <Image
              src={"/frames.svg"}
              alt="header image"
              fill
              objectFit="cover"
            />
          </div>
        </article>
      </section>

      <section className="px-24 py-[6.25rem] bg-blueII shadow-boxII w-full flex justify-center items-center">
        <div className="w-full h-[48.25rem] bg-white pt-[6.25rem] px-[4.5rem] rounded-[3rem] flex flex-col items-start justify-start overflow-hidden">
          <div className="flex justify-between items-center w-full">
            <div className="">
              <p className="text-blueIII text-[2rem] font-bold leading-[2.4rem]">
                Say Hello!
              </p>
              <small className="mb-4 text-[1.5rem] font-normal leading-[2.25rem] text-blueIV">
                Atlaspremier@gmail.com
              </small>
              <div className="flex justify-start items-center gap-2 mt-4">
                <div className="w-[3.33331rem] h-[3.33331rem] bg-greyII rounded-[0.33331rem] flex justify-center items-center">
                  <InstagramIcon />
                </div>
                <div className="w-[3.33331rem] h-[3.33331rem] bg-greyII rounded-[0.33331rem] flex justify-center items-center">
                  <InstagramIcon />
                </div>
                <div className="w-[3.33331rem] h-[3.33331rem] bg-greyII rounded-[0.33331rem] flex justify-center items-center">
                  <InstagramIcon />
                </div>
                <div className="w-[3.33331rem] h-[3.33331rem] bg-greyII rounded-[0.33331rem] flex justify-center items-center">
                  <InstagramIcon />
                </div>
              </div>
            </div>
            <div className="flex justify-between items-start gap-[5.33rem] text-blueIV text-[1.5rem] font-normal">
              <ul className="flex flex-col justify-start item-start gap-y-[1.08rem]">
                <li>Home</li>
                <li>About us</li>
                <li>Work</li>
              </ul>
              <ul className="flex flex-col justify-start item-start gap-y-[1.08rem]">
                <li>Services</li>
                <li>Contact us</li>
              </ul>
            </div>
          </div>
          <div className="flex justify-between items-center w-full text-blackI text-[1.5rem] font-normal mt-[5.33rem]">
            <p>NewYorK, US</p>
            <p>AtlasPremier. All Rights Reserved</p>
          </div>
          <h3 className="mx-auto text-blueII text-[12.59744rem] font-extrabold leading-[14.43456rem] -tracking-[]-.126rem mt-[15.5rem]">
            Atlas Premier
          </h3>
        </div>
      </section>
    </main>
  );
}
