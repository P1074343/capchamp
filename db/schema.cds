namespace sap.cap.productshop;

aspect carbonemissions {
    emission: Integer;
    rating: String;
}
type pricecost {
    stock: Integer;
    price: Integer;
}
entity Product : carbonemissions
{
    key ID : Integer;
    name : String;
    cost : pricecost;
    category : String;
}

entity Supplier
{
    key ID : String;
    name : String(100);
    city : String(100);
    phone : String(100);
}
