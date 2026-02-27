import SaBadge from "./components/SaBadge.vue";
import SaBreadcrumb from "./components/SaBreadcrumb.vue";
import SaButton from "./components/SaButton.vue";
import SaCalendar from "./components/SaCalendar.vue";
import SaCard from "./components/SaCard.vue";
import SaCheckbox from "./components/SaCheckbox.vue";
import SaDropdown from "./components/SaDropdown.vue";
import SaInput from "./components/SaInput.vue";
import SaModal from "./components/SaModal.vue";
import SaStepper from "./components/SaStepper.vue";
import SaToast from "./components/SaToast.vue";
import SaUploadArea from "./components/SaUploadArea.vue";
import SaTabs from "./components/SaTabs.vue";
import SaAccordion from "./components/SaAccordion.vue";
import SaSpinner from "./components/SaSpinner.vue";
import SaTable from "./components/SaTable.vue";
import SaTooltip from "./components/SaTooltip.vue";
import SaCarousel from "./components/SaCarousel.vue";
import SaSkeleton from "./components/SaSkeleton.vue";
import "./styles/tailwind.css";

// Export für Library-Build
export {
  SaBadge,
  SaBreadcrumb,
  SaButton,
  SaCalendar,
  SaCard,
  SaCheckbox,
  SaDropdown,
  SaInput,
  SaModal,
  SaStepper,
  SaToast,
  SaUploadArea,
  SaTabs,
  SaAccordion,
  SaSpinner,
  SaTable,
  SaTooltip,
  SaCarousel,
  SaSkeleton,
};

// Dev-Playground (nur für pnpm dev)
if (import.meta.env.DEV) {
  import("vue").then(({ createApp }) => {
    import("./App.vue").then(({ default: App }) => {
      createApp(App).mount("#app");
    });
  });
}
