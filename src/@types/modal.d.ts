type ActivateCompanyModalPropsType = {
  onClose: () => void;
  companyName: string;
  websiteCount: number;
  productCount: number;
  slug: string;
};

type ActivateWebsiteModalPropsType = {
  onClose: () => void;
  companyName: string;
  websiteName: string;
};

type EmbedModalPropsType = {
  value?: string;
};

type CommonModalPropsType = {
  onClose: () => void;
};

type RemovableProductType = 'Company' | 'Website' | 'User';
