export const patterns = {
    email: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/ ,
    phoneNumber: /^05[0-9]{8}$/ ,
    password: /.*[!@$#^&*(){},./].*/ ,
    nationalId: /[0-9]{15}/ ,
    commercialRegistrationNumber: /^[0-9]{15}$/ ,
    vatNumber: /^[0-9]{15}$/ ,
}