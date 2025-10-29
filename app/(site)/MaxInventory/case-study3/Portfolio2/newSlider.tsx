import Slider from "@components/sections/Portfolio/Slider";

const newCards = [
  {
    id: 1,
    right: "/assets/portfolio/mobile1.svg",
    topLeft: "/assets/portfolio/maskgroup.svg",
    size: "w-[70.09px] h-[34px]",
    descrption:
      "Lorem ipsum dolor sit amet consectetur. Mattis et id commodo convallis pretium nunc ante sem.",
    link: "/case-study/1",
  },
  {
    id: 2,
    right: "/assets/portfolio/mobile2.svg",
    topLeft: "/assets/portfolio/logo2.svg",
    size: "w-[130px] h-[30px]",
    descrption:
      "Lorem ipsum dolor sit amet consectetur. Mattis et id commodo convallis pretium nunc ante sem.",
    link: "/case-study/2",
  },
  {
    id: 3,
    right: "/assets/maxinventory/laptop.svg",
    topLeft: "/assets/maxinventory/gradeup.svg",
    size: "w-[170px] h-[31px]",
    descrption:
      "Lorem ipsum dolor sit amet consectetur. Mattis et id commodo convallis pretium nunc ante sem.",
    link: "/MaxInventory/case-study3",
  },
  {
    id: 4,
    right: "/assets/portfolio/mobile1.svg",
    topLeft: "/assets/portfolio/maskgroup.svg",
    size: "w-[70.09px] h-[34px]",
    descrption:
      "Lorem ipsum dolor sit amet consectetur. Mattis et id commodo convallis pretium nunc ante sem.",
    link: "/case-study/4",
  },
];

export default function AnotherPage() {
  return <Slider cardsData={newCards} />; // ✅ Custom data shown
}