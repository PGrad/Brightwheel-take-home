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

export type KeyValueObjectType = {
    [key: string]: any | undefined
};

export type StarChangeHandlerType = (id:string, wasStarred: boolean) => void;