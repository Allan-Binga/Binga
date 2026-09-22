import ProjectDetails from "./ProjectDetails.jsx";
export default function FastStoreProject() {
  return (
    <article className="bg-white border border-soft-neutral rounded p-6 hover:border-[#800020]/40 transition-colors shadow-[0_2px_4px_-1px_rgba(36,33,36,0.02)] flex flex-col justify-between space-y-6">
      <div className="space-y-4">
        <div className="diagram-heading flex items-center justify-between">
          <span className="font-label-meta text-label-meta text-muted-gray">
            Backend Engineering
          </span>
          <a
            className="font-label-meta text-label-meta text-burgundy hover:underline flex items-center gap-1"
            href="https://github.com/Allan-Binga/Fast-Store-API"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span>Repository</span>
            <span
              aria-hidden="true"
              className="material-symbols-outlined text-[14px]"
            >
              arrow_outward
            </span>
          </a>
        </div>
        <div className="space-y-1.5">
          <h3 className="font-headline-sm text-headline-sm text-charcoal font-semibold">
            Fast Store API
          </h3>
          <p className="font-body-md text-body-md text-muted-gray">
            A modular REST API supporting e-commerce workflows, from product
            discovery to checkout and order management.
          </p>
        </div>

        <div className="bg-ivory border border-soft-neutral rounded p-4 space-y-3 font-label-meta text-[11px]">
          <div className="diagram-heading flex items-center justify-between text-muted-gray border-b border-soft-neutral pb-1.5">
            <span>COMMERCE WORKFLOW</span>
            <span>ILLUSTRATIVE</span>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-center font-label-code text-[11px]">
            <div className="p-2 bg-white border border-soft-neutral rounded w-full sm:w-auto flex-1">
              <div className="text-charcoal font-medium">Catalog</div>
              <div className="text-[10px] text-muted-gray">Products</div>
            </div>
            <span className="text-muted-gray hidden sm:inline">→</span>
            <div className="p-2 bg-white border border-soft-neutral rounded w-full sm:w-auto flex-1">
              <div className="text-charcoal font-medium">Cart</div>
              <div className="text-[10px] text-muted-gray">Cart items</div>
            </div>
            <span className="text-muted-gray hidden sm:inline">→</span>
            <div className="p-2 bg-white border border-soft-neutral rounded w-full sm:w-auto flex-1">
              <div className="text-burgundy font-medium">Checkout</div>
              <div className="text-[10px] text-muted-gray">Checkout</div>
            </div>
            <span className="text-muted-gray hidden sm:inline">→</span>
            <div className="p-2 bg-white border border-soft-neutral rounded w-full sm:w-auto flex-1">
              <div className="text-charcoal font-medium">Orders</div>
              <div className="text-[10px] text-muted-gray">Orders</div>
            </div>
          </div>
        </div>
        <p className="font-body-sm text-body-sm text-charcoal leading-relaxed">
          Designed Express routes and workflows spanning authentication,
          catalog, wishlist, checkout, addresses, and notifications, using
          MongoDB for document-oriented persistence.
        </p>
      </div>
      <div className="space-y-4 pt-4 border-t border-soft-neutral">
        <div className="flex flex-wrap gap-1.5">
          <span className="font-label-badge text-label-badge uppercase px-2 py-0.5 rounded bg-pale-blush text-burgundy border border-[#800020]/15">
            JavaScript
          </span>
          <span className="font-label-badge text-label-badge uppercase px-2 py-0.5 rounded bg-pale-blush text-burgundy border border-[#800020]/15">
            Node.js
          </span>
          <span className="font-label-badge text-label-badge uppercase px-2 py-0.5 rounded bg-pale-blush text-burgundy border border-[#800020]/15">
            Express
          </span>
          <span className="font-label-badge text-label-badge uppercase px-2 py-0.5 rounded bg-pale-blush text-burgundy border border-[#800020]/15">
            MongoDB
          </span>
          <span className="font-label-badge text-label-badge uppercase px-2 py-0.5 rounded bg-pale-blush text-burgundy border border-[#800020]/15">
            REST APIs
          </span>
        </div>

        <ProjectDetails>
          <div
            className="p-4 bg-white border-t border-soft-neutral space-y-2 font-body-sm text-body-sm text-muted-gray"
            id="project-3-details"
          >
            <p>
              <strong className="text-charcoal">Purpose:</strong>Support
              e-commerce operations across products, users, carts, checkout,
              orders, and promotions.
            </p>
            <p>
              <strong className="text-charcoal">Implementation:</strong>Modular
              Express routes for authentication, catalog, wishlist, checkout,
              addresses, and notifications, using MongoDB for persistence.
            </p>
          </div>
        </ProjectDetails>
      </div>
    </article>
  );
}
