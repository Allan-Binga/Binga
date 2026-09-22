import ProjectCard from "./ProjectCard.jsx";

export default function FastStoreProject() {
  return (
    <ProjectCard
      title="Fast Store API"
      category="Backend Engineering"
      description="A modular REST API supporting e-commerce workflows, from product discovery to checkout and order management."
      repository="https://github.com/Allan-Binga/Fast-Store-API"
      stack={["JavaScript", "Node.js", "Express", "MongoDB", "REST APIs"]}
    >
<div className="p-4 space-y-4"><div className="bg-ivory border border-soft-neutral rounded p-4 space-y-3 font-label-meta text-[11px]">
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
        </div>
    </ProjectCard>
  );
}
