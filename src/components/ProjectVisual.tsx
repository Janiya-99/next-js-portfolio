import {
  Box,
  Layers3,
  Database,
  ShieldCheck,
  FileText,
  Landmark,
  ArrowUpRight,
  Bike,
  MapPin,
  CreditCard,
  Ticket,
  UtensilsCrossed,
  Bell,
  Users,
  Braces,
} from "lucide-react";
import type { Project } from "@/data/projects";

export function ProjectVisual({
  theme,
  large = false,
}: {
  theme: Project["theme"];
  large?: boolean;
}) {
  return (
    <div
      className={`project-visual visual-${theme} ${large ? "visual-large" : ""}`}
    >
      <div className="visual-grid" />
      <span className="visual-overline">
        {theme === "erp"
          ? "CONNECTED OPERATIONS"
          : theme === "finance"
            ? "THE LENDING LIFECYCLE"
            : theme === "bicycle"
              ? "MOBILITY, CONNECTED"
              : "EXPERIENCES THAT CONNECT"}
      </span>
      <div className="visual-content" data-parallax>
        {theme === "erp" && (
          <div className="erp-diagram">
            <div className="diagram-node node-inventory">
              <Box />
              <span>Inventory</span>
              <small>Products · batches · stock</small>
            </div>
            <div className="diagram-node node-control">
              <ShieldCheck />
              <span>Control center</span>
              <small>Access · settings · audit</small>
            </div>
            <div className="erp-center">
              <Layers3 size={31} />
              <span>ERP</span>
              <small>ONE CONNECTED SYSTEM</small>
            </div>
            <div className="diagram-node node-finance">
              <Landmark />
              <span>Finance</span>
              <small>Journals · payments · ledger</small>
            </div>
            <div className="diagram-node node-invoice">
              <FileText />
              <span>Invoicing</span>
              <small>Sales · receipts · returns</small>
            </div>
            <div className="diagram-connect horizontal" />
            <div className="diagram-connect vertical" />
          </div>
        )}
        {theme === "finance" && (
          <div className="finance-diagram">
            <div className="finance-orbit" />
            <div className="finance-orbit orbit-inner" />
            <div className="finance-core">
              <Landmark size={35} />
              <span>
                Lending,
                <br />
                connected.
              </span>
            </div>
            <div className="finance-node finance-customer">
              <Users size={19} />
              <span>Customer records</span>
            </div>
            <div className="finance-node finance-loan">
              <FileText size={19} />
              <span>Loan workflows</span>
            </div>
            <div className="finance-node finance-payment">
              <CreditCard size={19} />
              <span>Repayments</span>
            </div>
            <div className="finance-node finance-report">
              <Database size={19} />
              <span>Ledgers & reports</span>
            </div>
            <span className="flow-dot dot-one" />
            <span className="flow-dot dot-two" />
          </div>
        )}
        {theme === "bicycle" && (
          <div className="bicycle-diagram">
            <svg viewBox="0 0 540 280" className="map-lines" aria-hidden="true">
              <path d="M-20 60 L560 210 M80-20 L270 300 M380-20 L230 300 M-20 220 L560 80" />
              <path
                className="map-route"
                d="M115 180 L215 210 L330 90 L424 125"
              />
            </svg>
            <div className="map-station station-one">
              <MapPin size={22} />
              <span>Station A</span>
            </div>
            <div className="map-station station-two">
              <MapPin size={22} />
              <span>Station B</span>
            </div>
            <div className="bike-core">
              <Bike size={42} />
            </div>
            <div className="map-api">
              <Braces size={18} />
              Station & bicycle APIs
              <Bell size={16} />
            </div>
          </div>
        )}
        {theme === "restaurant" && (
          <div className="restaurant-diagram">
            <div className="ticket-back">
              <UtensilsCrossed size={26} />
              <span>
                GOOD FOOD.
                <br />
                GREAT EXPERIENCES.
              </span>
              <small>RESTAURANT & EVENTS</small>
            </div>
            <div className="ticket-front">
              <div>
                <Ticket size={21} />
                <ArrowUpRight size={19} />
              </div>
              <span>
                From discovery
                <br />
                to the door.
              </span>
              <div className="ticket-divider" />
              <div className="ticket-checkout">
                <CreditCard size={18} />
                <span>Stripe checkout</span>
              </div>
            </div>
          </div>
        )}
      </div>
      <span className="illustration-label">
        <span />
        Architecture illustration
      </span>
      <span className="visual-index">
        JS /{" "}
        {theme === "erp"
          ? "01"
          : theme === "finance"
            ? "02"
            : theme === "bicycle"
              ? "03"
              : "04"}
      </span>
    </div>
  );
}
