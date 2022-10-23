export interface ISearch {
    author:     IAuthor;
    categories: string[];
    items:      IItem[];
}

export interface IAuthor {
    name:     string;
    lastname: string;
}

export interface IItem {
    id:            string;
    title:         string;
    price:         IPrice;
    picture:       string;
    condition:     string;
    free_shipping: boolean;
}

export interface IPrice {
    currency: string;
    amount:   number;
    decimals: number;
}

export interface IMeliResponse {
    site_id:                   string;
    country_default_time_zone: string;
    query:                     string;
    paging:                    Paging;
    results:                   IResultDetail[];
    sort:                      Sort;
    available_sorts:           Sort[];
    filters:                   any[];
    available_filters:         AvailableFilter[];
}

export interface AvailableFilter {
    id:     string;
    name:   string;
    type:   string;
    values: AvailableFilterValue[];
}

export interface AvailableFilterValue {
    id:      string;
    name:    string;
    results: number;
}

export interface Sort {
    id:   null | string;
    name: string;
}

export interface Paging {
    total:           number;
    primary_results: number;
    offset:          number;
    limit:           number;
}

export interface IResultDescription {
    text:         string;
    plain_text:   string;
    last_updated: string;
    date_created: string;
    snapshot:     ISnapshot;
}

export interface ISnapshot {
    url:    string;
    width:  number;
    height: number;
    status: string;
}

export interface IResultDetail {
    id:                    string;
    site_id:               string;
    title:                 string;
    seller:                Seller;
    price:                 number;
    prices:                Prices;
    sale_price:            null;
    currency_id:           string;
    available_quantity:    number;
    sold_quantity:         number;
    buying_mode:           string;
    listing_type_id:       ListingTypeID;
    stop_time:             string;
    condition:             string;
    permalink:             string;
    thumbnail:             string;
    thumbnail_id:          string;
    accepts_mercadopago:   boolean;
    installments:          Installments;
    address:               IAddress;
    promotions:            null;
    shipping:              IShipping;
    seller_address:        ISellerAddress;
    attributes:            IAttribute[];
    original_price:        number | null;
    category_id:           string;
    official_store_id:     null;
    domain_id:             string;
    catalog_product_id:    null | string;
    tags:                  ResultTag[];
    catalog_listing?:      boolean;
    use_thumbnail_id:      boolean;
    offer_score:           null;
    offer_share:           null;
    match_score:           null;
    winner_item_id:        null;
    melicoin:              null;
    discounts:             null;
    inventory_id:          null | string;
    order_backend:         number;
    differential_pricing?: DifferentialPricing;
}

export interface IAddress {
    state_id:   string;
    state_name: string;
    city_id:    null | string;
    city_name:  string;
}

export interface IAttribute {
    value_struct:         Struct | null;
    source:               number;
    id:                   string;
    value_id:             null | string;
    value_name:           null | string;
    values:               IAttributeValue[];
    attribute_group_id:   string;
    attribute_group_name: string;
    value_type?:          ValueType;
    name:                 string;
}

export interface Struct {
    unit:   Unit;
    number: number;
}

export interface DifferentialPricing {
    id: number;
}

export interface Installments {
    quantity:    number;
    amount:      number;
    rate:        number;
    currency_id: string;
}

export interface IAttributeValue {
    id:     null | string;
    name:   null | string;
    struct: Struct | null;
    source: number;
}

export interface Prices {
    id:                    string;
    prices:                Price[];
    presentation:          Presentation;
    payment_method_prices: PaymentMethodPrice[];
    reference_prices:      Price[];
    purchase_discounts:    PurchaseDiscount[];
}

export interface PaymentMethodPrice {
    id:                    string;
    conditions:            PaymentMethodPriceConditions;
    value:                 number;
    type:                  string;
    currency_id:           null;
    metadata:              PaymentMethodPriceMetadata;
    exchange_rate_context: string;
}

export interface PaymentMethodPriceConditions {
    allowed_methods:      AllowedMethod[];
    start_time:           string;
    end_time:             string;
    restricted_to_prices: any[];
}

export interface AllowedMethod {
    id:              string;
    issuer_id:       number;
    payment_type_id: string;
    installments:    null;
}

export interface PaymentMethodPriceMetadata {
    purchase_discount_id:          string;
    purchase_discount_type:        string;
    purchase_discount_campaign_id: string;
    purchase_discount_rebate_id:   string;
}

export interface Presentation {
    display_currency: string;
}

export interface Price {
    id:                    string;
    type:                  string;
    amount:                number;
    regular_amount?:       number | null;
    currency_id:           string;
    last_updated:          string;
    conditions:            PriceConditions;
    exchange_rate_context: string;
    metadata?:             PriceMetadata;
    tags?:                 any[];
}

export interface PriceConditions {
    context_restrictions: string[];
    start_time:           null | string;
    end_time:             null | string;
    eligible:             boolean;
}

export interface PriceMetadata {
    campaign_id?:                  string;
    promotion_id?:                 string;
    promotion_type?:               string;
    discount_meli_amount?:         number;
    campaign_discount_percentage?: number;
    campaign_end_date?:            string;
    order_item_price?:             number;
    funding_mode?:                 string;
}

export interface PurchaseDiscount {
    purchase_discount_id: string;
    campaign_id:          string;
    rebate_id:            string;
    type:                 string;
    discount_percentage:  number;
    conditions:           PriceConditions;
    purchase_min_amount:  number;
    max_discount_amount:  number;
    max_benefit_count:    number;
    funding_mode:         string;
}

export interface Seller {
    id:                 number;
    permalink:          string;
    registration_date:  string;
    car_dealer:         boolean;
    real_estate_agency: boolean;
    tags:               SellerTag[];
    seller_reputation:  SellerReputation;
    eshop?:             Eshop;
}

export interface Eshop {
    seller:           number;
    eshop_rubro:      null;
    eshop_id:         number;
    nick_name:        string;
    site_id:          string;
    eshop_logo_url:   string;
    eshop_status_id:  number;
    eshop_experience: number;
    eshop_locations:  any[];
}

export interface SellerReputation {
    power_seller_status: string | null;
    level_id:            string;
    metrics:             Metrics;
    transactions:        Transactions;
}

export interface Metrics {
    cancellations:         Cancellations;
    claims:                Cancellations;
    delayed_handling_time: Cancellations;
    sales:                 Sales;
}

export interface Cancellations {
    period: string;
    rate:   number;
    value:  number;
}

export interface Sales {
    period:    string;
    completed: number;
}

export interface Transactions {
    canceled:  number;
    period:    string;
    total:     number;
    ratings:   Ratings;
    completed: number;
}

export interface Ratings {
    negative: number;
    neutral:  number;
    positive: number;
}

export interface ISellerAddress {
    id:           string;
    comment:      string;
    address_line: string;
    zip_code:     string;
    country:      Sort;
    state:        Sort;
    city:         Sort;
    latitude:     string;
    longitude:    string;
}

export interface IShipping {
    free_shipping: boolean;
    mode:          Mode;
    tags:          ShippingTag[];
    logistic_type: LogisticType;
    store_pick_up: boolean;
}

export enum LogisticType {
    CrossDocking = "cross_docking",
    DropOff = "drop_off",
    Fulfillment = "fulfillment",
    NotSpecified = "not_specified",
    XdDropOff = "xd_drop_off",
}

export enum Mode {
    Me2 = "me2",
    NotSpecified = "not_specified",
}

export enum ShippingTag {
    Fulfillment = "fulfillment",
    MLAChgThresholdAgo22 = "MLA-chg-threshold-ago-22",
    MandatoryFreeShipping = "mandatory_free_shipping",
    SelfServiceIn = "self_service_in",
    SelfServiceOut = "self_service_out",
}

export enum SellerTag {
    CreditsPriority1 = "credits_priority_1",
    CreditsPriority2 = "credits_priority_2",
    CreditsPriority4 = "credits_priority_4",
    CreditsProfile = "credits_profile",
    Developer = "developer",
    Eshop = "eshop",
    MediumSeller = "medium_seller",
    MessagesAsSeller = "messages_as_seller",
    Mshops = "mshops",
    Normal = "normal",
}

export enum ResultTag {
    BestSellerCandidate = "best_seller_candidate",
    BrandVerified = "brand_verified",
    CartEligible = "cart_eligible",
    ExtendedWarrantyEligible = "extended_warranty_eligible",
    GoodQualityPicture = "good_quality_picture",
    GoodQualityThumbnail = "good_quality_thumbnail",
    ImmediatePayment = "immediate_payment",
    IncompleteTechnicalSpecs = "incomplete_technical_specs",
    LoyaltyDiscountEligible = "loyalty_discount_eligible",
    ModerationPenalty = "moderation_penalty",
    ShippingGuaranteed = "shipping_guaranteed",
    StandardPriceByChannel = "standard_price_by_channel",
}

export enum Unit {
    CM = "cm",
    Empty = "\"",
    G = "g",
    Kg = "kg",
    Mm = "mm",
}

export enum ValueType {
    List = "list",
    Number = "number",
    NumberUnit = "number_unit",
    String = "string",
}

export enum ListingTypeID {
    GoldPro = "gold_pro",
    GoldSpecial = "gold_special",
}

