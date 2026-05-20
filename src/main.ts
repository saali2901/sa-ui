import type { App } from "vue";

// ─── Components ───
import SaAccordion from "./components/SaAccordion/SaAccordion.vue";
import SaAlert from "./components/SaAlert/SaAlert.vue";
import SaAvatar from "./components/SaAvatar/SaAvatar.vue";
import SaBadge from "./components/SaBadge/SaBadge.vue";
import SaBreadcrumb from "./components/SaBreadcrumb/SaBreadcrumb.vue";
import SaButton from "./components/SaButton/SaButton.vue";
import SaCalendar from "./components/SaCalendar/SaCalendar.vue";
import SaCard from "./components/SaCard/SaCard.vue";
import SaCarousel from "./components/SaCarousel/SaCarousel.vue";
import SaCheckbox from "./components/SaCheckbox/SaCheckbox.vue";
import SaDivider from "./components/SaDivider/SaDivider.vue";
import SaDropdown from "./components/SaDropdown/SaDropdown.vue";
import SaFormField from "./components/SaFormField/SaFormField.vue";
import SaInput from "./components/SaInput/SaInput.vue";
import SaModal from "./components/SaModal/SaModal.vue";
import SaPagination from "./components/SaPagination/SaPagination.vue";
import SaProgress from "./components/SaProgress/SaProgress.vue";
import SaRadio from "./components/SaRadio/SaRadio.vue";
import SaSkeleton from "./components/SaSkeleton/SaSkeleton.vue";
import SaSpinner from "./components/SaSpinner/SaSpinner.vue";
import SaStepper from "./components/SaStepper/SaStepper.vue";
import SaSwitch from "./components/SaSwitch/SaSwitch.vue";
import SaTable from "./components/SaTable/SaTable.vue";
import SaTabs from "./components/SaTabs/SaTabs.vue";
import SaTag from "./components/SaTag/SaTag.vue";
import SaTextarea from "./components/SaTextarea/SaTextarea.vue";
import SaToast from "./components/SaToast/SaToast.vue";
import SaTooltip from "./components/SaTooltip/SaTooltip.vue";
import SaUploadArea from "./components/SaUploadArea/SaUploadArea.vue";
import SaSlider from "./components/SaSlider/SaSlider.vue";
import SaNumberInput from "./components/SaNumberInput/SaNumberInput.vue";
import SaSegmentedControl from "./components/SaSegmentedControl/SaSegmentedControl.vue";
import "./styles/tailwind.css";

// ─── All components for plugin registration ───
const components = {
  SaAccordion,
  SaAlert,
  SaAvatar,
  SaBadge,
  SaBreadcrumb,
  SaButton,
  SaCalendar,
  SaCard,
  SaCarousel,
  SaCheckbox,
  SaDivider,
  SaDropdown,
  SaFormField,
  SaInput,
  SaModal,
  SaPagination,
  SaProgress,
  SaRadio,
  SaSkeleton,
  SaSpinner,
  SaStepper,
  SaSwitch,
  SaTable,
  SaTabs,
  SaTag,
  SaTextarea,
  SaToast,
  SaTooltip,
  SaUploadArea,
  SaSlider,
  SaNumberInput,
  SaSegmentedControl,
} as const;

// ─── Vue Plugin ───
export const SaUI = {
  install(app: App) {
    for (const [name, component] of Object.entries(
      components as Record<
        string,
        ReturnType<(typeof import("vue"))["defineComponent"]>
      >,
    )) {
      app.component(name, component);
    }
  },
};

export default SaUI;

// ─── Named component exports ───
export {
  SaAccordion,
  SaAlert,
  SaAvatar,
  SaBadge,
  SaBreadcrumb,
  SaButton,
  SaCalendar,
  SaCard,
  SaCarousel,
  SaCheckbox,
  SaDivider,
  SaDropdown,
  SaFormField,
  SaInput,
  SaModal,
  SaPagination,
  SaProgress,
  SaRadio,
  SaSkeleton,
  SaSpinner,
  SaStepper,
  SaSwitch,
  SaTable,
  SaTabs,
  SaTag,
  SaTextarea,
  SaToast,
  SaTooltip,
  SaUploadArea,
  SaSlider,
  SaNumberInput,
  SaSegmentedControl,
};

// ─── Type exports ───
export type {
  AccordionItem,
  BreadcrumbItem,
  DropdownOption,
  TabItem,
  TableColumn,
  StepperStep,
  ToastType,
  ToastMessage,
  ToastPosition,
  RadioOption,
  SegmentedControlOption,
} from "./types";

// ─── Composable exports ───
export { useClickOutside } from "./composables";
