import { PluginItemShowTypeEnum } from 'utils/enums';

export default {
  productOrCompanyOrWebsite: '/:type(product|company|website)',
  product: '/product',
  productWithSlugAndSpecificShowTypeRoute: `/product/:company/:website/:productSlug/:showType(${PluginItemShowTypeEnum.List}|${PluginItemShowTypeEnum.Setting}|${PluginItemShowTypeEnum.Embed}|${PluginItemShowTypeEnum.Square}|${PluginItemShowTypeEnum.Adverts})`,
  productSlideListRoute: `/product/:company/:website/:productSlug/${PluginItemShowTypeEnum.List}`,
  productSetupRoute: `/product/:company/:website/:productSlug/${PluginItemShowTypeEnum.Setting}`,
  productEmbedRoute: `/product/:company/:website/:productSlug/${PluginItemShowTypeEnum.Embed}`,
  productAdvertsRoute: `/product/:company/:website/:productSlug/${PluginItemShowTypeEnum.Adverts}`,
  productSlideItemRoute: `/product/:company/:website/:productSlug/:id`,

  websiteNameOrCompanyStatisticRoute: `/product/:company/:website?`,

  //products
  toProductSlidesListById: (
    companySlug = '',
    websiteSlug = '',
    slug = '',
  ): string =>
    `/product/${companySlug}/${websiteSlug}/${slug}/${PluginItemShowTypeEnum.List}`,

  toProductSlidesSquareById: (
    companySlug: string,
    websiteSlug: string,
    slug: string,
  ): string =>
    `/product/${companySlug}/${websiteSlug}/${slug}/${PluginItemShowTypeEnum.Square}`,

  toProductSlidesSetupById: (
    companySlug: string,
    websiteSlug: string,
    slug: string,
  ): string =>
    `/product/${companySlug}/${websiteSlug}/${slug}/${PluginItemShowTypeEnum.Setting}`,

  toProductSlidesEmbedById: (
    companySlug: string,
    websiteSlug: string,
    slug: string,
  ): string =>
    `/product/${companySlug}/${websiteSlug}/${slug}/${PluginItemShowTypeEnum.Embed}`,

  toProductSlidesAdvertsById: (
    companySlug: string,
    websiteSlug: string,
    slug: string,
  ): string =>
    `/product/${companySlug}/${websiteSlug}/${slug}/${PluginItemShowTypeEnum.Adverts}`,

  toProductSlideConfig: (
    companySlug: string,
    websiteSlug: string,
    slug: string,
    id: number | string,
  ): string => `/product/${companySlug}/${websiteSlug}/${slug}/${id}`,

  toCompanyOrWebsiteStatisticBySlug: (
    companySlug = '',
    websiteSlug = '',
  ): string => `/product/${companySlug}/${websiteSlug}`,

  //company
  company: `/company/:companySlug/:type(edit|move)`,

  toCompanyEdit: (companySlug: string): string =>
    `/company/${companySlug}/edit`,
  companyEdit: `/company/:companySlug/:type(edit)`,

  toCompanyMove: (companySlug: string): string =>
    `/company/${companySlug}/move`,
  companyMove: `/company/:companySlug/:type(move)`,

  //website
  website: `/website/:companySlug/:websiteSlug/:type(edit|move)`,

  toWebsiteEdit: (companySlug: string, websiteSlug: string): string =>
    `/website/${companySlug}/${websiteSlug}/edit`,
  websiteEdit: `/website/:companySlug/:websiteSlug/:type(edit)`,

  toWebsiteMove: (companySlug: string, websiteSlug: string): string =>
    `/website/${companySlug}/${websiteSlug}/move`,
  websiteMove: `/website/:companySlug/:websiteSlug/:type(move)`,

  // Users And Archive
  usersAndArchive: '/:type(user|archive)/:company?/:website?',
  // Users
  user: `/user`,
  userDetailRoute: `/user/:companySlug/:id`,
  toUserDetail: (companySlug: string, id: number) =>
    `/user/${companySlug}/${id}`,

  // Archive
  archive: `/archive`,
  archiveWebsite: `/archive/:company`,
  toArchivedWebsite: (company: string) => `/archive/${company}`,
  archiveProduct: `/archive/:company/:website`,
  toArchivedProduct: (company: string, website: string) =>
    `/archive/${company}/${website}`,
};
