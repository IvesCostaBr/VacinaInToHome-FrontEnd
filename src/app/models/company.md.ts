export interface CompanyRoles {

}

export interface Company {
    readonly id:string,
    name:string,
    cnpj:string;
    email: string;
    phone: string;
    whatsapp: string;
    bussinesHours:string;
    zipCode:string;
    street:string;
    number:string;
    city:string;
    state: string;
    latitude: string;
    longitude: string;
    complement:string;
    active:boolean;
    parentCompany:boolean;
    companyRoles: CompanyRoles[];
}