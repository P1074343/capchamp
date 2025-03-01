using { sap.cap.productshop as my } from '../db/schema';

service productshop
{
    entity Product as
        projection on my.Product;

    @odata.draft.enabled
    entity Supplier as
        projection on my.Supplier;
}
