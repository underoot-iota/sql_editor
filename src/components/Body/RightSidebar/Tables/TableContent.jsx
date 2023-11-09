import Dropdown from "./Dropdown";

function TableContent() {
    const customers = [
        "customerID",
        "companyName",
        "contactName",
        "contactTitle",
        "address",
        "city",
        "region",
        "postalCode",
        "country",
        "phone",
        "fax",
    ];

    const inventory_data = [
        "product_id",
        "product_name",
        "product_type",
        "unit",
        "price_unit",
        "wholesale",
        "current_inventory",
    ];

    const accounts = [
        "id",
        "name",
        "primary_contact",
        "sales_rep_id",
        "region_id",
    ];
    const orders = ["account_id", "occurred_at", "quantity", "amount_usd"];

    return (
        <section className="flex flex-col h-1/2 overflow-hidden">
            <header className="w-full bg-slate-50 py-4 text-lg font-medium border-b-2 border-solid border-indigo-50 pl-4 dark:bg-gray-800 dark:border-gray-700 dark:text-white">
                Tables
            </header>
            <div className="overflow-auto">
                <Dropdown header="Accounts" selections={accounts} />
                <Dropdown header="Customers" selections={customers} />
                <Dropdown header="Inventory Data" selections={inventory_data} />
                <Dropdown header="Orders" selections={orders} />
            </div>
        </section>
    );
}

export default TableContent;
