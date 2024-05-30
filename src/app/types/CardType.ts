export type ConceptCardItem = {
  title: string;
  desc: string;
  img: string;
  flexDirection: "row" | "row-reverse";
  backGroundColor: string;
  isButton?: boolean;
};

export type ProductCardItem = {
  title: string;
  desc: string;
  img: string;
  flexDirection: "row" | "row-reverse";
  backGroundColor: string;
  buttonType: "more" | "cart";
  value: number;
};
