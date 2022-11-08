import { AttributeNameType, AttributeType, FiltersType, JewelryNameType, JewelryType, LabelType } from "../types";

export const jewelryTypeList: JewelryType[] = [
  {
    name: "pendant",
    _id: 12,
  },
  {
    name: "bracelet",
    _id: 19,
  },
  {
    name: "necklace",
    _id: 255,
  },
  {
    name: "necklace",
    _id: 912,
  },
  {
    name: "ring",
    _id: 88,
  },
  {
    name: "gemstone",
    _id: 523,
  },
  {
    name: "watch",
    _id: 761,
  },
]

export const labelsList: LabelType[] = [
  {
    name: "rich",
    _id: 19,
  },
  {
    name: "luxury",
    _id: 90,
  },
  {
    name: "awesome",
    _id: 71,
  },
  {
    name: "gold",
    _id: 351,
  },
  {
    name: "silver",
    _id: 762,
  },
  {
    name: "shine",
    _id: 452,
  },
  {
    name: "oval cut diamond",
    _id: 5,
  },
  {
    name: "VVS",
    _id: 95,
  },
]

export const attributesList: AttributeType[] = [
  {
    name: "title",
    type: "text",
    _id: 1
  },
  {
    name: "description",
    type: "text",
    _id: 2
  },
  {
    name: "quantity",
    type: "number",
    _id: 3
  },
  {
    name: "price",
    type: "number",
    _id: 4
  },
  {
    name: "jewelryType",
    type: "select",
    _id: 5,
    options: jewelryTypeList,
  },
  {
    name: "labels",
    type: "multiselect",
    _id: 6,
    options: labelsList,
  },
]

export const JewelryTypesNames: Record<JewelryNameType, string> = {
  pendant: "Pendants",
  necklace: "Necklaces",
  bracelet: "Bracelets",
  ring: "Rings",
  watch: "Watches",
  earring: "Earrings",
  gemstone: "Gemstones",
}

export const initialFilters: FiltersType = {
  title: "",
  description: "",
  price: [0, 1000],
  quantity: [0, 100],
  jewelryType: undefined,
  labels: undefined,
}

export const AttributeNames: Record<AttributeNameType, string> = {
  title: "Product Title",
  description: "Product Description",
  price: "Price",
  quantity: "Quantity",
  jewelryType: "Jewelry Type",
  labels: "Tags/Labels"
}