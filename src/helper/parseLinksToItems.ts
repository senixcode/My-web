import { TypeItem, Item } from "../senixcode-lightbox-custom/types";
import { ILink } from "../interface/Project";

const convertItem = (links: Array<ILink>): Array<Item> => {
  return links.map(({ category: type, href: src }) => ({
    type,
    src,
  })) as Array<Item>;
};

export const parseLinksToItems = (links: Array<ILink>) => {
  const filterLinks = links.filter((link) =>
    [TypeItem.IMAGE, TypeItem.VIDEO].includes(link.category as TypeItem)
  );
  return convertItem(filterLinks);
};
