export type CompanyCardType = {
    id: string;
    name: string;
    description: string;
    address: {
      address1: string,
      city: string,
      state: string,
      postalCode: string,
    };
    starred: boolean;
    image: string;
};
