import site from '../../data/site.json';
import categories from '../../data/categories.json';
import brands from '../../data/brands.json';
import articles from '../../data/articles.json';

export type SiteInfo = typeof site;
export type Category = typeof categories[number];
export type Brand = typeof brands[number];
export type Article = typeof articles[number];

export const getSiteInfo = (): SiteInfo => site;
export const getCategories = (): Category[] => categories;
export const getBrands = (): Brand[] => brands;
export const getArticles = (): Article[] => articles;

export const findCategory = (slug: string): Category | undefined => categories.find((c) => c.slug === slug);
export const findBrand = (slug: string): Brand | undefined => brands.find((b) => b.slug === slug);
export const findArticle = (slug: string): Article | undefined => articles.find((a) => a.slug === slug);

export const getArticlesByCategory = (slug: string): Article[] => articles.filter((a) => a.categoria === slug);
export const getArticlesByBrand = (slug: string): Article[] => articles.filter((a) => a.marca === slug);
