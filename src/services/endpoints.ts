export default {
  siderTree: 'api/v1/ux/tree',
  getCountries: 'api/v1/ux/countries',
  getCompany: (slug: string) => `api/v1/companies/${slug}`,
  getWebsite: (companySlug: string, websiteSlug: string) =>
    `api/v1/companies/${companySlug}/websites/${websiteSlug}`,
  getRoles: 'api/v1/company/roles',
  getCompanies: 'api/v1/companies',
  getWebsitesOfCompany: (companySlug: string) =>
    `api/v1/companies/${companySlug}/websites`,

  getWebsites: `api/v1/websites`,
  getDeletedCompanies: `api/v1/companies/deleted`,
  getDeletedUsers: `api/v1/companies/deleted`,
};
